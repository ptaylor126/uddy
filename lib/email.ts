import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string, token: string) {
  const confirmUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm?token=${token}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://uddyskin.com';

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Confirm your email</title>
      </head>
      <body style="margin:0; padding:0; background:#ffffff; font-family:Arial,Helvetica,sans-serif; color:#000;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
          <tr>
            <td align="center" style="padding:40px 24px;">

              <!-- Main card with thick right+bottom border to fake shadow -->
              <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px; background:#edece7; border-top:3px solid #000; border-left:3px solid #000; border-right:7px solid #000; border-bottom:7px solid #000;">
                            <tr>
                              <td style="padding:44px 44px 36px 44px;">

                                <!-- Wordmark -->
                                <img src="${baseUrl}/uddy-wordmark.svg" alt="uddy." width="220" style="display:block; width:220px; height:auto; margin-bottom:28px;" />

                                <!-- Heading -->
                                <h1 style="margin:0 0 10px 0; font-size:38px; line-height:1.05; font-weight:900; font-family:Arial,Helvetica,sans-serif; color:#d877b0; text-transform:uppercase;">YOU&#8217;RE NEARLY IN.</h1>

                                <!-- Sub-heading -->
                                <p style="margin:0 0 28px 0; font-size:17px; line-height:1.5; font-family:Arial,Helvetica,sans-serif; color:#000;">One quick click and you&#8217;re officially part of the herd.</p>

                                <!-- Section heading -->
                                <p style="margin:0 0 4px 0; font-size:13px; line-height:1.4; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#009e8c; text-transform:uppercase; letter-spacing:0.06em;">HERE&#8217;S WHAT YOU&#8217;LL GET:</p>
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px; border-top:2px solid #000;"><tr><td style="font-size:0; height:0;">&nbsp;</td></tr></table>

                                <!-- Bullet list with text bullets -->
                                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
                                  <tr>
                                    <td style="padding:12px 0; border-bottom:1px solid #ccc;">
                                      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                                        <td width="28" style="vertical-align:middle;"><img src="${baseUrl}/scribble-bullet.svg" alt="" width="14" height="14" style="display:block;" /></td>
                                        <td style="font-size:15px; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em; vertical-align:middle;">FIRST ACCESS TO OUR LAUNCH</td>
                                      </tr></table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:12px 0; border-bottom:1px solid #ccc;">
                                      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                                        <td width="28" style="vertical-align:middle;"><img src="${baseUrl}/scribble-bullet.svg" alt="" width="14" height="14" style="display:block;" /></td>
                                        <td style="font-size:15px; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em; vertical-align:middle;">EARLY DISCOUNTS</td>
                                      </tr></table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:12px 0; border-bottom:1px solid #ccc;">
                                      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                                        <td width="28" style="vertical-align:middle;"><img src="${baseUrl}/scribble-bullet.svg" alt="" width="14" height="14" style="display:block;" /></td>
                                        <td style="font-size:15px; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em; vertical-align:middle;">BEHIND-THE-SCENES UPDATES</td>
                                      </tr></table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:12px 0;">
                                      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                                        <td width="28" style="vertical-align:middle;"><img src="${baseUrl}/scribble-bullet.svg" alt="" width="14" height="14" style="display:block;" /></td>
                                        <td style="font-size:15px; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em; vertical-align:middle;">FIRST DIBS ON LIMITED BATCHES</td>
                                      </tr></table>
                                    </td>
                                  </tr>
                                </table>

                                <!-- CTA Button — thick border shadow -->
                                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:16px;">
                                  <tr>
                                    <td align="center">
                                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                          <td align="center" style="background:#009e8c; border-top:3px solid #000; border-left:3px solid #000; border-right:6px solid #000; border-bottom:6px solid #000;">
                                            <a href="${confirmUrl}" style="display:block; padding:18px 20px; font-size:18px; font-weight:900; color:#f9f5f0; text-decoration:none; font-family:Arial,Helvetica,sans-serif; text-transform:uppercase; letter-spacing:0.04em; text-align:center;">CONFIRM MY EMAIL</a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>

                                <!-- Click the button line -->
                                <p style="margin:0 0 24px 0; font-size:14px; line-height:1.5; font-family:Georgia,'Times New Roman',serif; font-style:italic; color:#666; text-align:center;">&#8618;&#xFE0E; Click the button above to join the herd.</p>

                                <!-- Divider -->
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                                  <tr><td style="border-top:1px solid #ccc; font-size:0; height:0;">&nbsp;</td></tr>
                                </table>

                                <!-- No spam block with cow SVG -->
                                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                                  <tr>
                                    <td width="44" style="vertical-align:top; padding-right:8px;"><img src="${baseUrl}/cow.svg" alt="" width="32" height="24" style="display:block;" /></td>
                                    <td style="vertical-align:top;">
                                      <p style="margin:0 0 2px 0; font-size:14px; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#000; text-transform:uppercase; letter-spacing:0.02em;">NO SPAM. NO NONSENSE.</p>
                                      <p style="margin:0; font-size:14px; font-weight:800; font-family:Arial,Helvetica,sans-serif; color:#009e8c; text-transform:uppercase; letter-spacing:0.02em;">JUST UDDY.</p>
                                    </td>
                                  </tr>
                                </table>

                                <!-- Signature -->
                                <p style="margin:0; font-size:20px; font-family:Georgia,'Times New Roman',serif; font-style:italic; color:#000;">&mdash; Jack &amp; Hollie</p>

                              </td>
                            </tr>

                            <!-- Fallback / fine print -->
                            <tr>
                              <td style="padding:20px 44px 32px 44px; border-top:3px solid #000;">
                                <p style="margin:0 0 10px 0; font-size:12px; line-height:1.5; color:#888; font-family:Arial,Helvetica,sans-serif;">If the button doesn&#8217;t work, paste this into your browser:<br/><a href="${confirmUrl}" style="color:#888; word-break:break-all;">${confirmUrl}</a></p>
                                <p style="margin:0; font-size:12px; line-height:1.5; color:#888; font-family:Arial,Helvetica,sans-serif;">If you didn&#8217;t sign up, just ignore this email and nothing will happen.</p>
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

-- Jack & Hollie

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
