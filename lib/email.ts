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
      <body style="margin:0; padding:0; background:#edece7; font-family: Arial, Helvetica, sans-serif; color:#000;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#edece7;">
          <tr>
            <td align="center" style="padding:48px 24px;">
              <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px; background:#ffffff; border:3px solid #000; box-shadow:4px 4px 0 #000;">
                <tr>
                  <td style="padding:40px 40px 24px 40px;">
                    <h1 style="margin:0 0 24px 0; font-size:36px; line-height:1.1; font-weight:900; letter-spacing:-0.02em; font-family:Arial,Helvetica,sans-serif; text-transform:lowercase;">uddy.</h1>
                    <p style="margin:0 0 16px 0; font-size:17px; line-height:1.5; font-family:Arial,Helvetica,sans-serif;">Thanks for signing up.</p>
                    <p style="margin:0 0 24px 0; font-size:17px; line-height:1.5; font-family:Arial,Helvetica,sans-serif;">Tap the button below to confirm your email and join the list. We'll be in touch before we launch.</p>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:#009e8c; border:3px solid #000; box-shadow:3px 3px 0 #000;">
                          <a href="${confirmUrl}" style="display:inline-block; padding:14px 28px; font-size:16px; font-weight:800; color:#fff; text-decoration:none; font-family:Arial,Helvetica,sans-serif; text-transform:uppercase; letter-spacing:0.02em;">Confirm my email</a>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:32px 0 0 0; font-size:14px; line-height:1.5; color:#666; font-family:Arial,Helvetica,sans-serif;">If the button doesn't work, paste this into your browser:<br/><a href="${confirmUrl}" style="color:#666; word-break:break-all;">${confirmUrl}</a></p>
                    <p style="margin:24px 0 0 0; font-size:14px; line-height:1.5; color:#666; font-family:Arial,Helvetica,sans-serif;">If you didn't sign up, just ignore this email and nothing will happen.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 40px; border-top:3px solid #000;">
                    <p style="margin:0; font-size:13px; color:#666; font-family:Arial,Helvetica,sans-serif; font-weight:700;">Jack &amp; Hollie &middot; Uddy</p>
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
