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
      <body style="margin:0; padding:0; background:#F5F2ED; font-family:Arial,Helvetica,sans-serif; color:#000;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F2ED;">
          <tr>
            <td align="center" style="padding:48px 24px;">
              <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px; background:#ffffff; border:3px solid #000; box-shadow:4px 4px 0 #000;">

                <!-- Main content -->
                <tr>
                  <td style="padding:40px 40px 0 40px;">
                    <!-- Wordmark -->
                    <h1 style="margin:0 0 28px 0; font-size:42px; line-height:1; font-weight:900; letter-spacing:-0.02em; font-family:Arial,Helvetica,sans-serif; color:#000;">uddy.</h1>

                    <!-- Heading -->
                    <h2 style="margin:0 0 12px 0; font-size:32px; line-height:1.1; font-weight:900; font-family:Arial,Helvetica,sans-serif; color:#009e8c; text-transform:uppercase;">YOU&rsquo;RE NEARLY IN.</h2>

                    <!-- Sub-heading -->
                    <p style="margin:0 0 28px 0; font-size:17px; line-height:1.5; font-family:Arial,Helvetica,sans-serif; color:#000;">One quick click and you&rsquo;re officially part of the herd.</p>

                    <!-- Section heading -->
                    <p style="margin:0 0 16px 0; font-size:14px; line-height:1.4; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#009e8c; text-transform:uppercase; letter-spacing:0.04em; border-bottom:2px solid #000; padding-bottom:8px;">HERE&rsquo;S WHAT YOU&rsquo;LL GET:</p>

                    <!-- Bullet list -->
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
                      <tr>
                        <td style="padding:10px 0; border-bottom:1px solid #e0ddd8;">
                          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                            <td style="font-size:16px; color:#000; padding-right:10px; vertical-align:top; font-weight:700;">&bull;</td>
                            <td style="font-size:15px; font-weight:700; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em;">FIRST ACCESS TO OUR LAUNCH</td>
                          </tr></table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0; border-bottom:1px solid #e0ddd8;">
                          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                            <td style="font-size:16px; color:#000; padding-right:10px; vertical-align:top; font-weight:700;">&bull;</td>
                            <td style="font-size:15px; font-weight:700; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em;">EARLY DISCOUNTS</td>
                          </tr></table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0; border-bottom:1px solid #e0ddd8;">
                          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                            <td style="font-size:16px; color:#000; padding-right:10px; vertical-align:top; font-weight:700;">&bull;</td>
                            <td style="font-size:15px; font-weight:700; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em;">BEHIND-THE-SCENES UPDATES</td>
                          </tr></table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;">
                          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                            <td style="font-size:16px; color:#000; padding-right:10px; vertical-align:top; font-weight:700;">&bull;</td>
                            <td style="font-size:15px; font-weight:700; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em;">FIRST DIBS ON LIMITED BATCHES</td>
                          </tr></table>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA Button -->
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
                      <tr>
                        <td align="center">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="background:#009e8c; border:3px solid #000; box-shadow:3px 3px 0 #000;">
                                <a href="${confirmUrl}" style="display:inline-block; padding:16px 40px; font-size:17px; font-weight:900; color:#f9f5f0; text-decoration:none; font-family:Arial,Helvetica,sans-serif; text-transform:uppercase; letter-spacing:0.03em;">CONFIRM MY EMAIL</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                      <tr><td style="border-top:2px solid #000; font-size:0; height:0;">&nbsp;</td></tr>
                    </table>

                    <!-- No spam line -->
                    <p style="margin:0 0 4px 0; font-size:14px; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em;">NO SPAM. NO NONSENSE.</p>
                    <p style="margin:0 0 20px 0; font-size:14px; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#009e8c; text-transform:uppercase; letter-spacing:0.02em;">JUST UDDY.</p>

                    <!-- Signature -->
                    <p style="margin:0 0 0 0; font-size:16px; font-weight:700; font-family:Arial,Helvetica,sans-serif; color:#000;">&mdash; Jack &amp; Hollie</p>
                  </td>
                </tr>

                <!-- Fallback / fine print -->
                <tr>
                  <td style="padding:24px 40px; border-top:3px solid #000;">
                    <p style="margin:0 0 12px 0; font-size:13px; line-height:1.5; color:#666; font-family:Arial,Helvetica,sans-serif;">If the button doesn&rsquo;t work, paste this into your browser:<br/><a href="${confirmUrl}" style="color:#666; word-break:break-all;">${confirmUrl}</a></p>
                    <p style="margin:0; font-size:13px; line-height:1.5; color:#666; font-family:Arial,Helvetica,sans-serif;">If you didn&rsquo;t sign up, just ignore this email and nothing will happen.</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const text = `YOU'RE NEARLY IN.

One quick click and you're officially part of the herd.

HERE'S WHAT YOU'LL GET:
- First access to our launch
- Early discounts
- Behind-the-scenes updates
- First dibs on limited batches

Confirm your email to join the list: ${confirmUrl}

NO SPAM. NO NONSENSE. JUST UDDY.

— Jack & Hollie

If the button doesn't work, paste this into your browser: ${confirmUrl}
If you didn't sign up, just ignore this email.`;

  return resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    replyTo: process.env.EMAIL_REPLY_TO,
    subject: 'Confirm your email for Uddy',
    html,
    text,
  });
}
