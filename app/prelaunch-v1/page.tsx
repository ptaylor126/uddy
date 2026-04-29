'use client';

import { useState, FormEvent } from 'react';

export default function PrelaunchV1Page() {
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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;700&family=Caveat:wght@500;600;700&display=swap"
      />

      <div className="marquee">
        <div className="marquee-track">
          <div className="marquee-group">
            <span>Grass Fed Tallow</span><span className="star">★</span>
            <span>Jojoba Oil</span><span className="star">★</span>
            <span>Oat Extract Oil</span><span className="star">★</span>
            <span>Made in the UK</span><span className="star">★</span>
            <span>Grass Fed Tallow</span><span className="star">★</span>
            <span>Jojoba Oil</span><span className="star">★</span>
            <span>Oat Extract Oil</span><span className="star">★</span>
            <span>Made in the UK</span><span className="star">★</span>
          </div>
          <div className="marquee-group" aria-hidden="true">
            <span>Grass Fed Tallow</span><span className="star">★</span>
            <span>Jojoba Oil</span><span className="star">★</span>
            <span>Oat Extract Oil</span><span className="star">★</span>
            <span>Made in the UK</span><span className="star">★</span>
            <span>Grass Fed Tallow</span><span className="star">★</span>
            <span>Jojoba Oil</span><span className="star">★</span>
            <span>Oat Extract Oil</span><span className="star">★</span>
            <span>Made in the UK</span><span className="star">★</span>
          </div>
        </div>
      </div>

      <header className="top-bar">
        <div className="logo-wordmark">uddy</div>
        <div className="tagline-strip">No nasties &nbsp;✦&nbsp; Three ingredients &nbsp;✦&nbsp; Made in the UK</div>
      </header>

      <section className="editorial">
        <div className="panel panel-headline">
          <h1 className="big-statement">
            Real<br />
            <span className="pink-block">ingredients.</span><br />
            Real<br />
            <span className="green-block">results.</span>
          </h1>
          <p className="body-copy">
            Tallow-based skincare for skin that&rsquo;s had enough of complicated routines.
            Nothing fancy. Nothing fake. Just three ingredients doing what they&rsquo;re supposed to.
          </p>
          <div className="feature-row">
            <span className="pill">100% Nut-free</span>
            <span className="pill pink">Grass-fed</span>
            <span className="pill green">Made in UK</span>
          </div>
        </div>
        <div className="panel panel-photo">
          <div className="price-sticker">
            <span className="small">Coming</span>
            <span className="big">SOON</span>
          </div>
          <img src="/jars-pyramid-white.jpg" alt="Uddy product range" />
        </div>
      </section>

      <section className="signup-bar">
        <div className="signup-inner">
          {status === 'success' ? (
            <div className="signup-success">
              <h3>You&rsquo;re on the list.</h3>
              <p>
                We&rsquo;ve sent a confirmation link to <strong>{email}</strong>.
                Tap it to finish signing up.
              </p>
            </div>
          ) : (
            <>
              <div className="signup-heading">
                Get on<br />
                the <span className="pink">list.</span>
              </div>
              <form className="signup-form" onSubmit={handleSubmit} noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'loading'}
                  aria-label="Email address"
                />
                <button type="submit" disabled={status === 'loading' || !email}>
                  {status === 'loading' ? 'Sending…' : 'Notify me →'}
                </button>
              </form>
              {status === 'error' && (
                <p className="signup-error" role="alert">{errorMsg}</p>
              )}
            </>
          )}
        </div>
      </section>

      <section className="ingredients-row">
        <div className="ingredient-tile">
          <div className="num">01</div>
          <div className="name">Grass-fed Tallow</div>
          <div className="desc">UK-sourced. The base that does the heavy lifting.</div>
        </div>
        <div className="ingredient-tile">
          <div className="num">02</div>
          <div className="name">Jojoba Oil</div>
          <div className="desc">Lightweight. Locks moisture in. Doesn&rsquo;t clog.</div>
        </div>
        <div className="ingredient-tile">
          <div className="num">03</div>
          <div className="name">Oat Extract Oil</div>
          <div className="desc">Soothing. For irritated skin that needs a break.</div>
        </div>
        <div className="ingredient-tile">
          <div className="num">04</div>
          <div className="name">Lavender</div>
          <div className="desc">Optional. A drop, not a dose. (Or skip it.)</div>
        </div>
      </section>

      <section className="story-strip">
        <p>&ldquo;Jack gave up on his skin. Hollie got cooking.&rdquo;</p>
        <p className="small">— The Uddy origin story —</p>
      </section>

      <footer className="foot">
        <strong>UDDY</strong> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; Made in the UK with very few ingredients.
      </footer>

      <style jsx global>{`
        body {
          background: #FAF5EF;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #1a1a1a;
          margin: 0;
        }
      `}</style>

      <style jsx>{`
        :global(img) { display: block; max-width: 100%; }

        .marquee {
          background: #1a1a1a;
          color: #F58AA0;
          overflow: hidden;
          padding: 12px 0;
          font-family: 'Archivo Black', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .marquee-track { display: flex; width: max-content; animation: marquee 40s linear infinite; }
        .marquee-group { display: flex; align-items: center; gap: 24px; padding-right: 24px; white-space: nowrap; }
        .marquee-group .star { font-family: Georgia, serif; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .top-bar {
          text-align: center;
          padding: 28px 24px 0;
        }
        .logo-wordmark {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(80px, 18vw, 220px);
          line-height: 0.85;
          letter-spacing: -0.04em;
          color: #F58AA0;
          text-transform: lowercase;
          display: inline-block;
          position: relative;
        }
        .logo-wordmark::after {
          content: '.';
          color: #2FA07A;
        }
        .tagline-strip {
          font-family: 'Archivo Black', sans-serif;
          font-size: 13px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-align: center;
          padding: 16px 0;
          border-top: 3px solid #1a1a1a;
          border-bottom: 3px solid #1a1a1a;
          margin: 16px 0 0;
          background: #FAF5EF;
        }

        .editorial {
          max-width: 1200px;
          margin: 48px auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
        }
        .panel {
          border: 3px solid #1a1a1a;
          border-radius: 4px;
          padding: 32px;
          position: relative;
        }
        .panel-headline {
          grid-column: 1 / 2;
          background: #FAF5EF;
          padding: 0 8px 0 0;
          border: none;
        }
        .big-statement {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.92;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .big-statement .pink-block {
          background: #F58AA0;
          border: 3px solid #1a1a1a;
          padding: 4px 18px;
          display: inline-block;
          box-shadow: 6px 6px 0 #1a1a1a;
          margin: 8px 0;
        }
        .big-statement .green-block {
          background: #2FA07A;
          color: white;
          border: 3px solid #1a1a1a;
          padding: 4px 18px;
          display: inline-block;
          box-shadow: 6px 6px 0 #1a1a1a;
        }
        .body-copy {
          margin-top: 32px;
          font-size: 18px;
          line-height: 1.5;
          max-width: 460px;
          font-weight: 500;
        }
        .feature-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 24px;
        }
        .pill {
          background: #1a1a1a;
          color: #FAF5EF;
          padding: 8px 14px;
          border-radius: 999px;
          font-family: 'Archivo Black', sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .pill.pink { background: #F58AA0; color: #1a1a1a; }
        .pill.green { background: #2FA07A; color: white; }

        .panel-photo {
          grid-column: 2 / 3;
          background: #2FA07A;
          padding: 24px;
          box-shadow: 8px 8px 0 #1a1a1a;
          position: relative;
          overflow: hidden;
          min-height: 460px;
        }
        .panel-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 3px solid #1a1a1a;
          border-radius: 2px;
        }
        .price-sticker {
          position: absolute;
          top: -24px;
          right: -24px;
          width: 130px;
          height: 130px;
          background: #FFD84D;
          border: 3px solid #1a1a1a;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotate(15deg);
          font-family: 'Archivo Black', sans-serif;
          font-size: 14px;
          text-transform: uppercase;
          text-align: center;
          line-height: 1;
          box-shadow: 4px 4px 0 #1a1a1a;
          z-index: 5;
        }
        .price-sticker .small { font-size: 10px; margin-bottom: 6px; }
        .price-sticker .big { font-size: 22px; }

        .signup-bar {
          max-width: 1200px;
          margin: 0 auto 56px;
          padding: 0 24px;
        }
        .signup-inner {
          background: #1a1a1a;
          color: #FAF5EF;
          border: 3px solid #1a1a1a;
          border-radius: 4px;
          padding: 32px 40px;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 32px;
          align-items: center;
          box-shadow: 8px 8px 0 #F58AA0;
        }
        .signup-heading {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(28px, 3.5vw, 40px);
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }
        .signup-heading .pink { color: #F58AA0; }
        .signup-form {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .signup-form input {
          flex: 1;
          min-width: 200px;
          padding: 16px 20px;
          border: 3px solid #FAF5EF;
          border-radius: 4px;
          background: transparent;
          color: #FAF5EF;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          outline: none;
        }
        .signup-form input::placeholder { color: rgba(250,245,239,0.5); }
        .signup-form input:focus { background: rgba(255,255,255,0.05); }
        .signup-form button {
          padding: 16px 28px;
          border: 3px solid #FAF5EF;
          border-radius: 4px;
          background: #F58AA0;
          color: #1a1a1a;
          font-family: 'Archivo Black', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.08s ease;
        }
        .signup-form button:hover:not(:disabled) {
          transform: translate(2px, 2px);
          background: #2FA07A;
          color: white;
        }
        .signup-form button:disabled { opacity: 0.6; cursor: not-allowed; }
        .signup-success {
          background: #FAF5EF;
          color: #1a1a1a;
          padding: 28px 32px;
          border: 3px solid #FAF5EF;
          border-radius: 4px;
          grid-column: 1 / -1;
          text-align: center;
        }
        .signup-success h3 {
          font-family: 'Archivo Black', sans-serif;
          font-size: 28px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .signup-error {
          color: #FFD84D;
          font-size: 14px;
          margin-top: 12px;
          grid-column: 1 / -1;
          text-align: center;
        }

        .ingredients-row {
          max-width: 1200px;
          margin: 0 auto 64px;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .ingredient-tile {
          background: #FAF5EF;
          border: 3px solid #1a1a1a;
          padding: 20px;
          text-align: center;
          transition: transform 0.15s ease;
        }
        .ingredient-tile:nth-child(odd) { box-shadow: 4px 4px 0 #2FA07A; }
        .ingredient-tile:nth-child(even) { box-shadow: 4px 4px 0 #F58AA0; }
        .ingredient-tile:hover { transform: translate(-2px, -2px); }
        .ingredient-tile .num {
          font-family: 'Archivo Black', sans-serif;
          font-size: 13px;
          color: #F58AA0;
          letter-spacing: 0.2em;
        }
        .ingredient-tile .name {
          font-family: 'Archivo Black', sans-serif;
          font-size: 18px;
          text-transform: uppercase;
          margin: 8px 0 6px;
          line-height: 1;
        }
        .ingredient-tile .desc { font-size: 13px; line-height: 1.4; color: #444; }

        .story-strip {
          max-width: 1200px;
          margin: 0 auto 56px;
          padding: 32px;
          border-top: 3px solid #1a1a1a;
          border-bottom: 3px solid #1a1a1a;
          text-align: center;
        }
        .story-strip p {
          font-family: 'Caveat', cursive;
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.2;
          color: #1a1a1a;
        }
        .story-strip .small {
          font-family: 'DM Sans', sans-serif;
          font-style: normal;
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-top: 12px;
          color: #666;
        }

        .foot {
          background: #1a1a1a;
          color: #FAF5EF;
          padding: 32px 24px;
          text-align: center;
          font-size: 13px;
        }
        .foot strong { color: #F58AA0; font-family: 'Archivo Black', sans-serif; letter-spacing: 0.06em; }

        @media (max-width: 900px) {
          .editorial { grid-template-columns: 1fr; }
          .panel-headline, .panel-photo { grid-column: 1 / -1; }
          .signup-inner { grid-template-columns: 1fr; }
          .ingredients-row { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}
