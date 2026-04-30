'use client';

import React from 'react';

export default function Prelaunch() {
  return (
    <>
      <div className="layout-container">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <h1 className="logo-text">UDDY</h1>

          <div className="copy-block">
            <h2>COMING SOON: O.G. SKIN FOOD.<br/>NO NASTIES. JUST GOOD SH*T.</h2>
            <p>Simple, tallow-based skincare for dry and sensitive skin.<br/>Join the list to be notified of our launch.</p>
          </div>

          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="" required />
            <button type="submit">GET NOTIFIED (FEED YOUR FACE)</button>
          </form>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {/* Background color blocks: teal strip on left edge, pink fill, teal triangle bottom-right */}
          <div className="bg-pink"></div>
          <div className="bg-teal-left"></div>
          <div className="bg-pink-bl"></div>
          <div className="bg-teal-br"></div>

          <div className="hero-stage">
            <div className="image-wrapper">
              <img src="/jars-pyramid-white.jpg" alt="Uddy Skincare Jars" className="product-image" />

              {/* Wobbly hand-drawn frame around jars */}
              <svg className="doodle frame" viewBox="0 0 400 460" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M22,18 Q60,8 110,14 Q170,4 240,12 Q310,6 380,20 Q394,80 388,160 Q396,240 384,320 Q392,400 374,446 Q300,452 220,444 Q140,452 60,444 Q22,448 14,400 Q8,320 18,240 Q6,160 16,80 Q14,40 22,18 Z"
                  fill="none"
                  stroke="#000"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28,26 Q70,20 130,24 Q200,16 270,22 Q340,18 376,30 Q386,90 380,170 Q388,250 378,330 Q386,406 366,438 Q298,442 222,436 Q146,440 66,436 Q30,438 24,398 Q18,318 28,238 Q14,158 24,90 Q22,52 28,26 Z"
                  fill="none"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
              </svg>

              {/* Scribble starburst — top left */}
              <svg className="doodle burst burst-tl" viewBox="0 0 120 120" aria-hidden="true">
                <g fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M60,8 L66,40 L96,18 L72,46 L108,44 L74,58 L106,80 L70,68 L78,108 L58,72 L36,108 L48,70 L14,82 L44,58 L10,46 L46,46 L24,16 L52,40 Z"/>
                  <path d="M62,14 L68,42 L92,22 L74,48 L102,46 L76,60 L100,78 L70,66 L76,100 L58,70 L40,100 L50,70 L20,80 L46,60 L18,48 L48,48 L30,22 L54,42 Z" opacity="0.9"/>
                  <path d="M60,20 L66,44 L86,26 L72,50 L96,50 L74,62 L94,74 L70,64 L74,92 L58,68 L44,92 L52,68 L26,76 L48,62 L26,50 L50,50 L36,28 L56,44 Z" opacity="0.8"/>
                </g>
              </svg>

              {/* Scribble starburst — top right */}
              <svg className="doodle burst burst-tr" viewBox="0 0 120 120" aria-hidden="true">
                <g fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M60,6 L70,38 L104,22 L78,48 L112,52 L80,62 L106,86 L74,72 L82,108 L58,76 L34,108 L46,72 L12,86 L42,62 L8,52 L42,48 L18,22 L52,38 Z"/>
                  <path d="M62,14 L70,42 L96,28 L78,50 L100,54 L80,64 L98,80 L72,70 L78,98 L58,72 L40,98 L48,72 L22,82 L46,64 L22,54 L46,50 L26,28 L54,42 Z" opacity="0.9"/>
                  <path d="M60,22 L66,44 L88,32 L74,52 L92,56 L76,66 L88,76 L70,68 L72,90 L58,72 L46,90 L50,70 L30,78 L48,66 L30,56 L48,52 L34,32 L54,44 Z" opacity="0.8"/>
                </g>
              </svg>

              {/* Curved arrows pointing into the jars from each corner */}
              <svg className="doodle arrow arrow-tl" viewBox="0 0 120 120" aria-hidden="true">
                <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14,18 Q40,8 70,30 Q98,52 104,92"/>
                  <path d="M88,82 L106,94 L96,108"/>
                </g>
              </svg>
              <svg className="doodle arrow arrow-tr" viewBox="0 0 120 120" aria-hidden="true">
                <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M106,18 Q80,8 50,30 Q22,52 16,92"/>
                  <path d="M32,82 L14,94 L24,108"/>
                </g>
              </svg>
              <svg className="doodle arrow arrow-bl" viewBox="0 0 120 120" aria-hidden="true">
                <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14,102 Q40,112 70,90 Q98,68 104,28"/>
                  <path d="M88,38 L106,26 L96,12"/>
                </g>
              </svg>
              <svg className="doodle arrow arrow-br" viewBox="0 0 120 120" aria-hidden="true">
                <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M106,102 Q80,112 50,90 Q22,68 16,28"/>
                  <path d="M32,38 L14,26 L24,12"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Bottom icon row */}
          <div className="icon-row">
            <div className="icon-card">
              <div className="icon-graphic">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M22 4 L8 24 L18 24 L14 36 L32 14 L22 14 Z" fill="#000"/>
                </svg>
              </div>
              <span>REAL<br/>INGREDIENTS</span>
            </div>
            <div className="icon-card">
              <div className="icon-graphic">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M20 4 C 12 16, 8 22, 8 28 C 8 34, 13 38, 20 38 C 27 38, 32 34, 32 28 C 32 22, 28 16, 20 4 Z" fill="#000"/>
                </svg>
              </div>
              <span>WATER<br/>DROP</span>
            </div>
            <div className="icon-card">
              <div className="icon-graphic">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M14 4 L26 4 L26 16 L34 32 C 35 35, 33 38, 30 38 L 10 38 C 7 38, 5 35, 6 32 L 14 16 Z" fill="none" stroke="#000" strokeWidth="2.5" strokeLinejoin="round"/>
                  <line x1="14" y1="22" x2="26" y2="22" stroke="#000" strokeWidth="2.5"/>
                </svg>
              </div>
              <span>NATURAL<br/>PROTEIN</span>
            </div>
            <div className="icon-card">
              <div className="icon-graphic">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M20 34 C 12 28, 4 22, 4 14 C 4 9, 8 5, 13 5 C 16 7, 19 8, 20 11 C 21 8, 24 7, 27 5 C 32 5, 36 9, 36 14 C 36 22, 28 28, 20 34 Z" fill="#000"/>
                </svg>
              </div>
              <span>CRUELTY<br/>FREE</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,800;9..40,900&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          font-family: 'DM Sans', sans-serif;
          background-color: #F4F4F0;
          color: #000;
          overflow-x: hidden;
        }

        .layout-container {
          display: flex;
          min-height: 100vh;
          width: 100vw;
          position: relative;
          overflow: hidden;
        }

        /* ============ LEFT PANEL ============ */
        .left-panel {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 4vw 4vw 4vw 4vw;
          background-color: #F4F4F0;
          z-index: 2;
          position: relative;
        }

        .logo-text {
          font-size: 18vw;
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 0.82;
          color: #000;
          margin: 0 0 3vw 0;
          width: 100%;
          white-space: nowrap;
        }

        .copy-block h2 {
          font-size: clamp(1.4rem, 2vw, 2.1rem);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .copy-block p {
          font-size: clamp(0.95rem, 1.1vw, 1.15rem);
          font-weight: 400;
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 560px;
        }

        .signup-form input {
          width: 100%;
          padding: 1.25rem 1.25rem;
          font-size: 1.1rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          background: #F4F4F0;
          border: 4px solid #000;
          outline: none;
          height: 64px;
        }

        .signup-form button {
          width: 100%;
          padding: 1.25rem;
          font-size: 1.1rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 900;
          background: #000;
          color: #fff;
          border: 4px solid #000;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        /* ============ RIGHT PANEL ============ */
        .right-panel {
          flex: 0 0 50%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: stretch;
          padding: 0;
          overflow: hidden;
          background: #F4F4F0;
        }

        /* Color blocks: teal strip pinned to left edge, pink fills rest, small pink under teal at bottom-left, teal triangle bottom-right */
        .bg-pink {
          position: absolute;
          inset: 0;
          background-color: #F38AB6;
          z-index: 0;
        }
        .bg-teal-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 8%;
          height: 78%;
          background-color: #00A887;
          z-index: 1;
        }
        .bg-pink-bl {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 8%;
          height: 22%;
          background-color: #F38AB6;
          z-index: 1;
        }
        .bg-teal-br {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 55%;
          height: 38%;
          background-color: #00A887;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
          z-index: 1;
        }

        .hero-stage {
          position: relative;
          z-index: 3;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6% 12% 4%;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 460px;
        }

        .product-image {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 1;
        }

        /* DOODLES */
        .doodle {
          position: absolute;
          z-index: 4;
          pointer-events: none;
        }

        .frame {
          top: -8%;
          left: -8%;
          width: 116%;
          height: 116%;
          z-index: 2;
        }

        .burst {
          aspect-ratio: 1;
          width: 26%;
        }
        .burst-tl { top: -18%; left: -14%; }
        .burst-tr { top: -20%; right: -12%; }

        .arrow {
          aspect-ratio: 1;
          width: 18%;
        }
        .arrow-tl { top: 2%; left: -16%; }
        .arrow-tr { top: 2%; right: -14%; transform: scaleX(-1); }
        .arrow-bl { bottom: 2%; left: -16%; }
        .arrow-br { bottom: 2%; right: -14%; transform: scaleX(-1); }

        /* ============ ICON ROW ============ */
        .icon-row {
          position: relative;
          z-index: 3;
          display: flex;
          width: 100%;
        }

        .icon-card {
          background: #fff;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.4rem 0.5rem 1.6rem;
          text-align: center;
          gap: 0.6rem;
        }

        .icon-graphic svg {
          width: 28px;
          height: 28px;
          display: block;
        }

        .icon-card span {
          font-size: 0.78rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: 0.02em;
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 1024px) {
          .layout-container { flex-direction: column; overflow-y: auto; min-height: auto; }
          .left-panel { flex: none; width: 100%; padding: 6vw; }
          .logo-text { font-size: 32vw; }
          .right-panel { flex: none; width: 100%; min-height: 80vh; }
          .hero-stage { padding: 12% 14% 6%; }
          .bg-teal-left { width: 6%; }
          .bg-pink-bl { width: 6%; }
          .bg-teal-br { width: 60%; height: 30%; }
        }
        @media (max-width: 600px) {
          .icon-card { padding: 1rem 0.25rem 1.1rem; }
          .icon-card span { font-size: 0.65rem; }
          .icon-graphic svg { width: 22px; height: 22px; }
          .copy-block h2 { font-size: 1.2rem; }
        }
      `}</style>
    </>
  );
}
