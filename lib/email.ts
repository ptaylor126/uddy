import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string, token: string) {
  const confirmUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm?token=${token}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Confirm your email</title>
      </head>
      <body style="margin:0; padding:0; background:#FAF5EF; font-family: Georgia, 'Times New Roman', serif; color:#1a1a1a;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF5EF;">
          <tr>
            <td align="center" style="padding:48px 24px;">
              <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px; background:#ffffff; border:2px solid #1a1a1a; border-radius:12px;">
                <tr>
                  <td style="padding:40px 40px 24px 40px;">
                    <h1 style="margin:0 0 24px 0; font-size:36px; line-height:1.1; font-weight:700; letter-spacing:-0.02em;">Uddy</h1>
                    <p style="margin:0 0 16px 0; font-size:17px; line-height:1.5;">Thanks for signing up.</p>
                    <p style="margin:0 0 24px 0; font-size:17px; line-height:1.5;">Tap the button below to confirm your email and join the list. We'll be in touch before we launch.</p>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:#3EB489; border:2px solid #1a1a1a; border-radius:999px;">
                          <a href="${confirmUrl}" style="display:inline-block; padding:14px 28px; font-size:16px; font-weight:600; color:#1a1a1a; text-decoration:none; font-family: Georgia, serif;">Confirm my email</a>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:32px 0 0 0; font-size:14px; line-height:1.5; color:#666;">If the button doesn't work, paste this into your browser:<br/><a href="${confirmUrl}" style="color:#666; word-break:break-all;">${confirmUrl}</a></p>
                    <p style="margin:24px 0 0 0; font-size:14px; line-height:1.5; color:#666;">If you didn't sign up, just ignore this email and nothing will happen.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 40px; border-top:1px solid #eee;">
                    <p style="margin:0; font-size:13px; color:#999;">Jack &amp; Hollie &middot; Uddy</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const text = `Thanks for signing up to Uddy.

Confirm your email to join the list: ${confirmUrl}

If you didn't sign up, just ignore this email.

Jack & Hollie`;

  return resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    replyTo: process.env.EMAIL_REPLY_TO,
    subject: 'Confirm your email for Uddy',
    html,
    text,
  });
}
