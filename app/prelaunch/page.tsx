'use client';

import { useState, FormEvent } from 'react';
import Marquee from '@/components/Marquee';

/**
 * Landing page for Uddy pre-launch.
 *
 * Neubrutalist styling matched to the live uddyskin.co.uk homepage:
 *  - Marquee ticker
 *  - Hard offset text shadow on hero ("FEED YOUR FACE.")
 *  - Rotated yellow sticker badge
 *  - White subhead box with thick black border
 *  - Ingredient cards with alternating green/pink hard drop shadows
 *  - Handwritten pink script for accent copy
 *  - Button with hard offset shadow that "presses down" on hover
 *
 * Asset paths assume /public contains:
 *  /uddy-pink-logo.png, /sticker-tallow.png, /sticker-jojoba.png,
 *  /sticker-oat.png, /illustrations/sticker-essentialoils.png
 *
 * Fonts come from next/font variables declared in app/layout.tsx:
 *  --font-montserrat (display + body), --font-pacifico (handwritten script).
 */
export default function PrelaunchPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'landing' }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  return (
    <>
      <Marquee />

      {/* Logo bar */}
      <header className="uddy-header">
        <img src="/logo-home-new.svg" alt="Uddy" className="logo" />
      </header>

      <main className="uddy-prelaunch">
        <div className="container">

          {/* Hero — pink block */}
          <section className="hero-block">
            <div className="hero-sticker">
              <span>Coming<br/>Soon</span>
            </div>

            <h1 className="headline">
              Feed<br/>your<br/>face.
            </h1>

            <div className="subhead-box">
              <p>Tallow-based skincare for dry, sensitive and easily irritated skin.</p>
            </div>
          </section>

          {/* Signup */}
          <section className="signup">
            {status === 'success' ? (
              <div className="success-card" role="status">
                <h2 className="success-heading">You&rsquo;re on the list.</h2>
                <p>
                  We&rsquo;ve sent a confirmation link to <strong>{email}</strong>.
                  Tap it to finish signing up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="signup-heading">Get on the list.</h2>
                <p className="signup-sub">Be first to know when we launch.</p>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={status === 'loading'}
                    aria-label="Email address"
                    className="email-input"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading' || !email}
                    className="submit-button"
                  >
                    {status === 'loading' ? 'Sending…' : 'Join'}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="error-message" role="alert">{errorMsg}</p>
                )}
              </form>
            )}
          </section>

          {/* Ingredients */}
          <section className="ingredients-section">
            <div className="ingredients-header">
              <p className="section-eyebrow">Transparency</p>
              <h2 className="section-title">No Nasties.<br/>Just Nature.</h2>
              <div className="rotated-tag">Simple Formulations Only</div>
            </div>

            <div className="ingredients">
              <div className="ingredient-card shadow-green">
                <div className="sticker-wrap">
                  <img src="/sticker-tallow.png" alt="Grass Fed Tallow" className="sticker" />
                </div>
                <p className="ingredient-name">Grass Fed Tallow</p>
                <p className="ingredient-body">Sourced from grass-fed UK cows. The foundation of every Uddy product.</p>
              </div>
              <div className="ingredient-card shadow-pink">
                <div className="sticker-wrap">
                  <img src="/sticker-jojoba.png" alt="Jojoba Oil" className="sticker" />
                </div>
                <p className="ingredient-name">Jojoba Oil</p>
                <p className="ingredient-body">Lightweight and gentle. Helps lock in moisture without clogging pores.</p>
              </div>
              <div className="ingredient-card shadow-green">
                <div className="sticker-wrap">
                  <img src="/sticker-oat.png" alt="Oat Extract Oil" className="sticker" />
                </div>
                <p className="ingredient-name">Oat Extract Oil</p>
                <p className="ingredient-body">Naturally soothing. Calms irritation and softens dry skin.</p>
              </div>
              <div className="ingredient-card shadow-pink">
                <div className="sticker-wrap">
                  <img src="/essential-oils.png" alt="Essential Oils" className="sticker" />
                </div>
                <p className="ingredient-name">Essential Oils</p>
                <p className="ingredient-body">A drop of lavender. Just enough to calm the skin and the senses.</p>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="story">
            <p className="story-pull">&ldquo;Uddy comes from our son, who couldn&rsquo;t say Daddy.&rdquo;</p>
            <p className="story-body">
              We&rsquo;re Jack &amp; Hollie. Jack had the bad skin
              (eczema, acne, the works). Hollie had the idea.
            </p>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p className="footer-motto">
              Your skin doesn&rsquo;t need fighting — it needs feeding.
            </p>
            <p className="footer-meta">© Uddy {new Date().getFullYear()}</p>
          </footer>
        </div>
      </main>

      <style jsx>{`
        /* Marquee provided by <Marquee /> component. */

        /* ================ HEADER ================ */
        .uddy-header {
          background: #FAF5EF;
          padding: 20px;
          text-align: center;
          border-bottom: 3px solid #1a1a1a;
        }
        .logo {
          max-width: 280px;
          height: auto;
          display: inline-block;
        }

        /* ================ MAIN ================ */
        .uddy-prelaunch {
          background: #FAF5EF;
          color: #1a1a1a;
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 400;
          padding: 40px 20px 64px;
        }
        .container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          animation: fadeUp 0.6s ease-out both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ================ HERO BLOCK ================ */
        .hero-block {
          background: #F58AA0;
          border: 3px solid #1a1a1a;
          border-radius: 4px;
          padding: 48px 32px 56px;
          margin-bottom: 56px;
          position: relative;
          box-shadow: 10px 10px 0 #1a1a1a;
          text-align: center;
        }

        .hero-sticker {
          position: absolute;
          top: 28px;
          right: 32px;
          width: 110px;
          height: 110px;
          background: #FFD84D;
          border: 3px solid #1a1a1a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-12deg);
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: 15px;
          text-transform: uppercase;
          line-height: 1.1;
          text-align: center;
          color: #1a1a1a;
          box-shadow: 4px 4px 0 #1a1a1a;
        }

        .headline {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: clamp(64px, 13vw, 128px);
          line-height: 0.88;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin: 0 auto 32px auto;
          color: #ffffff;
          text-shadow: 6px 6px 0 #1a1a1a;
        }

        .subhead-box {
          display: inline-block;
          background: #ffffff;
          border: 3px solid #1a1a1a;
          padding: 16px 22px;
          box-shadow: 5px 5px 0 #1a1a1a;
          max-width: 420px;
          margin-bottom: 24px;
        }
        .subhead-box p {
          margin: 0;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 500;
          color: #1a1a1a;
        }

        /* ================ SIGNUP ================ */
        .signup {
          max-width: 580px;
          margin: 40px auto 96px;
          text-align: center;
        }
        .signup-heading {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: clamp(36px, 6vw, 52px);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1;
          margin: 0 0 16px 0;
          color: #1a1a1a;
        }
        .signup-sub {
          font-size: 17px;
          font-weight: 400;
          margin: 0 0 40px 0;
          color: #2a2a2a;
        }
        .form-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .email-input {
          flex: 1;
          min-width: 0;
          padding: 16px 20px;
          border: 3px solid #1a1a1a;
          border-radius: 4px;
          background: #ffffff;
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #1a1a1a;
          outline: none;
          box-shadow: 4px 4px 0 #1a1a1a;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .email-input:focus {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #1a1a1a;
        }
        .email-input::placeholder { color: #999; }

        .submit-button {
          padding: 16px 32px;
          border: 3px solid #1a1a1a;
          border-radius: 4px;
          background: #2FA07A;
          color: #ffffff;
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: 16px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 5px 5px 0 #1a1a1a;
          transition: transform 0.08s ease, box-shadow 0.08s ease, background 0.15s ease;
          white-space: nowrap;
        }
        .submit-button:hover:not(:disabled) {
          transform: translate(3px, 3px);
          box-shadow: 2px 2px 0 #1a1a1a;
        }
        .submit-button:active:not(:disabled) {
          transform: translate(5px, 5px);
          box-shadow: 0 0 0 #1a1a1a;
        }
        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .error-message {
          margin: 14px 4px 0;
          font-size: 14px;
          color: #b42318;
          font-weight: 600;
        }

        .success-card {
          background: #ffffff;
          border: 3px solid #1a1a1a;
          padding: 32px 24px;
          box-shadow: 8px 8px 0 #2FA07A;
          border-radius: 4px;
        }
        .success-heading {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: clamp(28px, 5vw, 40px);
          text-transform: uppercase;
          margin: 0 0 12px 0;
          line-height: 1;
        }
        .success-card p {
          margin: 0;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          color: #1a1a1a;
        }

        /* ================ INGREDIENTS ================ */
        .ingredients-section {
          margin-bottom: 72px;
        }
        .ingredients-header {
          margin-bottom: 40px;
          position: relative;
        }
        .section-eyebrow {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1a1a1a;
          margin: 0 0 12px 0;
        }
        .section-title {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: clamp(42px, 7vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin: 0;
          color: #1a1a1a;
        }
        .rotated-tag {
          display: inline-block;
          position: absolute;
          top: 10px;
          right: 0;
          background: #1a1a1a;
          color: #ffffff;
          padding: 10px 18px;
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transform: rotate(-4deg);
        }
        @media (max-width: 720px) {
          .rotated-tag {
            position: static;
            margin-top: 20px;
            transform: rotate(-3deg);
          }
        }

        .ingredients {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .ingredient-card {
          background: #ffffff;
          border: 3px solid #1a1a1a;
          padding: 20px 18px 22px;
          border-radius: 4px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .shadow-green { box-shadow: 6px 6px 0 #2FA07A; }
        .shadow-pink { box-shadow: 6px 6px 0 #F58AA0; }

        .sticker-wrap {
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .sticker {
          max-height: 130px;
          max-width: 110px;
          width: auto;
          object-fit: contain;
        }
        .ingredient-name {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin: 0 0 8px 0;
          line-height: 1.1;
          color: #1a1a1a;
          min-height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ingredient-body {
          font-size: 13px;
          font-weight: 400;
          line-height: 1.4;
          margin: 0;
          color: #2a2a2a;
        }

        /* ================ STORY ================ */
        .story {
          background: #F58AA0;
          border: 3px solid #1a1a1a;
          padding: 48px 32px;
          text-align: center;
          margin-bottom: 56px;
          box-shadow: 8px 8px 0 #1a1a1a;
          border-radius: 4px;
          background-image: radial-gradient(circle, rgba(26,26,26,0.08) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
        }
        .story-pull {
          font-family: var(--font-kalam), cursive;
          font-size: clamp(28px, 5vw, 42px);
          line-height: 1.1;
          margin: 0 0 20px 0;
          color: #1a1a1a;
          transform: rotate(-1deg);
        }
        .story-body {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.5;
          margin: 0 auto;
          color: #1a1a1a;
          max-width: 480px;
        }

        /* ================ FOOTER ================ */
        .footer {
          text-align: center;
          padding-top: 24px;
          border-top: 2px solid #1a1a1a;
        }
        .footer-motto {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: 16px;
          margin: 0 0 6px 0;
          color: #1a1a1a;
        }
        .footer-meta {
          margin: 0;
          font-size: 13px;
          color: #666;
          font-weight: 500;
        }

        @media (max-width: 720px) {
          .hero-sticker {
            width: 90px;
            height: 90px;
            font-size: 13px;
            top: 16px;
            right: 16px;
          }
          .hero-block {
            padding: 36px 24px 40px;
          }
          .ingredients {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 480px) {
          .form-row { flex-direction: column; }
          .submit-button { width: 100%; }
          .ingredients {
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
}
