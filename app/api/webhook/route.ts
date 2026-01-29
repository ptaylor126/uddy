import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      await handleSuccessfulPayment(session);
      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  const customerEmail = session.customer_details?.email;
  const customerName = session.customer_details?.name;
  // @ts-expect-error - shipping_details exists on expanded session
  const shippingAddress = session.shipping_details?.address || session.collected_information?.shipping_details?.address;
  const amountTotal = session.amount_total;
  const items = session.metadata?.items
    ? JSON.parse(session.metadata.items)
    : [];

  // Send customer confirmation email
  if (customerEmail && resend) {
    try {
      await resend.emails.send({
        from: "Uddy Skincare <orders@uddyskincare.com>",
        to: customerEmail,
        subject: "Order Confirmation - Uddy Skincare",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2D2D2D;">Thank you for your order!</h1>
            <p>Hi ${customerName || "there"},</p>
            <p>We've received your order and are getting it ready to ship.</p>

            <h2 style="color: #E8B4B8; border-bottom: 1px solid #eee; padding-bottom: 10px;">Order Details</h2>
            <ul style="list-style: none; padding: 0;">
              ${items
                .map(
                  (item: { name: string; quantity: number }) =>
                    `<li style="padding: 10px 0; border-bottom: 1px solid #eee;">${item.name} x ${item.quantity}</li>`
                )
                .join("")}
            </ul>
            <p style="font-size: 18px; font-weight: bold; margin-top: 20px;">Total: £${((amountTotal || 0) / 100).toFixed(2)}</p>

            ${
              shippingAddress
                ? `
            <h2 style="color: #E8B4B8; border-bottom: 1px solid #eee; padding-bottom: 10px;">Shipping Address</h2>
            <p>
              ${shippingAddress.line1}<br>
              ${shippingAddress.line2 ? `${shippingAddress.line2}<br>` : ""}
              ${shippingAddress.city}<br>
              ${shippingAddress.postal_code}<br>
              ${shippingAddress.country}
            </p>
            `
                : ""
            }

            <p style="margin-top: 30px;">If you have any questions, just reply to this email.</p>
            <p>— Jack & Hollie</p>
            <p style="color: #A8C5A8; font-style: italic;">Uddy Skincare</p>
          </div>
        `,
      });
    } catch (error) {
      console.error("Failed to send customer email:", error);
    }
  }

  // Send admin notification
  if (resend) try {
    await resend.emails.send({
      from: "Uddy Orders <orders@uddyskincare.com>",
      to: process.env.ADMIN_EMAIL || "hello@uddyskincare.com",
      subject: `New Order from ${customerName || customerEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2D2D2D;">New Order Received!</h1>

          <h2>Customer Details</h2>
          <p>Name: ${customerName || "N/A"}</p>
          <p>Email: ${customerEmail || "N/A"}</p>

          <h2>Order Details</h2>
          <ul>
            ${items
              .map(
                (item: { name: string; quantity: number }) =>
                  `<li>${item.name} x ${item.quantity}</li>`
              )
              .join("")}
          </ul>
          <p><strong>Total: £${((amountTotal || 0) / 100).toFixed(2)}</strong></p>

          ${
            shippingAddress
              ? `
          <h2>Shipping Address</h2>
          <p>
            ${shippingAddress.line1}<br>
            ${shippingAddress.line2 ? `${shippingAddress.line2}<br>` : ""}
            ${shippingAddress.city}<br>
            ${shippingAddress.postal_code}<br>
            ${shippingAddress.country}
          </p>
          `
              : ""
          }

          <p>Session ID: ${session.id}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send admin email:", error);
  }
}
