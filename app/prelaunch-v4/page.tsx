'use client';

import React from 'react';

export default function Prelaunch() {
  return (
    <>
      <div className="layout-container">
        {/* DECORATIVE LEFT EDGE COLOR STRIPS */}
        <div className="left-edge-teal"></div>
        <div className="left-edge-pink"></div>

        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="content-wrapper">
            {/* MASSIVE BLACK LOGO TEXT */}
            <h1 className="logo-text">UDDY</h1>

            <div className="copy-block">
              <h2>COMING SOON: O.G. SKIN FOOD.<br/>NO NASTIES. JUST GOOD SH*T.</h2>
              <p>Simple, tallow-based skincare for dry and sensitive skin.<br/>Join the list to be notified of our launch.</p>
            </div>

            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">GET NOTIFIED (FEED YOUR FACE)</button>
            </form>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {/* BACKGROUND COLOR BLOCKS */}
          <div className="bg-shape-pink"></div>
          <div className="bg-shape-teal"></div>

          <div className="hero-composition">
            {/* IMAGE COMPOSITION */}
            <div className="image-wrapper">
              <img src="/jars-pyramid-white.jpg" alt="Uddy Skincare Jars" className="product-image" />

              {/* DOODLE OVERLAYS */}
              {/* Main Frame */}
              <svg className="doodle doodle-frame" viewBox="0 0 300 350" preserveAspectRatio="none">
                <path d="M15,10 Q150,5 285,15 L290,340 Q150,345 10,335 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>

              {/* Top Left Star & Arrow */}
              <div className="doodle doodle-group-tl">
                <svg viewBox="0 0 100 100" className="doodle-icon">
                  <path d="M50,10 L60,35 L90,25 L70,50 L90,75 L60,65 L50,90 L40,65 L10,75 L30,50 L10,25 L40,35 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinejoin="miter"/>
                </svg>
                <svg viewBox="0 0 100 100" className="doodle-icon arrow-offset">
                  <path d="M20,20 Q60,10 80,70" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M60,60 L80,70 L75,45" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Top Right Star & Arrow */}
              <div className="doodle doodle-group-tr">
                <svg viewBox="0 0 100 100" className="doodle-icon">
                  <path d="M50,10 L60,35 L90,25 L70,50 L90,75 L60,65 L50,90 L40,65 L10,75 L30,50 L10,25 L40,35 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinejoin="miter"/>
                </svg>
                <svg viewBox="0 0 100 100" className="doodle-icon arrow-offset-rt">
                  <path d="M80,20 Q40,10 20,70" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M40,60 L20,70 L25,45" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Bottom Left Arrow */}
              <div className="doodle doodle-group-bl">
                <svg viewBox="0 0 100 100" className="doodle-icon">
                  <path d="M20,80 Q10,40 60,20" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M40,15 L60,20 L50,40" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Bottom Right Arrow */}
              <div className="doodle doodle-group-br">
                <svg viewBox="0 0 100 100" className="doodle-icon">
                  <path d="M80,80 Q90,40 40,20" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M60,15 L40,20 L50,40" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* BOTTOM ICONS (White Cards) */}
            <div className="icon-row">
              <div className="icon-card">
                <div className="icon-graphic">⚡</div>
                <span>REAL<br/>INGREDIENTS</span>
              </div>
              <div className="icon-card">
                <div className="icon-graphic">💧</div>
                <span>WATER<br/>DROP</span>
              </div>
              <div className="icon-card">
                <div className="icon-graphic">🧪</div>
                <span>NATURAL<br/>PROTEIN</span>
              </div>
              <div className="icon-card">
                <div className="icon-graphic">🖤</div>
                <span>CRUELTY<br/>FREE</span>
              </div>
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

        body {
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
        }

        /* DECORATIVE LEFT STRIPS */
        .left-edge-teal {
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
          height: 60%;
          background-color: #00A887;
          z-index: 10;
        }
        .left-edge-pink {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 20px;
          height: 40%;
          background-color: #F38AB6;
          z-index: 10;
        }

        /* LEFT PANEL */
        .left-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 4rem 4rem 6rem; /* Extra left padding for strips */
          background-color: #F4F4F0;
          z-index: 2;
        }

        .content-wrapper {
          max-width: 650px;
          width: 100%;
        }

        .logo-text {
          font-size: clamp(8rem, 18vw, 15rem);
          font-weight: 900;
          letter-spacing: -0.06em;
          line-height: 0.75;
          margin-bottom: 2rem;
          color: #000;
          transform: scaleY(1.3);
          transform-origin: left top;
          margin-top: 2rem;
        }

        .copy-block h2 {
          font-size: 2.2rem;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 1.2rem;
          letter-spacing: -0.02em;
        }

        .copy-block p {
          font-size: 1.3rem;
          font-weight: 400;
          line-height: 1.4;
          margin-bottom: 3rem;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          max-width: 550px;
        }

        .signup-form input {
          width: 100%;
          padding: 1.5rem;
          font-size: 1.2rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          background: #F4F4F0;
          border: 4px solid #000;
          outline: none;
        }

        .signup-form button {
          width: 100%;
          padding: 1.5rem;
          font-size: 1.2rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 900;
          background: #000;
          color: #fff;
          border: 4px solid #000;
          cursor: pointer;
          text-transform: uppercase;
        }

        /* RIGHT PANEL */
        .right-panel {
          flex: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #F4F4F0;
          overflow: hidden;
          padding: 2rem;
        }

        /* COLOR BLOCKS */
        .bg-shape-pink {
          position: absolute;
          left: 0;
          top: 0;
          width: 60%;
          height: 100%;
          background-color: #F38AB6;
          clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
          z-index: 0;
        }

        .bg-shape-teal {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 50%;
          height: 40%;
          background-color: #00A887;
          clip-path: polygon(0 100%, 100% 0, 100% 100%);
          z-index: 0;
        }

        /* HERO COMPOSITION */
        .hero-composition {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 500px;
        }

        .image-wrapper {
          position: relative;
          width: 80%;
          margin-bottom: 2rem;
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
          z-index: 3;
          pointer-events: none;
        }

        .doodle-frame {
          top: -15px;
          left: -15px;
          width: calc(100% + 30px);
          height: calc(100% + 30px);
        }

        .doodle-icon {
          width: 80px;
          height: 80px;
          position: absolute;
        }

        .doodle-group-tl {
          top: -40px;
          left: -100px;
          width: 100px;
          height: 100px;
        }
        .arrow-offset { top: 40px; left: 40px; width: 60px; height: 60px; }

        .doodle-group-tr {
          top: -60px;
          right: -90px;
          width: 100px;
          height: 100px;
        }
        .arrow-offset-rt { top: 50px; left: -30px; width: 60px; height: 60px; }

        .doodle-group-bl {
          bottom: -30px;
          left: -80px;
          width: 80px;
          height: 80px;
        }

        .doodle-group-br {
          bottom: -40px;
          right: -70px;
          width: 80px;
          height: 80px;
        }

        /* BOTTOM ICON CARDS */
        .icon-row {
          display: flex;
          gap: 1rem;
          width: 100%;
          justify-content: space-between;
        }

        .icon-card {
          background: #FFF;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 0.5rem;
          text-align: center;
        }

        .icon-graphic {
          font-size: 2rem;
          margin-bottom: 0.8rem;
        }

        .icon-card span {
          font-size: 0.8rem;
          font-weight: 900;
          line-height: 1.1;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .layout-container { flex-direction: column; }
          .left-panel { padding: 4rem 2rem 4rem 3rem; }
          .logo-text { transform: scaleY(1); }
          .right-panel { padding: 4rem 2rem; }
          .bg-shape-pink { width: 100%; clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%); }
          .bg-shape-teal { width: 100%; height: 30%; clip-path: polygon(0 100%, 100% 0, 100% 100%); }
        }
      `}</style>
    </>
  );
}
