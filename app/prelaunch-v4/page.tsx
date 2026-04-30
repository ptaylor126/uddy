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
              {/* Using the transparent image so the background colors show through! */}
              <img src="/jars-transparent.png" alt="Uddy Skincare Jars" className="product-image" />

              {/* DOODLE OVERLAYS (Now anchored to the image wrapper) */}
              {/* Main Frame */}
              <svg className="doodle doodle-frame" viewBox="0 0 300 350" preserveAspectRatio="none">
                <path d="M15,10 Q150,5 285,15 L290,340 Q150,345 10,335 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>

              {/* Top Left Star & Arrow */}
              <div className="doodle doodle-group-tl">
                <svg viewBox="0 0 100 100" className="doodle-icon doodle-star">
                  <path d="M50,10 L60,35 L90,25 L70,50 L90,75 L60,65 L50,90 L40,65 L10,75 L30,50 L10,25 L40,35 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinejoin="miter"/>
                </svg>
                <svg viewBox="0 0 100 100" className="doodle-icon doodle-arrow-tl">
                  <path d="M20,20 Q60,10 80,70" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M60,60 L80,70 L75,45" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Top Right Star & Arrow */}
              <div className="doodle doodle-group-tr">
                <svg viewBox="0 0 100 100" className="doodle-icon doodle-star">
                  <path d="M50,10 L60,35 L90,25 L70,50 L90,75 L60,65 L50,90 L40,65 L10,75 L30,50 L10,25 L40,35 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinejoin="miter"/>
                </svg>
                <svg viewBox="0 0 100 100" className="doodle-icon doodle-arrow-tr">
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

            {/* BOTTOM ICONS (White Cards with Pure Black SVGs) */}
            <div className="icon-row">
              <div className="icon-card">
                <svg className="icon-graphic" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <span>REAL<br/>INGREDIENTS</span>
              </div>
              <div className="icon-card">
                <svg className="icon-graphic" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c0 0-7 9-7 14a7 7 0 0014 0c0-5-7-14-7-14z"/></svg>
                <span>WATER<br/>DROP</span>
              </div>
              <div className="icon-card">
                <svg className="icon-graphic" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2v5.5l-6 9A2 2 0 005.5 20h13a2 2 0 001.5-3.5l-6-9V2h-4z"/></svg>
                <span>NATURAL<br/>PROTEIN</span>
              </div>
              <div className="icon-card">
                <svg className="icon-graphic" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
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
          overflow: hidden;
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
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 4rem 4rem 5rem;
          background-color: #F4F4F0;
          z-index: 2;
        }

        .content-wrapper {
          width: 100%;
          max-width: 600px;
        }

        .logo-text {
          font-size: 14vw;
          font-weight: 900;
          letter-spacing: -0.06em;
          line-height: 0.75;
          margin-top: 0;
          margin-bottom: 2rem;
          color: #000;
          transform: scaleY(1.8); /* Stretches the text vertically */
          transform-origin: left top;
        }

        .copy-block h2 {
          font-size: clamp(1.2rem, 2.2vw, 2.2rem);
          font-weight: 900;
          white-space: nowrap; /* Prevents awkward mid-sentence line breaks */
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 1.2rem;
          letter-spacing: -0.02em;
        }

        .copy-block p {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.4;
          margin-bottom: 3rem;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          width: 100%;
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
          white-space: nowrap;
          text-transform: uppercase;
        }

        /* RIGHT PANEL */
        .right-panel {
          flex: 0 0 50%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #F4F4F0; /* Restores the off-white center */
          padding: 2rem;
          z-index: 1;
        }
        .bg-shape-pink {
          position: absolute;
          left: 0;
          top: 0;
          width: 40%;
          height: 100%;
          background-color: #F38AB6;
          clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%);
          z-index: -1;
        }
        .bg-shape-teal {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 45%;
          height: 50%;
          background-color: #00A887;
          clip-path: polygon(100% 30%, 0 100%, 100% 100%);
          z-index: -1;
        }

        /* HERO COMPOSITION */
        .hero-composition {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 450px;
        }

        .image-wrapper {
          position: relative;
          width: 55%; /* Pulls the container tight around the jars */
          margin: 0 auto 3rem auto;
          z-index: 5;
        }

        .product-image {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 5;
        }

        /* DOODLES - Locked to .image-wrapper using percentages */
        .doodle {
          position: absolute;
          pointer-events: none;
        }

        .doodle-frame {
          top: -10%; left: -10%; width: 120%; height: 120%; z-index: 10;
        }
        .doodle-group-tl {
          top: -10%; left: -20%; width: 50%; aspect-ratio: 1; z-index: 10;
        }
        .doodle-group-tr {
          top: -15%; right: -15%; width: 50%; aspect-ratio: 1; z-index: 10;
        }
        .doodle-group-bl {
          bottom: -5%; left: -10%; width: 40%; aspect-ratio: 1; z-index: 10;
        }
        .doodle-group-br {
          bottom: -5%; right: -10%; width: 40%; aspect-ratio: 1; z-index: 10;
        }

        .doodle-icon {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .doodle-star { top: 0; left: 0; width: 80%; height: 80%; }
        .doodle-arrow-tl { top: 30%; left: 40%; width: 60%; height: 60%; }
        .doodle-arrow-tr { top: 30%; right: 40%; width: 60%; height: 60%; left: auto; }

        /* BOTTOM ICON CARDS */
        .icon-row {
          display: flex;
          gap: 1rem;
          width: 100%;
          justify-content: space-between;
          z-index: 10;
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
          border: none;
          box-shadow: none;
        }

        .icon-graphic {
          width: 32px;
          height: 32px;
          margin-bottom: 0.8rem;
          color: #000;
        }

        .icon-card span {
          font-size: 0.8rem;
          font-weight: 900;
          line-height: 1.1;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .layout-container { flex-direction: column; overflow-y: auto; }
          .left-panel { flex: none; width: 100%; padding: 4rem 2rem 4rem 3rem; }
          .logo-text { font-size: 25vw; }
          .right-panel { flex: none; width: 100%; padding: 4rem 2rem; }
          .bg-shape-pink { width: 100%; clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%); }
          .bg-shape-teal { width: 100%; height: 30%; clip-path: polygon(0 100%, 100% 0, 100% 100%); }
        }
      `}</style>
    </>
  );
}
