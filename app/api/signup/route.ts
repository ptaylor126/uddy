import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { supabaseAdmin } from '@/lib/supabase';
import { sendConfirmationEmail } from '@/lib/email';

// Basic email regex. Good enough for form validation; the confirmation click is what really proves the address.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function envCheck() {
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'SUPABASE_SERVICE_ROLE_KEY',
    'RESEND_API_KEY',
    'EMAIL_FROM',
    'NEXT_PUBLIC_BASE_URL',
  ];
  const missing = required.filter((k) => !process.env[k]);
  return missing.length ? missing : null;
}

export async function POST(request: NextRequest) {
  try {
    const missing = envCheck();
    if (missing) {
      console.error('[signup] Missing env vars:', missing.join(', '));
      return NextResponse.json({ error: 'Server is misconfigured. Please try again later.' }, { status: 500 });
    }

    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const source = typeof body.source === 'string' ? body.source.slice(0, 64) : 'landing';

    if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const { data: existing, error: selectError } = await supabaseAdmin
      .from('signups')
      .select('id, status')
      .eq('email', email)
      .maybeSingle();

    if (selectError) {
      console.error('[signup] Supabase select error:', JSON.stringify(selectError, null, 2));
      return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }

    if (existing?.status === 'confirmed') {
      // Already on the list. Don't leak that fact loudly, but don't resend either.
      return NextResponse.json({ ok: true, alreadyConfirmed: true });
    }

    const token = randomBytes(32).toString('base64url');

    if (existing) {
      const { error: updateError } = await supabaseAdmin
        .from('signups')
        .update({ confirmation_token: token, created_at: new Date().toISOString() })
        .eq('id', existing.id);

      if (updateError) {
        console.error('[signup] Supabase update error:', JSON.stringify(updateError, null, 2));
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
      }
    } else {
      const { error: insertError } = await supabaseAdmin.from('signups').insert({
        email,
        confirmation_token: token,
        status: 'pending',
        source,
      });

      if (insertError) {
        console.error('[signup] Supabase insert error:', JSON.stringify(insertError, null, 2));
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
      }
    }

    const result = await sendConfirmationEmail(email, token);

    if (result.error) {
      console.error('[signup] Resend error:', JSON.stringify(result.error, null, 2));
      return NextResponse.json({ error: "Couldn't send the confirmation email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[signup] Unhandled error:', err instanceof Error ? `${err.name}: ${err.message}\n${err.stack}` : err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
