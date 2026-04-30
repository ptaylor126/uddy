'use client';

import React from 'react';

export default function Prelaunch() {
  return (
    <>
      <div className="layout-container">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="content-wrapper">
            <h1 className="logo-text">uddy</h1>

            <div className="copy-block">
              <h2>COMING SOON: O.G. SKIN FOOD.<br/>NO NASTIES. JUST GOOD SH*T.</h2>
              <p>Simple, tallow-based skincare for dry and sensitive skin. Join the list to be notified of our launch.</p>
            </div>

            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">GET NOTIFIED (FEED YOUR FACE)</button>
            </form>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {/* Background color blocks */}
          <div className="pink-bg"></div>

          <div className="image-container">
            {/* Replace this with your actual local image path */}
            <img src="/jars-stacked-three.jpg" alt="Uddy Skincare Jars" className="product-image" />

            {/* Hand-drawn frame SVG */}
            <svg className="doodle doodle-frame" viewBox="0 0 200 300" preserveAspectRatio="none">
              <path d="M10,10 Q90,5 190,15 Q195,150 185,290 Q100,295 15,285 Q5,150 10,10 Z" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 6"/>
            </svg>

            {/* Hand-drawn Starburst 1 (Top Right) */}
            <svg className="doodle doodle-star-top" viewBox="0 0 100 100">
              <path d="M50,5 L60,35 L95,25 L70,50 L95,75 L60,65 L50,95 L40,65 L5,75 L30,50 L5,25 L40,35 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinejoin="miter"/>
            </svg>

            {/* Hand-drawn Starburst 2 (Bottom Left) */}
            <svg className="doodle doodle-star-bottom" viewBox="0 0 100 100">
              <path d="M50,10 L58,40 L90,35 L65,55 L85,85 L55,70 L45,95 L35,65 L10,75 L30,50 L10,30 L40,40 Z" fill="none" stroke="#000" strokeWidth="4" strokeLinejoin="miter"/>
            </svg>

            {/* Hand-drawn Arrow (Pointing to jars) */}
            <svg className="doodle doodle-arrow" viewBox="0 0 100 100">
              <path d="M20,20 Q60,10 80,60" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
              <path d="M65,50 L80,60 L70,75" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Bottom Icons */}
          <div className="icon-row">
            <div className="icon-item">
              <div className="icon-box">⚡</div>
              <span>REAL<br/>INGREDIENTS</span>
            </div>
            <div className="icon-item">
              <div className="icon-box">💧</div>
              <span>WATER<br/>DROP</span>
            </div>
            <div className="icon-item">
              <div className="icon-box">🧪</div>
              <span>NATURAL<br/>PROTEIN</span>
            </div>
            <div className="icon-item">
              <div className="icon-box">🖤</div>
              <span>CRUELTY<br/>FREE</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;800;900&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background-color: #FDFBF7;
          color: #000;
          overflow-x: hidden;
        }

        .layout-container {
          display: flex;
          min-height: 100vh;
          width: 100vw;
        }

        /* LEFT PANEL STYLES */
        .left-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem;
          background-color: #FDFBF7;
          border-right: 4px solid #000;
          z-index: 2;
        }

        .content-wrapper {
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }

        .logo-text {
          font-size: clamp(6rem, 15vw, 12rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 0.8;
          margin-bottom: 3rem;
          color: #111;
        }

        .copy-block h2 {
          font-size: 1.8rem;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .copy-block p {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.5;
          margin-bottom: 3rem;
          max-width: 90%;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .signup-form input {
          width: 100%;
          padding: 1.5rem;
          font-size: 1.2rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          background: #fff;
          border: 4px solid #000;
          box-shadow: 6px 6px 0px 0px #000;
          outline: none;
          transition: transform 0.1s ease;
        }

        .signup-form input:focus {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0px 0px #000;
        }

        .signup-form button {
          width: 100%;
          padding: 1.5rem;
          font-size: 1.2rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 800;
          background: #000;
          color: #fff;
          border: 4px solid #000;
          box-shadow: 6px 6px 0px 0px #000;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.1s ease;
        }

        .signup-form button:hover {
          transform: translate(2px, 2px);
          box-shadow: 4px 4px 0px 0px #000;
        }

        .signup-form button:active {
          transform: translate(6px, 6px);
          box-shadow: 0px 0px 0px 0px #000;
        }

        /* RIGHT PANEL STYLES */
        .right-panel {
          flex: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #FDFBF7;
          overflow: hidden;
        }

        .pink-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 70%;
          height: 100%;
          background-color: #FF8BA7;
          border-left: 4px solid #000;
          z-index: 0;
        }

        .image-container {
          position: relative;
          z-index: 1;
          width: 60%;
          max-width: 400px;
          margin-bottom: 4rem;
        }

        .product-image {
          width: 100%;
          height: auto;
          display: block;
          border: 4px solid #000;
          box-shadow: 12px 12px 0px 0px #000;
          background: #fff;
        }

        /* DOODLES */
        .doodle {
          position: absolute;
          z-index: 2;
          pointer-events: none;
        }

        .doodle-frame {
          top: -20px;
          left: -20px;
          width: calc(100% + 40px);
          height: calc(100% + 40px);
        }

        .doodle-star-top {
          top: -50px;
          right: -60px;
          width: 100px;
          height: 100px;
        }

        .doodle-star-bottom {
          bottom: -40px;
          left: -60px;
          width: 80px;
          height: 80px;
        }

        .doodle-arrow {
          top: 10%;
          left: -80px;
          width: 100px;
          height: 100px;
          transform: rotate(-20deg);
        }

        /* BOTTOM ICONS */
        .icon-row {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 2rem;
          justify-content: center;
          background: #FDFBF7;
          padding: 1.5rem 2rem;
          border: 4px solid #000;
          box-shadow: 6px 6px 0px 0px #000;
        }

        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        }

        .icon-box {
          font-size: 2rem;
        }

        .icon-item span {
          font-size: 0.8rem;
          font-weight: 800;
          line-height: 1.2;
        }

        /* RESPONSIVE */
        @media (max-width: 968px) {
          .layout-container {
            flex-direction: column;
          }

          .left-panel {
            border-right: none;
            border-bottom: 4px solid #000;
            padding: 3rem 2rem;
          }

          .right-panel {
            padding: 4rem 2rem;
          }

          .pink-bg {
            width: 100%;
            height: 60%;
            top: auto;
            bottom: 0;
            border-left: none;
            border-top: 4px solid #000;
          }

          .image-container {
            width: 80%;
          }

          .icon-row {
            gap: 1rem;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}
