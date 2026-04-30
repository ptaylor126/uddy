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
           <div className="placeholder-box">LEFT CONTENT ZONE</div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {/* BACKGROUND COLOR BLOCKS */}
          <div className="bg-shape-pink"></div>
          <div className="bg-shape-teal"></div>

          <div className="placeholder-box z-index-content">RIGHT CONTENT ZONE (Jars go here)</div>
        </div>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: #F4F4F0;
          overflow-x: hidden;
        }

        .layout-container {
          display: flex;
          min-height: 100vh;
          width: 100vw;
          position: relative;
        }

        /* DECORATIVE LEFT STRIPS */
        .left-edge-teal { position: absolute; left: 0; top: 0; width: 20px; height: 60%; background-color: #00A887; z-index: 10; }
        .left-edge-pink { position: absolute; left: 0; bottom: 0; width: 20px; height: 40%; background-color: #F38AB6; z-index: 10; }

        /* LEFT PANEL */
        .left-panel {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 4rem 4rem 4rem 5rem;
          background-color: #F4F4F0;
          z-index: 2;
        }

        /* RIGHT PANEL */
        .right-panel {
          flex: 0 0 50%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #F4F4F0;
          padding: 2rem;
          z-index: 1;
        }

        /* RIGHT PANEL BACKGROUND SHAPES */
        .bg-shape-pink {
          position: absolute;
          left: 0;
          top: 0;
          width: 35%;
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

        /* TEMPORARY PLACEHOLDERS FOR VISUAL TESTING */
        .placeholder-box {
          width: 80%;
          height: 400px;
          border: 4px dashed #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: sans-serif;
          font-size: 1.5rem;
          font-weight: bold;
          color: #000;
        }
        .z-index-content {
          z-index: 5;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .layout-container { flex-direction: column; }
          .left-panel, .right-panel { flex: none; width: 100%; min-height: 50vh; }
          .bg-shape-pink { width: 100%; clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%); }
          .bg-shape-teal { width: 100%; height: 30%; clip-path: polygon(0 100%, 100% 0, 100% 100%); }
        }
      `}</style>
    </>
  );
}
