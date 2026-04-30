'use client';

import { useState, FormEvent } from 'react';

export default function PrelaunchV4Page() {
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
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap"
      />

      <div className="split">
        {/* LEFT PANEL */}
        <section className="left">
          <h1 className="wordmark">uddy</h1>

          <div className="copy-block">
            <p className="headline">
              COMING SOON: O.G. SKIN FOOD.<br />
              NO NASTIES. JUST GOOD SH*T.
            </p>
            <p className="subtext">
              Simple, tallow-based skincare for dry and sensitive skin.
              Join the list to be notified of our launch.
            </p>
          </div>

          <div className="cta">
            {status === 'success' ? (
              <div className="success-card" role="status">
                <p className="success-heading">YOU&rsquo;RE ON THE LIST.</p>
                <p className="success-body">
                  We&rsquo;ve sent a confirmation link to <strong>{email}</strong>.
                  Tap it to finish signing up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'loading'}
                  aria-label="Email address"
                  className="email"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  className="submit"
                >
                  {status === 'loading' ? 'SENDING…' : 'GET NOTIFIED (FEED YOUR FACE)'}
                </button>
                {status === 'error' && (
                  <p className="error" role="alert">{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="right">
          <div className="color-block-cream" />
          <div className="color-block-pink" />

          {/* Hand-drawn starburst — top right */}
          <svg className="burst burst-tr" viewBox="0 0 120 120" aria-hidden="true">
            <path
              d="M60 5 L66 38 L92 14 L74 44 L113 38 L78 56 L113 74 L74 68 L92 98 L66 74 L60 115 L54 74 L28 98 L46 68 L7 74 L42 56 L7 38 L46 44 L28 14 L54 38 Z"
              fill="#1a1a1a"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Hand-drawn starburst — bottom left */}
          <svg className="burst burst-bl" viewBox="0 0 120 120" aria-hidden="true">
            <path
              d="M60 8 L67 40 L94 18 L75 46 L112 40 L80 58 L112 76 L75 70 L94 102 L67 78 L60 112 L53 78 L26 102 L45 70 L8 76 L40 58 L8 40 L45 46 L26 18 L53 40 Z"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>

          {/* Curved hand-drawn arrow — top left toward jars */}
          <svg className="arrow arrow-tl" viewBox="0 0 200 140" aria-hidden="true">
            <path
              d="M10 20 Q 80 10 120 70 T 180 110"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M170 95 L182 112 L162 115 Z"
              fill="#1a1a1a"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Curved hand-drawn arrow — bottom right toward jars */}
          <svg className="arrow arrow-br" viewBox="0 0 200 140" aria-hidden="true">
            <path
              d="M190 120 Q 120 130 80 70 T 20 30"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M30 45 L18 28 L38 25 Z"
              fill="#1a1a1a"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Product photo */}
          <div className="jars-wrap">
            <img src="/jars-stacked-three.jpg" alt="Stacked Uddy jars" className="jars" />

            {/* Jagged hand-drawn outline overlay 1 */}
            <svg className="jagged jagged-1" viewBox="0 0 300 400" aria-hidden="true">
              <path
                d="M70 50 L78 58 L74 70 L82 80 L76 92 L84 104 L78 116 L86 130 L80 144 L86 158 L82 174 L88 188 L84 204 L92 218 L86 232 L94 246 L88 260 L96 274 L90 288 L98 302 L92 316 L100 330 L94 344 L102 356 L120 350 L140 354 L160 350 L180 354 L200 350 L218 354 L230 348 L226 332 L232 316 L228 300 L234 284 L230 268 L236 252 L232 236 L238 220 L234 204 L240 188 L236 172 L242 156 L238 140 L244 124 L240 108 L246 92 L242 76 L240 60 L228 54 L210 50 L190 54 L170 50 L150 54 L130 50 L110 54 L90 50 Z"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>

            {/* Jagged hand-drawn outline overlay 2 — offset for raw layered feel */}
            <svg className="jagged jagged-2" viewBox="0 0 300 400" aria-hidden="true">
              <path
                d="M80 60 Q 60 110 78 160 Q 64 210 84 260 Q 70 310 88 350 L 220 354 Q 240 310 230 260 Q 244 210 232 160 Q 240 110 224 60 Q 150 50 80 60 Z"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="3"
                strokeDasharray="8 6"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom icon row */}
          <div className="icon-row">
            <div className="icon-cell">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path
                  d="M22 4 L8 24 L18 24 L14 36 L32 14 L22 14 Z"
                  fill="#1a1a1a"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Real<br />Ingredients</span>
            </div>
            <div className="icon-cell">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path
                  d="M20 4 C 12 16, 8 22, 8 28 C 8 34, 13 38, 20 38 C 27 38, 32 34, 32 28 C 32 22, 28 16, 20 4 Z"
                  fill="#1a1a1a"
                />
              </svg>
              <span>Water<br />Drop</span>
            </div>
            <div className="icon-cell">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path
                  d="M14 4 L26 4 L26 16 L34 32 C 35 35, 33 38, 30 38 L 10 38 C 7 38, 5 35, 6 32 L 14 16 Z"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <line x1="14" y1="22" x2="26" y2="22" stroke="#1a1a1a" strokeWidth="2.5" />
              </svg>
              <span>Natural<br />Protein</span>
            </div>
            <div className="icon-cell">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path
                  d="M20 34 C 12 28, 4 22, 4 14 C 4 9, 8 5, 13 5 C 16 5, 19 7, 20 10 C 21 7, 24 5, 27 5 C 32 5, 36 9, 36 14 C 36 22, 28 28, 20 34 Z"
                  fill="#1a1a1a"
                />
              </svg>
              <span>Cruelty<br />Free</span>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          background: #FAF5EF;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #1a1a1a;
          -webkit-font-smoothing: antialiased;
        }
        body { overflow-x: hidden; }
      `}</style>

      <style jsx>{`
        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        /* ============ LEFT PANEL ============ */
        .left {
          background: #FAF5EF;
          padding: 56px 64px 56px 64px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 4px solid #1a1a1a;
          position: relative;
        }
        .wordmark {
          font-family: 'DM Sans', sans-serif;
          font-weight: 900;
          font-size: clamp(140px, 22vw, 320px);
          line-height: 0.78;
          letter-spacing: -0.06em;
          text-transform: lowercase;
          color: #1a1a1a;
          margin: 0 0 0 -8px;
        }
        .copy-block { margin-top: 24px; max-width: 540px; }
        .headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 900;
          font-size: clamp(20px, 2.1vw, 30px);
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #1a1a1a;
          margin: 0 0 20px 0;
        }
        .subtext {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 1.5;
          color: #1a1a1a;
          margin: 0;
          max-width: 460px;
        }

        .cta {
          margin-top: 48px;
          max-width: 540px;
        }
        .email {
          width: 100%;
          padding: 18px 22px;
          border: 4px solid #1a1a1a;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #1a1a1a;
          outline: none;
          border-radius: 0;
          margin-bottom: 12px;
          box-shadow: 6px 6px 0 #1a1a1a;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .email::placeholder { color: #999; }
        .email:focus {
          transform: translate(2px, 2px);
          box-shadow: 4px 4px 0 #1a1a1a;
        }
        .submit {
          width: 100%;
          padding: 20px 24px;
          border: 4px solid #1a1a1a;
          background: #1a1a1a;
          color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 900;
          font-size: 16px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 0;
          box-shadow: 6px 6px 0 #F58AA0;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .submit:hover:not(:disabled) {
          transform: translate(3px, 3px);
          box-shadow: 3px 3px 0 #F58AA0;
        }
        .submit:active:not(:disabled) {
          transform: translate(6px, 6px);
          box-shadow: 0 0 0 #F58AA0;
        }
        .submit:disabled { opacity: 0.6; cursor: not-allowed; }

        .error {
          margin: 14px 2px 0;
          color: #b42318;
          font-size: 14px;
          font-weight: 700;
        }
        .success-card {
          background: #ffffff;
          border: 4px solid #1a1a1a;
          padding: 24px;
          box-shadow: 6px 6px 0 #1a1a1a;
        }
        .success-heading {
          font-weight: 900;
          font-size: 22px;
          letter-spacing: -0.01em;
          margin: 0 0 8px 0;
        }
        .success-body {
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        /* ============ RIGHT PANEL ============ */
        .right {
          position: relative;
          overflow: hidden;
          padding: 56px 48px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100vh;
        }
        .color-block-cream {
          position: absolute;
          inset: 0;
          background: #FAF5EF;
          z-index: 0;
        }
        .color-block-pink {
          position: absolute;
          top: 0;
          right: 0;
          width: 70%;
          height: 60%;
          background: #F58AA0;
          z-index: 1;
          border-bottom: 4px solid #1a1a1a;
          border-left: 4px solid #1a1a1a;
        }

        .burst {
          position: absolute;
          z-index: 4;
          pointer-events: none;
        }
        .burst-tr {
          top: 24px;
          right: 24px;
          width: 140px;
          height: 140px;
          transform: rotate(15deg);
        }
        .burst-bl {
          bottom: 110px;
          left: 24px;
          width: 110px;
          height: 110px;
          transform: rotate(-20deg);
        }

        .arrow {
          position: absolute;
          z-index: 4;
          pointer-events: none;
        }
        .arrow-tl {
          top: 80px;
          left: 30px;
          width: 200px;
          height: 140px;
          transform: rotate(-8deg);
        }
        .arrow-br {
          bottom: 220px;
          right: 30px;
          width: 200px;
          height: 140px;
          transform: rotate(10deg) scaleX(-1);
        }

        .jars-wrap {
          position: relative;
          z-index: 3;
          align-self: center;
          margin-top: 20px;
          width: 100%;
          max-width: 460px;
        }
        .jars {
          width: 100%;
          height: auto;
          display: block;
          border: 4px solid #1a1a1a;
          box-shadow: 12px 12px 0 #1a1a1a;
        }
        .jagged {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .jagged-1 { transform: translate(-6px, -6px); }
        .jagged-2 { transform: translate(8px, 6px); }

        .icon-row {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 3px solid #1a1a1a;
        }
        .icon-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }
        .icon-cell svg {
          width: 36px;
          height: 36px;
        }
        .icon-cell span {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1a1a1a;
          line-height: 1.2;
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 900px) {
          .split {
            grid-template-columns: 1fr;
          }
          .left {
            padding: 40px 28px 48px;
            border-right: none;
            border-bottom: 4px solid #1a1a1a;
          }
          .wordmark {
            font-size: clamp(110px, 30vw, 200px);
          }
          .right {
            padding: 40px 24px 28px;
            min-height: auto;
          }
          .color-block-pink {
            width: 80%;
            height: 50%;
          }
          .burst-tr { width: 90px; height: 90px; }
          .burst-bl { width: 70px; height: 70px; bottom: 160px; }
          .arrow-tl, .arrow-br { width: 140px; height: 100px; }
          .arrow-br { bottom: 240px; }
        }
        @media (max-width: 480px) {
          .left { padding: 32px 20px 40px; }
          .right { padding: 32px 18px 24px; }
          .icon-row { gap: 8px; }
          .icon-cell span { font-size: 10px; }
          .icon-cell svg { width: 30px; height: 30px; }
        }
      `}</style>
    </>
  );
}
