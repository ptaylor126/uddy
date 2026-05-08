'use client';

import { useState, FormEvent } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-inter',
});

export default function PrelaunchPage() {
  const [email, setEmail] = useState('');
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  return (
    <div className={`page ${inter.variable}`}>
      {/* Background strips (page level) */}
      <div className="bg-teal-top" />
      <div className="bg-pink-bottom" />

      {/* Content layout */}
      <div className="layout">
        {/* Shapes layered between hero and copy panel */}
        <div className="bg-teal-wedge" />
        <div className="bg-pink-shape" />
        {/* Left copy panel */}
        <div className="copy-panel">
          <div className="copy-inner">
            <img src="/uddy-wordmark.svg" alt="Uddy" className="wordmark" />

            <div className="tagline-wrap">
              <p className="tagline">JOIN THE HERD</p>
            </div>

            <div className="yellow-box">
              <p>Most skincare is packed with ingredients you can&rsquo;t pronounce. Uddy keeps it simple. Grass-fed tallow. Natural ingredients. Nothing fake.</p>
              <h3 className="yellow-box-heading">Sign up for:</h3>
              <ul className="yellow-box-list">
                <li>Launch discounts</li>
                <li>First dibs on our first batch</li>
                <li>Behind-the-scenes updates</li>
              </ul>
            </div>

            {status === 'success' ? (
              <div className="success-card" role="status">
                <h2 className="success-heading">You&rsquo;re on the list.</h2>
                <p>
                  We&rsquo;ve sent a confirmation link to <strong>{email}</strong>.
                  Tap it to finish signing up.
                </p>
              </div>
            ) : (
              <div className="signup-section">
                <h2 className="signup-heading">GET ON THE LIST</h2>
                <form onSubmit={handleSubmit} noValidate className="signup-form">
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
                    disabled={status === 'loading' || !isValidEmail}
                    className="submit-button"
                  >
                    {status === 'loading' ? 'Sending\u2026' : 'GET NOTIFIED (FEED YOUR FACE)'}
                  </button>
                </form>
                {status === 'error' && (
                  <p className="error-message" role="alert">{errorMsg}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right hero panel */}
        <div className="hero-panel">
          <div className="hero-teal-wedge" />
          <div className="hero-pink-shape" />
          <img src="/prelaunch-hero.png" alt="Uddy skincare products" className="hero-img" />
          {/* Badge inside hero for mobile positioning */}
          <div className="coming-soon">
            <span>COMING SOON</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          height: 100vh;
          background: #dbd9d9;
          overflow: hidden;
          font-family: var(--font-inter), sans-serif;
        }

        /* ===== Background shapes ===== */
        .bg-teal-top {
          position: absolute;
          left: 0;
          top: 0;
          width: 37px;
          height: 50%;
          background: #009e8c;
          z-index: 0;
        }
        .bg-pink-bottom {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 37px;
          height: 50%;
          background: #d877b0;
          z-index: 0;
        }
        .bg-teal-wedge {
          position: absolute;
          top: 0;
          right: 0;
          width: 60.3%;
          height: 11.2%;
          background: #009e8c;
          clip-path: polygon(0 0, 100% 0, 100% 100%);
          z-index: 2;
          pointer-events: none;
        }
        .bg-pink-shape {
          position: absolute;
          left: 19.6%;
          top: 33.5%;
          width: 41.3%;
          height: 66.5%;
          background: #d877b0;
          clip-path: polygon(40% 0, 80% 0, 100% 100%, 0% 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* ===== Layout ===== */
        .layout {
          display: flex;
          height: 100vh;
          position: relative;
        }

        /* ===== Copy panel ===== */
        .copy-panel {
          flex: 0 0 52%;
          background: #edece7;
          margin-left: 2.57%;
          height: 100vh;
          position: relative;
          z-index: 3;
          overflow: hidden;
        }
        .copy-inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(8px, 1.6vh, 16px);
          padding: clamp(12px, 2vh, 20px) clamp(16px, 3.1vh, 32px) calc(clamp(16px, 3.1vh, 32px) + 16px);
          height: 100%;
          box-sizing: border-box;
        }
        .wordmark {
          width: 100%;
          height: auto;
          max-height: 38vh;
          object-fit: contain;
          object-position: center;
          display: block;
        }
        .tagline-wrap {
          text-align: center;
          padding: clamp(4px, 0.8vh, 8px) 0;
        }
        .tagline {
          font-weight: 800;
          font-size: clamp(20px, 4.5vh, 46px);
          color: #000;
          letter-spacing: 0.02em;
          margin: 0;
        }
        .yellow-box {
          background: #f9d867;
          border: 4px solid #000;
          padding: clamp(8px, 1.6vh, 16px) 32px;
          box-shadow: 4px 4px 0 #000;
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 2.3vh, 24px);
        }
        .yellow-box p {
          margin: 0;
          font-weight: 400;
          font-size: clamp(13px, 2.3vh, 24px);
          color: #000;
          text-align: center;
          line-height: 1.4;
        }
        .yellow-box-heading {
          margin: clamp(4px, 1vh, 10px) 0 0 0;
          font-weight: 800;
          font-size: clamp(13px, 2.3vh, 24px);
          color: #000;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .yellow-box-list {
          margin: 0;
          padding: 0 0 0 24px;
          list-style: disc;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .yellow-box-list li {
          font-weight: 400;
          font-size: clamp(13px, 2.1vh, 22px);
          color: #000;
          line-height: 1.4;
        }

        /* ===== Signup ===== */
        .signup-section {
          display: flex;
          flex-direction: column;
          gap: clamp(6px, 1vh, 10px);
          margin-top: 24px;
          padding-bottom: clamp(8px, 1.6vh, 16px);
        }
        .signup-heading {
          font-weight: 700;
          font-size: clamp(20px, 3.9vh, 40px);
          color: #000;
          text-align: center;
          margin: 0;
          padding-bottom: 0;
        }
        .signup-form {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 1.5vh, 15px);
        }
        .email-input {
          width: 100%;
          height: 60px;
          padding: 0 16px;
          border: 3px solid #000;
          background: #fff;
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #000;
          text-align: center;
          box-shadow: 3px 3px 0 #000;
          outline: none;
          box-sizing: border-box;
        }
        .email-input::placeholder {
          color: #a7a7a7;
          text-align: center;
        }
        .email-input:focus {
          box-shadow: 1px 1px 0 #000;
          transform: translate(2px, 2px);
        }
        .submit-button {
          width: 100%;
          height: 60px;
          padding: 0 16px;
          border: 3px solid #000;
          background: #009e8c;
          color: #f9f5f0;
          font-family: var(--font-inter), sans-serif;
          font-weight: 900;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 3px 3px 0 #000;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .submit-button:hover:not(:disabled) {
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #000;
        }
        .submit-button:active:not(:disabled) {
          transform: translate(3px, 3px);
          box-shadow: 0 0 0 #000;
        }
        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .error-message {
          margin: 0;
          font-size: 14px;
          color: #b42318;
          font-weight: 600;
        }

        /* ===== Success card ===== */
        .success-card {
          flex: 0 0 auto;
          background: #fff;
          border: 4px solid #000;
          padding: 32px 24px;
          box-shadow: 4px 4px 0 #009e8c;
          margin-top: 16px;
        }
        .success-heading {
          font-weight: 900;
          font-size: clamp(24px, 2.5vw, 36px);
          text-transform: uppercase;
          margin: 0 0 12px 0;
          line-height: 1;
          color: #000;
        }
        .success-card p {
          margin: 0;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          color: #000;
        }

        /* ===== Hero panel ===== */
        .hero-panel {
          flex: 1;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: stretch;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }
        .hero-teal-wedge,
        .hero-pink-shape {
          display: none;
        }
        .coming-soon {
          position: absolute;
          left: calc(65% + 48px);
          top: calc(27.8% + 64px);
          transform: translate(-50%, -50%) rotate(17deg);
          width: 121px;
          height: 121px;
          background: #f9d867;
          border: 3.9px solid #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 3.5px 2.2px 0 #000;
          z-index: 4;
        }
        .coming-soon span {
          font-weight: 800;
          font-size: 15px;
          color: #000;
          text-align: center;
          letter-spacing: 0.02em;
          line-height: 1.2;
          width: 82px;
        }

        /* ===== Mobile ===== */
        @media (max-width: 900px) {
          .page {
            height: auto;
            max-width: 100vw;
            overflow-x: hidden;
          }
          .layout {
            flex-direction: column;
            height: auto;
          }
          .copy-panel {
            flex: 0 0 auto;
            width: 100%;
            margin-left: 0;
            height: auto;
            overflow: hidden;
          }
          .copy-inner {
            padding: 32px 20px;
            height: auto;
            gap: 16px;
            justify-content: flex-start;
          }
          .wordmark {
            max-height: none;
          }
          .tagline {
            font-size: clamp(18px, 5vw, 32px);
          }
          .yellow-box {
            padding-left: 16px;
            padding-right: 16px;
          }
          /* ===== Hero photo section (mobile) ===== */
          .hero-panel {
            display: block;
            flex: none;
            height: 135vw;
            min-height: 0;
            width: 100%;
            position: relative;
            background: #dbd9d9;
            overflow: hidden;
            z-index: 1;
          }
          .hero-img {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 96%;
            object-fit: contain;
            object-position: center top;
          }

          /* Mobile shapes inside hero-panel */
          .hero-teal-wedge {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 9%;
            background: #009e8c;
            clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%);
            z-index: 2;
            pointer-events: none;
          }
          .hero-pink-shape {
            display: block;
            position: absolute;
            left: 0;
            top: 30%;
            width: 23%;
            height: 70%;
            background: #d877b0;
            clip-path: polygon(0 0, 0 100%, 100% 100%);
            z-index: 2;
            pointer-events: none;
          }

          /* Hide layout-level shapes on mobile */
          .bg-teal-top {
            width: 100%;
            height: 10px;
            left: 0;
            top: 0;
            z-index: 5;
          }
          .bg-pink-bottom {
            display: none;
          }
          .bg-teal-wedge {
            display: none;
          }
          .bg-pink-shape {
            display: none;
          }

          /* Coming Soon badge */
          .coming-soon {
            left: auto;
            right: 42px;
            top: 36%;
            width: 83px;
            height: 83px;
            border-width: 2.7px;
            box-shadow: 2.2px 1.3px 0 #000;
            transform: rotate(17deg);
          }
          .coming-soon span {
            font-size: 10.7px;
            width: 56px;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          overflow-x: hidden;
        }
        @media (max-width: 900px) {
          html, body {
            overflow-x: hidden !important;
          }
        }
      `}</style>
    </div>
  );
}
