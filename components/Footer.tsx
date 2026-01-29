"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        setSubscribeStatus("error");
      }
    } catch {
      setSubscribeStatus("error");
    }
  };

  return (
    <footer className="bg-uddy-black text-white border-t-4 border-uddy-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-4xl font-black tracking-tight">
                <span className="text-uddy-pink">uddy</span>
                <span className="text-uddy-green">.</span>
              </span>
            </Link>
            <p className="text-white/70 font-semibold leading-relaxed">
              Simple, effective skincare. Your skin doesn&apos;t need fighting — it
              needs feeding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black uppercase text-lg mb-6 text-uddy-green">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/product/cow-tallow-face-balm"
                  className="text-white/70 hover:text-uddy-pink transition-colors font-semibold"
                >
                  Face Balm
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-white/70 hover:text-uddy-pink transition-colors font-semibold"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-black uppercase text-lg mb-6 text-uddy-pink">About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-uddy-green transition-colors font-semibold"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/70 hover:text-uddy-green transition-colors font-semibold"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@uddyskincare.com"
                  className="text-white/70 hover:text-uddy-green transition-colors font-semibold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-black uppercase text-lg mb-6 text-uddy-yellow">Newsletter</h3>
            <p className="text-white/70 mb-4 font-semibold">
              Get tips & updates. No spam, we promise.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white text-uddy-black font-bold border-4 border-white placeholder:text-uddy-black/50 focus:outline-none focus:border-uddy-pink"
                required
              />
              <button
                type="submit"
                disabled={subscribeStatus === "loading"}
                className="w-full bg-uddy-pink text-uddy-black font-black py-3 border-4 border-uddy-pink hover:bg-uddy-green hover:border-uddy-green transition-colors uppercase tracking-wide disabled:opacity-50"
              >
                {subscribeStatus === "loading" ? "..." : "Subscribe"}
              </button>
              {subscribeStatus === "success" && (
                <p className="text-uddy-green font-bold text-sm">
                  You&apos;re in! Welcome to the herd.
                </p>
              )}
              {subscribeStatus === "error" && (
                <p className="text-red-400 font-bold text-sm">
                  Oops! Something went wrong.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t-2 border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 font-semibold text-sm">
            &copy; {new Date().getFullYear()} Uddy Skincare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/50 font-semibold text-sm">UK Only</span>
            <span className="text-uddy-black font-black bg-uddy-green px-4 py-2 text-sm uppercase">
              Free Shipping £30+
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
