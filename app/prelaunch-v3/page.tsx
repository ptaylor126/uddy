'use client';

import { useState, FormEvent } from 'react';

export default function PrelaunchV3Page() {
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

      <header className="top">
        <div className="black-logo">uddy</div>
        <div className="top-meta">Pre-launch · 2026</div>
      </header>

      <section className="hero">
        <img className="hero-photo" src="/hero-vanity.jpg" alt="Uddy products on a vanity" />
        <div className="hero-overlay-grad"></div>
        <div className="photo-badge">
          <span className="small">Launching</span>
          <span className="big">SOON</span>
          <span className="sub">★★★</span>
        </div>
        <div className="signup-overlay">
          <div className="overlay-eyebrow">★ Tallow-based skincare</div>
          <h1 className="overlay-headline">
            Skin food.<br />
            Not skin <span className="pink">fight.</span>
          </h1>
          <p className="overlay-sub">
            We&rsquo;re building skincare for skin that&rsquo;s sick of trying things.
            Three ingredients. Made in the UK. Coming soon.
          </p>

          {status === 'success' ? (
            <div className="overlay-success" role="status">
              <h3>You&rsquo;re on the list.</h3>
              <p>
                We&rsquo;ve sent a confirmation link to <strong>{email}</strong>.
                Tap it to finish signing up.
              </p>
            </div>
          ) : (
            <>
              <form className="overlay-form" onSubmit={handleSubmit} noValidate>
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
                  {status === 'loading' ? 'Sending…' : 'Notify me'}
                </button>
              </form>
              <p className="overlay-fineprint">★ No spam &nbsp;·&nbsp; Unsubscribe anytime</p>
              {status === 'error' && (
                <p className="overlay-error" role="alert">{errorMsg}</p>
              )}
            </>
          )}
        </div>
      </section>

      <section className="proof">
        <div className="proof-grid">
          <div>
            <div className="proof-eyebrow">★ Why us</div>
            <h2 className="proof-title">Three<br />ingredients.<br />That&rsquo;s it.</h2>
          </div>
          <div className="proof-list">
            <div className="proof-row">
              <div className="proof-num green">01</div>
              <div className="proof-text">
                <strong>Nut-free formula</strong>
                <p>No almond, no argan, no shea. Most tallow brands use 5–15 ingredients. We use 3.</p>
              </div>
            </div>
            <div className="proof-row">
              <div className="proof-num">02</div>
              <div className="proof-text">
                <strong>Grass-fed UK tallow</strong>
                <p>Sourced from UK farms. Bio-identical to your skin&rsquo;s own oils. Sinks in. Doesn&rsquo;t sit on top.</p>
              </div>
            </div>
            <div className="proof-row">
              <div className="proof-num yellow">03</div>
              <div className="proof-text">
                <strong>For skin that&rsquo;s had it</strong>
                <p>Eczema, psoriasis, chronic dryness, reactions to &ldquo;gentle&rdquo; products. We get it. Jack had it too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-foot">
        <p className="story-quote">&ldquo;Jack gave up on his skin. Hollie got cooking. One simple balm later, here we are.&rdquo;</p>
        <p className="story-attribution">— Jack &amp; Hollie · Founders</p>
      </section>

      <footer className="meta-foot">
        © Uddy 2026 · Made in the UK with very few ingredients
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

        .top {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #1a1a1a;
        }
        .black-logo {
          font-family: 'Archivo Black', sans-serif;
          font-size: 36px;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #1a1a1a;
          text-transform: lowercase;
        }
        .black-logo::after { content: '.'; color: #F58AA0; }
        .top-meta {
          font-family: 'Archivo Black', sans-serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #666;
        }

        .hero {
          position: relative;
          height: calc(100vh - 100px);
          min-height: 640px;
          background: #1a1a1a;
          overflow: hidden;
        }
        .hero-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.05);
        }
        .hero-overlay-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(26,26,26,0.6) 0%, rgba(26,26,26,0.2) 50%, transparent 100%);
          pointer-events: none;
        }

        .photo-badge {
          position: absolute;
          top: 32px;
          right: 32px;
          width: 130px;
          height: 130px;
          background: #FFD84D;
          border: 3px solid #1a1a1a;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotate(-8deg);
          font-family: 'Archivo Black', sans-serif;
          text-transform: uppercase;
          text-align: center;
          line-height: 1;
          box-shadow: 5px 5px 0 #1a1a1a;
          z-index: 10;
        }
        .photo-badge .small { font-size: 11px; margin-bottom: 6px; }
        .photo-badge .big { font-size: 24px; }
        .photo-badge .sub { font-size: 9px; margin-top: 6px; letter-spacing: 0.1em; }

        .signup-overlay {
          position: absolute;
          bottom: 32px;
          left: 32px;
          max-width: 580px;
          background: #1a1a1a;
          color: #FAF5EF;
          border: 3px solid #1a1a1a;
          padding: 40px;
          box-shadow: 12px 12px 0 #F58AA0;
          z-index: 5;
        }
        .overlay-eyebrow {
          font-family: 'Archivo Black', sans-serif;
          font-size: 12px;
          letter-spacing: 0.25em;
          color: #FFD84D;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .overlay-headline {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 0.92;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .overlay-headline .pink { color: #F58AA0; }
        .overlay-sub {
          font-size: 17px;
          line-height: 1.5;
          margin-bottom: 28px;
          max-width: 460px;
          color: rgba(250,245,239,0.9);
        }
        .overlay-form {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .overlay-form input {
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
        .overlay-form input::placeholder { color: rgba(250,245,239,0.5); }
        .overlay-form input:focus { background: rgba(255,255,255,0.05); }
        .overlay-form button {
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
          transition: transform 0.08s ease, background 0.15s ease;
        }
        .overlay-form button:hover:not(:disabled) {
          transform: translate(2px, 2px);
          background: #2FA07A;
          color: white;
        }
        .overlay-form button:disabled { opacity: 0.6; cursor: not-allowed; }
        .overlay-fineprint {
          margin-top: 16px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(250,245,239,0.5);
        }
        .overlay-success {
          background: #FAF5EF;
          color: #1a1a1a;
          border: 3px solid #FAF5EF;
          border-radius: 4px;
          padding: 24px;
          margin-top: 8px;
        }
        .overlay-success h3 {
          font-family: 'Archivo Black', sans-serif;
          font-size: 22px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .overlay-success p { font-size: 15px; line-height: 1.5; }
        .overlay-error {
          color: #FFD84D;
          font-size: 14px;
          margin-top: 12px;
          font-weight: 600;
        }

        .proof {
          background: #FAF5EF;
          padding: 80px 32px;
          border-bottom: 2px solid #1a1a1a;
        }
        .proof-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 64px;
          align-items: center;
        }
        .proof-eyebrow {
          font-family: 'Archivo Black', sans-serif;
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #2FA07A;
          margin-bottom: 16px;
        }
        .proof-title {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .proof-list {
          display: grid;
          gap: 16px;
        }
        .proof-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          background: white;
          border: 3px solid #1a1a1a;
          border-radius: 4px;
          transition: transform 0.15s ease;
        }
        .proof-row:nth-child(1) { box-shadow: 5px 5px 0 #2FA07A; }
        .proof-row:nth-child(2) { box-shadow: 5px 5px 0 #F58AA0; }
        .proof-row:nth-child(3) { box-shadow: 5px 5px 0 #FFD84D; }
        .proof-row:hover { transform: translate(-2px, -2px); }
        .proof-num {
          font-family: 'Archivo Black', sans-serif;
          font-size: 36px;
          line-height: 1;
          color: #F58AA0;
        }
        .proof-num.green { color: #2FA07A; }
        .proof-num.yellow { color: #FFD84D; -webkit-text-stroke: 2px #1a1a1a; }
        .proof-text strong {
          font-family: 'Archivo Black', sans-serif;
          font-size: 16px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 4px;
        }
        .proof-text p { font-size: 14px; line-height: 1.5; color: #444; }

        .story-foot {
          background: #1a1a1a;
          color: #FAF5EF;
          padding: 64px 32px;
          text-align: center;
        }
        .story-quote {
          font-family: 'Caveat', cursive;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.2;
          color: #FAF5EF;
          max-width: 720px;
          margin: 0 auto 16px;
        }
        .story-attribution {
          font-family: 'Archivo Black', sans-serif;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #F58AA0;
        }
        .meta-foot {
          background: #1a1a1a;
          color: rgba(250,245,239,0.5);
          padding: 24px 32px;
          text-align: center;
          font-size: 12px;
          border-top: 1px solid rgba(250,245,239,0.1);
        }

        @media (max-width: 900px) {
          .hero { height: auto; min-height: 0; }
          .hero-photo { position: relative; height: 60vh; }
          .hero-overlay-grad { display: none; }
          .signup-overlay {
            position: relative;
            bottom: auto;
            left: auto;
            max-width: 100%;
            margin: -60px 16px 0;
          }
          .photo-badge {
            width: 100px;
            height: 100px;
            top: 16px;
            right: 16px;
          }
          .photo-badge .big { font-size: 18px; }
          .proof-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </>
  );
}
