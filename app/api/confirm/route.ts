import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  if (!token) {
    return NextResponse.redirect(`${siteUrl}/confirmed?status=invalid`);
  }

  const { data: signup, error } = await supabaseAdmin
    .from('signups')
    .select('id, status')
    .eq('confirmation_token', token)
    .maybeSingle();

  if (error || !signup) {
    return NextResponse.redirect(`${siteUrl}/confirmed?status=invalid`);
  }

  if (signup.status === 'confirmed') {
    return NextResponse.redirect(`${siteUrl}/confirmed?status=already`);
  }

  const { error: updateError } = await supabaseAdmin
    .from('signups')
    .update({
      status: 'confirmed',
      confirmed_at: new Date().toISOString(),
    })
    .eq('id', signup.id);

  if (updateError) {
    console.error('Confirm update error:', updateError);
    return NextResponse.redirect(`${siteUrl}/confirmed?status=error`);
  }

  return NextResponse.redirect(`${siteUrl}/confirmed?status=success`);
}
