"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useCart } from "@/components/CartProvider";

interface OrderDetails {
  customerEmail: string | null;
  customerName: string | null;
  amount: number;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Clear cart on successful checkout
    clearCart();

    // Fetch order details if we have a session ID
    if (sessionId) {
      fetch(`/api/order?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setOrderDetails(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId, clearCart]);

  return (
    <div className="pt-20 min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4 max-w-lg">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-[var(--color-green)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif mb-4">
          Thank you for your order!
        </h1>

        {loading ? (
          <p className="text-[var(--color-charcoal)]/70 mb-8">
            Loading order details...
          </p>
        ) : orderDetails ? (
          <div className="mb-8">
            <p className="text-[var(--color-charcoal)]/70 mb-4">
              We&apos;ve sent a confirmation email to{" "}
              <strong>{orderDetails.customerEmail}</strong>
            </p>
            <div className="bg-white rounded-xl p-6 text-left mb-6">
              <h2 className="font-serif text-lg mb-4">Order Summary</h2>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-charcoal)]/70">
                  Customer
                </span>
                <span>{orderDetails.customerName}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-[var(--color-charcoal)]/70">Total</span>
                <span className="font-medium">
                  £{(orderDetails.amount / 100).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-[var(--color-charcoal)]/70 mb-8">
            Your order has been confirmed. We&apos;ve sent you an email with
            your order details.
          </p>
        )}

        <div className="space-y-4">
          <div className="bg-[var(--color-pink)]/10 rounded-xl p-4">
            <h3 className="font-medium mb-2">What happens next?</h3>
            <ol className="text-sm text-left text-[var(--color-charcoal)]/70 space-y-2">
              <li className="flex gap-2">
                <span className="text-[var(--color-pink)]">1.</span>
                We&apos;ll prepare your order within 1-2 business days
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-pink)]">2.</span>
                You&apos;ll receive a shipping notification email
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-pink)]">3.</span>
                Your order will arrive in 2-5 business days
              </li>
            </ol>
          </div>

          <Link href="/">
            <Button variant="outline" size="lg" className="w-full">
              Continue Shopping
            </Button>
          </Link>
        </div>

        <p className="text-sm text-[var(--color-charcoal)]/60 mt-8">
          Questions about your order?{" "}
          <a
            href="mailto:hello@uddyskincare.com"
            className="text-[var(--color-pink)] hover:underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-20 min-h-[70vh] flex items-center justify-center">
          <p>Loading...</p>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
