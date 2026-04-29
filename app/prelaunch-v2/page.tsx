'use client';

import { useState, FormEvent } from 'react';

export default function PrelaunchV2Page() {
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
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;700&family=Caveat:wght@500;600;700&family=Bungee&display=swap"
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

      <header className="topnav">
        <div className="pink-logo">uddy</div>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="kicker">★ Launching soon ★</span>
            <h1 className="hero-headline">
              Skin food.<br />
              <span className="stroke">Not skin</span><br />
              fight.
            </h1>
            <p className="hero-sub">Three ingredients. Zero nasties. One very happy cow.</p>

            {status === 'success' ? (
              <div className="hero-success" role="status">
                <h3>You&rsquo;re on the list.</h3>
                <p>
                  We&rsquo;ve sent a confirmation link to <strong>{email}</strong>.
                  Tap it to finish signing up.
                </p>
              </div>
            ) : (
              <>
                <form className="hero-cta" onSubmit={handleSubmit} noValidate>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="drop your email here"
                    required
                    disabled={status === 'loading'}
                    aria-label="Email address"
                  />
                  <button type="submit" disabled={status === 'loading' || !email}>
                    {status === 'loading' ? 'Sending…' : "I'm in"}
                  </button>
                </form>
                <p className="hero-cta-note">No spam. Just a heads-up when we launch.</p>
                {status === 'error' && (
                  <p className="hero-error" role="alert">{errorMsg}</p>
                )}
              </>
            )}
          </div>
          <div className="hero-photo-wrap">
            <img className="hero-photo" src="/jars-pyramid-white.jpg" alt="Uddy product range" />
            <div className="sticker sticker-cow">
              <svg viewBox="0 0 80 80" fill="none">
                <ellipse cx="40" cy="48" rx="22" ry="18" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />
                <circle cx="32" cy="44" r="3" fill="#1a1a1a" />
                <circle cx="48" cy="44" r="3" fill="#1a1a1a" />
                <ellipse cx="40" cy="56" rx="9" ry="6" fill="#F58AA0" stroke="#1a1a1a" strokeWidth="2" />
                <circle cx="38" cy="56" r="1.5" fill="#1a1a1a" />
                <circle cx="42" cy="56" r="1.5" fill="#1a1a1a" />
                <ellipse cx="28" cy="32" rx="5" ry="6" fill="#1a1a1a" />
                <ellipse cx="52" cy="32" rx="5" ry="6" fill="#1a1a1a" />
                <path d="M22 50 L18 54 M58 50 L62 54" stroke="#1a1a1a" strokeWidth="2" />
                <ellipse cx="44" cy="44" rx="3" ry="2" fill="#1a1a1a" />
              </svg>
            </div>
            <div className="sticker sticker-burst">
              <span>Coming</span>
              <span className="big">SOON</span>
            </div>
            <div className="sticker sticker-arrow">↓ Get on the list</div>
            <div className="sticker sticker-handwrite">eczema-friendly!</div>
          </div>
        </div>
      </section>

      <section className="ingredients">
        <div className="ingredients-inner">
          <div className="section-eyebrow">★ What&rsquo;s inside ★</div>
          <h2 className="section-title">Three things.<br />That&rsquo;s the whole list.</h2>
          <div className="ingredients-grid">
            <div className="ing-card">
              <div className="ing-icon">
                <svg viewBox="0 0 80 80" fill="none">
                  <ellipse cx="40" cy="48" rx="22" ry="18" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />
                  <circle cx="32" cy="44" r="3" fill="#1a1a1a" />
                  <circle cx="48" cy="44" r="3" fill="#1a1a1a" />
                  <ellipse cx="40" cy="56" rx="9" ry="6" fill="#F58AA0" stroke="#1a1a1a" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="ing-name">Grass-fed Tallow</h3>
              <p className="ing-desc">UK-sourced. Bio-identical to your skin&rsquo;s own oils.</p>
            </div>
            <div className="ing-card">
              <div className="ing-icon">
                <svg viewBox="0 0 80 80" fill="none">
                  <ellipse cx="40" cy="40" rx="14" ry="22" fill="#2FA07A" stroke="#1a1a1a" strokeWidth="3" />
                  <path d="M40 18 L40 62" stroke="#1a1a1a" strokeWidth="3" />
                  <ellipse cx="32" cy="32" rx="5" ry="3" fill="#1a1a1a" />
                  <ellipse cx="48" cy="48" rx="5" ry="3" fill="#1a1a1a" />
                </svg>
              </div>
              <h3 className="ing-name">Jojoba Oil</h3>
              <p className="ing-desc">Light. Won&rsquo;t clog. Keeps moisture where it should be.</p>
            </div>
            <div className="ing-card">
              <div className="ing-icon">
                <svg viewBox="0 0 80 80" fill="none">
                  <path d="M40 22 L40 60" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
                  <ellipse cx="34" cy="32" rx="6" ry="3" fill="#FFD84D" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-30 34 32)" />
                  <ellipse cx="46" cy="32" rx="6" ry="3" fill="#FFD84D" stroke="#1a1a1a" strokeWidth="2" transform="rotate(30 46 32)" />
                  <ellipse cx="34" cy="42" rx="6" ry="3" fill="#FFD84D" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-30 34 42)" />
                  <ellipse cx="46" cy="42" rx="6" ry="3" fill="#FFD84D" stroke="#1a1a1a" strokeWidth="2" transform="rotate(30 46 42)" />
                  <ellipse cx="34" cy="52" rx="6" ry="3" fill="#FFD84D" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-30 34 52)" />
                  <ellipse cx="46" cy="52" rx="6" ry="3" fill="#FFD84D" stroke="#1a1a1a" strokeWidth="2" transform="rotate(30 46 52)" />
                </svg>
              </div>
              <h3 className="ing-name">Oat Extract Oil</h3>
              <p className="ing-desc">For dry, irritated, fed-up skin. Calms things right down.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="story-inner">
          <p className="story-quote">
            &ldquo;Jack&rsquo;s skin had been through it. Steroid creams, antibiotics, the lot. Hollie made him a balm in the kitchen. It worked. So we made a brand.&rdquo;
          </p>
          <p className="story-attribution">— Jack &amp; Hollie</p>
        </div>
      </section>

      <footer className="foot">
        <strong>UDDY</strong> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; Putney → Crouch End → Your Bathroom Shelf
      </footer>

      <style jsx global>{`
        body {
          background: #FAF5EF;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #1a1a1a;
          margin: 0;
          overflow-x: hidden;
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

        .topnav {
          padding: 28px 32px;
          text-align: center;
          border-bottom: 3px solid #1a1a1a;
          background: #FAF5EF;
        }
        .pink-logo {
          font-family: 'Archivo Black', sans-serif;
          font-size: 44px;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #F58AA0;
          text-transform: lowercase;
        }
        .pink-logo::after { content: '.'; color: #2FA07A; }

        .hero {
          background: #FFD9E2;
          border-bottom: 3px solid #1a1a1a;
          padding: 64px 24px;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(26,26,26,0.08) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        .hero-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-copy {
          position: relative;
        }
        .kicker {
          font-family: 'Bungee', sans-serif;
          font-size: 14px;
          letter-spacing: 0.18em;
          color: #1a1a1a;
          background: #FFD84D;
          border: 3px solid #1a1a1a;
          display: inline-block;
          padding: 6px 14px;
          transform: rotate(-3deg);
          margin-bottom: 24px;
          box-shadow: 3px 3px 0 #1a1a1a;
        }
        .hero-headline {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(56px, 9vw, 110px);
          line-height: 0.86;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: #1a1a1a;
          margin-bottom: 32px;
        }
        .hero-headline .stroke {
          -webkit-text-stroke: 3px #1a1a1a;
          color: transparent;
        }
        .hero-sub {
          font-family: 'Caveat', cursive;
          font-size: 28px;
          line-height: 1.2;
          margin-bottom: 28px;
          color: #1a1a1a;
          transform: rotate(-1deg);
          display: inline-block;
        }
        .hero-cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .hero-cta input {
          flex: 1;
          min-width: 220px;
          padding: 16px 22px;
          border: 3px solid #1a1a1a;
          border-radius: 999px;
          background: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          box-shadow: 4px 4px 0 #1a1a1a;
          outline: none;
        }
        .hero-cta button {
          padding: 16px 28px;
          border: 3px solid #1a1a1a;
          border-radius: 999px;
          background: #1a1a1a;
          color: #FAF5EF;
          font-family: 'Archivo Black', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 4px 4px 0 #2FA07A;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .hero-cta button:hover:not(:disabled) {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #2FA07A;
        }
        .hero-cta button:disabled { opacity: 0.6; cursor: not-allowed; }
        .hero-cta-note {
          font-size: 13px;
          color: #666;
          margin-top: 12px;
        }
        .hero-success {
          background: white;
          border: 3px solid #1a1a1a;
          padding: 24px;
          box-shadow: 5px 5px 0 #2FA07A;
          margin-top: 8px;
          transform: rotate(-0.5deg);
        }
        .hero-success h3 {
          font-family: 'Archivo Black', sans-serif;
          font-size: 22px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .hero-success p { font-size: 15px; line-height: 1.5; }
        .hero-error {
          color: #b42318;
          font-size: 14px;
          font-weight: 600;
          margin-top: 12px;
        }

        .hero-photo-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          max-width: 520px;
          justify-self: center;
        }
        .hero-photo {
          width: 100%;
          height: 100%;
          border: 4px solid #1a1a1a;
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 12px 12px 0 #1a1a1a;
          transform: rotate(-1.5deg);
        }
        .sticker {
          position: absolute;
          background: #FAF5EF;
          border: 3px solid #1a1a1a;
          font-family: 'Archivo Black', sans-serif;
          text-transform: uppercase;
          text-align: center;
          box-shadow: 4px 4px 0 #1a1a1a;
          z-index: 5;
        }
        .sticker-cow {
          top: -40px;
          left: -50px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: #FFD84D;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-12deg);
          font-size: 18px;
          line-height: 1;
        }
        .sticker-cow svg { width: 70px; height: 70px; }
        .sticker-arrow {
          bottom: -30px;
          left: 30px;
          background: #2FA07A;
          color: white;
          padding: 14px 22px;
          transform: rotate(-4deg);
          font-size: 14px;
          letter-spacing: 0.1em;
          border-radius: 6px;
        }
        .sticker-burst {
          top: 40px;
          right: -40px;
          width: 120px;
          height: 120px;
          background: #F58AA0;
          color: #1a1a1a;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          line-height: 1;
          transform: rotate(8deg);
        }
        .sticker-burst .big { font-size: 28px; margin-top: 4px; }
        .sticker-handwrite {
          bottom: 40px;
          right: -60px;
          background: white;
          padding: 10px 16px;
          transform: rotate(6deg);
          font-family: 'Caveat', cursive;
          font-weight: 700;
          font-size: 22px;
          text-transform: none;
          border-radius: 4px;
        }

        .ingredients {
          background: #FAF5EF;
          padding: 80px 24px;
          border-bottom: 3px solid #1a1a1a;
        }
        .ingredients-inner {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }
        .section-eyebrow {
          font-family: 'Bungee', sans-serif;
          font-size: 13px;
          letter-spacing: 0.2em;
          color: #2FA07A;
          margin-bottom: 14px;
        }
        .section-title {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(36px, 5.5vw, 64px);
          line-height: 1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin-bottom: 56px;
        }
        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .ing-card {
          background: white;
          border: 3px solid #1a1a1a;
          padding: 28px 20px;
          border-radius: 8px;
          text-align: center;
          transform: rotate(-1deg);
          transition: transform 0.2s ease;
        }
        .ing-card:nth-child(2) {
          transform: rotate(1.5deg);
          box-shadow: 6px 6px 0 #2FA07A;
        }
        .ing-card:nth-child(1) { box-shadow: 6px 6px 0 #F58AA0; }
        .ing-card:nth-child(3) {
          transform: rotate(-0.5deg);
          box-shadow: 6px 6px 0 #FFD84D;
        }
        .ing-card:hover { transform: rotate(0); }
        .ing-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 16px;
          background: #C8E6D0;
          border: 3px solid #1a1a1a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ing-card:nth-child(2) .ing-icon { background: #FFD9E2; }
        .ing-card:nth-child(3) .ing-icon { background: #FFD84D; }
        .ing-icon svg { width: 56px; height: 56px; }
        .ing-name {
          font-family: 'Archivo Black', sans-serif;
          font-size: 18px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .ing-desc { font-size: 14px; line-height: 1.5; color: #444; }

        .story {
          background: #F58AA0;
          padding: 80px 24px;
          border-bottom: 3px solid #1a1a1a;
          background-image: radial-gradient(circle, rgba(26,26,26,0.1) 2px, transparent 2px);
          background-size: 28px 28px;
          text-align: center;
        }
        .story-inner {
          max-width: 720px;
          margin: 0 auto;
          background: #FAF5EF;
          border: 3px solid #1a1a1a;
          padding: 48px 32px;
          box-shadow: 10px 10px 0 #1a1a1a;
          transform: rotate(-0.5deg);
        }
        .story-quote {
          font-family: 'Caveat', cursive;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .story-attribution {
          font-family: 'Archivo Black', sans-serif;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #666;
        }

        .foot {
          background: #1a1a1a;
          color: #FAF5EF;
          padding: 32px 24px;
          text-align: center;
          font-size: 13px;
        }
        .foot strong { font-family: 'Archivo Black', sans-serif; color: #F58AA0; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 80px; }
          .hero-photo-wrap { max-width: 380px; margin: 0 auto; }
          .ingredients-grid { grid-template-columns: 1fr; }
          .sticker-burst, .sticker-handwrite { right: -10px; }
          .sticker-cow { left: -20px; }
        }
      `}</style>
    </>
  );
}
