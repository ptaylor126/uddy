import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { supabaseAdmin } from '@/lib/supabase';
import { sendConfirmationEmail } from '@/lib/email';

// Basic email regex. Good enough for form validation; the confirmation click is what really proves the address.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const source = typeof body.source === 'string' ? body.source.slice(0, 64) : 'landing';

    if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Check if this email already exists
    const { data: existing } = await supabaseAdmin
      .from('signups')
      .select('id, status')
      .eq('email', email)
      .maybeSingle();

    if (existing?.status === 'confirmed') {
      // Already on the list. Don't leak that fact loudly, but don't resend either.
      return NextResponse.json({ ok: true, alreadyConfirmed: true });
    }

    // Generate a new token (URL-safe)
    const token = randomBytes(32).toString('base64url');

    if (existing) {
      // Pending row exists. Refresh the token and resend.
      await supabaseAdmin
        .from('signups')
        .update({ confirmation_token: token, created_at: new Date().toISOString() })
        .eq('id', existing.id);
    } else {
      const { error: insertError } = await supabaseAdmin.from('signups').insert({
        email,
        confirmation_token: token,
        status: 'pending',
        source,
      });

      if (insertError) {
        console.error('Signup insert error:', insertError);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
      }
    }

    // Send the confirmation email
    const result = await sendConfirmationEmail(email, token);

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: "Couldn't send the confirmation email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Signup handler error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
