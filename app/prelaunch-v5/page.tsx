'use client';

import React from 'react';

export default function PrelaunchV5() {
  return (
    <>
      <div className="layout-container">
        {/* DECORATIVE LEFT EDGE COLOR STRIPS */}
        <div className="left-edge-teal"></div>
        <div className="left-edge-pink"></div>

        {/* LEFT COLUMN: The Story & Hook */}
        <div className="left-column">
          <div className="content-wrapper">
            <h1 className="logo-text">uddy</h1>

            <div className="cutout-hook">
              <div className="cutout-row"><span className="cutout-box bg-white">REAL</span></div>
              <div className="cutout-row"><span className="cutout-box bg-pink">INGREDIENTS.</span></div>
              <div className="cutout-row"><span className="cutout-box bg-white">REAL</span></div>
              <div className="cutout-row"><span className="cutout-box bg-teal">RESULTS.</span></div>
            </div>

            <p className="explainer">Simple, tallow-based skincare for skin that&rsquo;s had enough of the runaround. Join the list.</p>

            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">GET NOTIFIED (FEED YOUR FACE)</button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: Mixed-Media Placeholder */}
        <div className="right-column">
          <div className="hero-composition">
            <div className="image-wrapper">
              <img src="/jars-transparent.png" alt="Uddy Skincare Jars" className="product-image" />

              {/* Hand-drawn frame and stars */}
              <svg className="doodle doodle-frame" viewBox="0 0 300 350" preserveAspectRatio="none">
                <path d="M15,10 Q150,5 285,15 L290,340 Q150,345 10,335 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>

              <div className="doodle doodle-group-tl">
                <svg viewBox="0 0 100 100" className="doodle-icon doodle-star">
                  <path d="M50,10 L60,35 L90,25 L70,50 L90,75 L60,65 L50,90 L40,65 L10,75 L30,50 L10,25 L40,35 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinejoin="miter"/>
                </svg>
              </div>

              <div className="doodle doodle-group-tr">
                <svg viewBox="0 0 100 100" className="doodle-icon doodle-star">
                  <path d="M50,10 L60,35 L90,25 L70,50 L90,75 L60,65 L50,90 L40,65 L10,75 L30,50 L10,25 L40,35 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinejoin="miter"/>
                </svg>
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
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        /* DECORATIVE LEFT STRIPS */
        .left-edge-teal { position: absolute; left: 0; top: 0; width: 20px; height: 60%; background-color: #00A887; z-index: 10; }
        .left-edge-pink { position: absolute; left: 0; bottom: 0; width: 20px; height: 40%; background-color: #F38AB6; z-index: 10; }

        /* LEFT COLUMN */
        .left-column {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 2rem 4rem 5rem;
          z-index: 2;
        }

        .content-wrapper {
          width: 100%;
          max-width: 550px;
        }

        .logo-text {
          font-size: clamp(6rem, 10vw, 9rem);
          font-weight: 900;
          letter-spacing: -0.06em;
          line-height: 0.8;
          margin-bottom: 3rem;
          color: #000;
        }

        /* CUTOUT HOOK */
        .cutout-hook {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .cutout-row {
          margin-bottom: 0.8rem;
        }

        .cutout-box {
          display: inline-block;
          padding: 0.2rem 0.8rem;
          border: 4px solid #000;
          box-shadow: 6px 6px 0px 0px #000;
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .bg-white { background-color: #FFF; }
        .bg-pink { background-color: #F38AB6; }
        .bg-teal { background-color: #00A887; }

        .explainer {
          font-size: 1.3rem;
          font-weight: 400;
          line-height: 1.4;
          margin-bottom: 2.5rem;
          max-width: 90%;
        }

        /* FORM */
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
          background: #FFF;
          border: 4px solid #000;
          box-shadow: 4px 4px 0px 0px #000;
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
          box-shadow: 4px 4px 0px 0px #F38AB6;
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .signup-form button:active {
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px 0px #F38AB6;
        }

        /* RIGHT COLUMN */
        .right-column {
          flex: 0 0 50%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          z-index: 1;
        }

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
          width: 70%;
          z-index: 5;
        }

        .product-image {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 5;
        }

        .doodle { position: absolute; pointer-events: none; }
        .doodle-frame { top: -10%; left: -10%; width: 120%; height: 120%; z-index: 10; }
        .doodle-group-tl { top: -15%; left: -25%; width: 40%; aspect-ratio: 1; z-index: 10; }
        .doodle-group-tr { top: -20%; right: -25%; width: 40%; aspect-ratio: 1; z-index: 10; }
        .doodle-icon { position: absolute; width: 100%; height: 100%; }
        .doodle-star { top: 0; left: 0; width: 80%; height: 80%; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .layout-container { flex-direction: column; overflow-y: auto; }
          .left-column { flex: none; width: 100%; padding: 4rem 2rem 4rem 3rem; }
          .right-column { flex: none; width: 100%; padding: 4rem 2rem; }
          .cutout-box { font-size: 12vw; }
        }
      `}</style>
    </>
  );
}
