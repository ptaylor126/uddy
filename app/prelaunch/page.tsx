'use client';

import { useState, FormEvent } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-inter',
});

export default function PrelaunchPage() {
  const [email, setEmail] = useState('');
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  return (
    <div className={`page ${inter.variable}`}>
      {/* Background strips (page level) */}
      <div className="bg-teal-top" />
      <div className="bg-pink-bottom" />

      {/* Content layout */}
      <div className="layout">
        {/* Shapes layered between hero and copy panel */}
        <div className="bg-teal-wedge" />
        <div className="bg-pink-shape" />
        {/* Left copy panel */}
        <div className="copy-panel">
          <div className="copy-inner">
            <img src="/uddy-wordmark.svg" alt="Uddy" className="wordmark" />

            <div className="tagline-wrap">
              <p className="tagline">NO NASTIES. JUST NATURE</p>
            </div>

            <ul className="pills-row">
              <li className="pill">
                <svg className="pill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C14.3869 24 16.6761 23.0518 18.364 21.364C20.0518 19.6761 21 17.3869 21 15C21 12.5175 19.317 10.644 17.352 8.457C15.381 6.264 13.125 3.7545 12 0C12 0 3 8.529 3 15C3 17.3869 3.94821 19.6761 5.63604 21.364C7.32387 23.0518 9.61305 24 12 24ZM9.969 6.969L11.031 8.031C10.596 8.466 9.339 9.9975 8.1705 12.336L6.8295 11.664C8.0595 9.2025 9.405 7.5345 9.969 6.969Z" fill="currentColor"/></svg>
                DRY
              </li>
              <li className="pill">
                <svg className="pill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.055 14.328L3.037 14.16L3.033 14.117C2.99831 13.7447 2.98262 13.3709 2.986 12.997C3.004 6.707 7.276 3 15.986 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L20.998 6.057C20.5 14.758 16.258 19 9 19H6.369C6.19698 19.6942 6.0717 20.3991 5.994 21.11C5.97955 21.2405 5.93954 21.3669 5.87624 21.482C5.81294 21.5971 5.7276 21.6986 5.62508 21.7806C5.52257 21.8627 5.40489 21.9238 5.27876 21.9604C5.15263 21.997 5.02053 22.0084 4.89 21.994C4.75947 21.9796 4.63306 21.9395 4.51799 21.8762C4.40292 21.8129 4.30144 21.7276 4.21935 21.6251C4.13727 21.5226 4.07618 21.4049 4.03957 21.2788C4.00296 21.1526 3.99155 21.0205 4.006 20.89C4.122 19.8447 4.31533 18.8623 4.586 17.943L4.468 17.797L4.26 17.517L4.103 17.288L3.921 16.995L3.823 16.824L3.758 16.702C3.59916 16.4002 3.46635 16.0854 3.361 15.761L3.289 15.524L3.204 15.197L3.147 14.929L3.104 14.687L3.055 14.328ZM11.594 10.086C8.749 11.351 6.74 13.216 5.486 15.669C5.55133 15.8023 5.624 15.9357 5.704 16.069L5.889 16.35L5.959 16.447C6.039 16.5563 6.125 16.666 6.217 16.776L6.414 17H7.063C8.1 14.729 9.84 13.054 12.406 11.914C12.6484 11.8063 12.8381 11.6068 12.9334 11.3592C13.0286 11.1117 13.0217 10.8364 12.914 10.594C12.8063 10.3516 12.6068 10.1619 12.3592 10.0666C12.1117 9.97135 11.8364 9.97832 11.594 10.086Z" fill="currentColor"/></svg>
                SENSITIVE
              </li>
              <li className="pill">
                <svg className="pill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19C13.1 19 14 19.9 14 21C14 22.1 13.1 23 12 23C10.9 23 10 22.1 10 21C10 19.9 10.9 19 12 19ZM12 1C13.1 1 14 1.9 14 3C14 4.1 13.1 5 12 5C10.9 5 10 4.1 10 3C10 1.9 10.9 1 12 1ZM6 16C7.1 16 8 16.9 8 18C8 19.1 7.1 20 6 20C4.9 20 4 19.1 4 18C4 16.9 4.9 16 6 16ZM3 10C4.1 10 5 10.9 5 12C5 13.1 4.1 14 3 14C1.9 14 1 13.1 1 12C1 10.9 1.9 10 3 10ZM6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8C4.9 8 4 7.1 4 6C4 4.9 4.9 4 6 4ZM18 16C19.1 16 20 16.9 20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16ZM21 10C22.1 10 23 10.9 23 12C23 13.1 22.1 14 21 14C19.9 14 19 13.1 19 12C19 10.9 19.9 10 21 10ZM18 4C19.1 4 20 4.9 20 6C20 7.1 19.1 8 18 8C16.9 8 16 7.1 16 6C16 4.9 16.9 4 18 4Z" fill="currentColor"/></svg>
                ECZEMA
              </li>
              <li className="pill">
                <svg className="pill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5C12.2984 1.5 12.5845 1.61853 12.7955 1.8295C13.0065 2.04048 13.125 2.32663 13.125 2.625V4.875C13.125 5.17337 13.0065 5.45952 12.7955 5.6705C12.5845 5.88147 12.2984 6 12 6C11.7016 6 11.4155 5.88147 11.2045 5.6705C10.9935 5.45952 10.875 5.17337 10.875 4.875V2.625C10.875 2.32663 10.9935 2.04048 11.2045 1.8295C11.4155 1.61853 11.7016 1.5 12 1.5ZM15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12ZM19.425 6.165C19.5355 6.06201 19.6242 5.93781 19.6857 5.79981C19.7472 5.66181 19.7802 5.51284 19.7829 5.36178C19.7856 5.21073 19.7578 5.06069 19.7012 4.9206C19.6446 4.78052 19.5604 4.65327 19.4536 4.54644C19.3467 4.43961 19.2195 4.3554 19.0794 4.29882C18.9393 4.24223 18.7893 4.21445 18.6382 4.21711C18.4872 4.21978 18.3382 4.25284 18.2002 4.31433C18.0622 4.37582 17.938 4.46447 17.835 4.575L16.242 6.165C16.1374 6.2695 16.0544 6.39358 15.9978 6.53015C15.9411 6.66672 15.9119 6.81312 15.9119 6.96097C15.9117 7.25957 16.0302 7.54601 16.2413 7.75725C16.4523 7.9685 16.7386 8.08725 17.0372 8.08739C17.3358 8.08753 17.6223 7.96905 17.8335 7.758L19.425 6.165ZM22.5 12C22.5 12.2984 22.3815 12.5845 22.1705 12.7955C21.9595 13.0065 21.6734 13.125 21.375 13.125H19.125C18.8266 13.125 18.5405 13.0065 18.3295 12.7955C18.1185 12.5845 18 12.2984 18 12C18 11.7016 18.1185 11.4155 18.3295 11.2045C18.5405 10.9935 18.8266 10.875 19.125 10.875H21.375C21.6734 10.875 21.9595 10.9935 22.1705 11.2045C22.3815 11.4155 22.5 11.7016 22.5 12ZM17.835 19.425C18.0483 19.6237 18.3303 19.7319 18.6218 19.7268C18.9132 19.7216 19.1913 19.6036 19.3974 19.3974C19.6036 19.1913 19.7216 18.9132 19.7268 18.6218C19.7319 18.3303 19.6237 18.0483 19.425 17.835L17.835 16.242C17.7305 16.1374 17.6064 16.0544 17.4698 15.9978C17.3333 15.9411 17.1869 15.9119 17.039 15.9119C16.8912 15.9118 16.7448 15.9408 16.6081 15.9974C16.4715 16.0539 16.3473 16.1368 16.2427 16.2413C16.1382 16.3457 16.0552 16.4698 15.9985 16.6064C15.9419 16.743 15.9127 16.8894 15.9126 17.0372C15.9125 17.3358 16.031 17.6223 16.242 17.8335L17.835 19.425ZM12 18C12.2984 18 12.5845 18.1185 12.7955 18.3295C13.0065 18.5405 13.125 18.8266 13.125 19.125V21.375C13.125 21.6734 13.0065 21.9595 12.7955 22.1705C12.5845 22.3815 12.2984 22.5 12 22.5C11.7016 22.5 11.4155 22.3815 11.2045 22.1705C10.9935 21.9595 10.875 21.6734 10.875 21.375V19.125C10.875 18.8266 10.9935 18.5405 11.2045 18.3295C11.4155 18.1185 11.7016 18 12 18ZM7.758 17.835C7.8626 17.7305 7.94559 17.6064 8.00223 17.4698C8.05888 17.3333 8.08807 17.1869 8.08814 17.039C8.08821 16.8912 8.05916 16.7448 8.00264 16.6081C7.94612 16.4715 7.86325 16.3473 7.75875 16.2427C7.65425 16.1382 7.53017 16.0552 7.3936 15.9985C7.25703 15.9419 7.11063 15.9127 6.96278 15.9126C6.81493 15.9125 6.66851 15.9416 6.53188 15.9981C6.39525 16.0546 6.2711 16.1375 6.1665 16.242L4.575 17.835C4.46447 17.938 4.37582 18.0622 4.31433 18.2002C4.25284 18.3382 4.21978 18.4872 4.21711 18.6382C4.21445 18.7893 4.24223 18.9393 4.29882 19.0794C4.3554 19.2195 4.43961 19.3467 4.54644 19.4536C4.65327 19.5604 4.78052 19.6446 4.9206 19.7012C5.06069 19.7578 5.21073 19.7856 5.36178 19.7829C5.51284 19.7802 5.66181 19.7472 5.79981 19.6857C5.93781 19.6242 6.06201 19.5355 6.165 19.425L7.758 17.835ZM6 12C6 12.2984 5.88147 12.5845 5.6705 12.7955C5.45952 13.0065 5.17337 13.125 4.875 13.125H2.625C2.32663 13.125 2.04048 13.0065 1.8295 12.7955C1.61853 12.5845 1.5 12.2984 1.5 12C1.5 11.7016 1.61853 11.4155 1.8295 11.2045C2.04048 10.9935 2.32663 10.875 2.625 10.875H4.875C5.17337 10.875 5.45952 10.9935 5.6705 11.2045C5.88147 11.4155 6 11.7016 6 12ZM6.165 7.758C6.37625 7.96944 6.66283 8.08831 6.96172 8.08845C7.26061 8.08859 7.54731 7.97 7.75875 7.75875C7.97019 7.54751 8.08906 7.26092 8.0892 6.96203C8.08934 6.66314 7.97074 6.37644 7.7595 6.165L6.165 4.575C6.06201 4.46447 5.93781 4.37582 5.79981 4.31433C5.66181 4.25284 5.51284 4.21978 5.36178 4.21711C5.21073 4.21445 5.06069 4.24223 4.9206 4.29882C4.78052 4.3554 4.65327 4.43961 4.54644 4.54644C4.43961 4.65327 4.3554 4.78052 4.29882 4.9206C4.24223 5.06069 4.21445 5.21073 4.21711 5.36178C4.21978 5.51284 4.25284 5.66181 4.31433 5.79981C4.37582 5.93781 4.46447 6.06201 4.575 6.165L6.165 7.758Z" fill="currentColor"/></svg>
                ROSACEA
              </li>
              <li className="pill">
                <svg className="pill-icon pill-icon-rotated" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H22V14H20C18.62 14 17.26 13.65 16 13C13.5 14.3 10.5 14.3 8 13C6.74 13.65 5.37 14 4 14H2V12H4C5.39 12 6.78 11.53 8 10.67C10.44 12.38 13.56 12.38 16 10.67C17.22 11.53 18.61 12 20 12ZM20 6H22V8H20C18.62 8 17.26 7.65 16 7C13.5 8.3 10.5 8.3 8 7C6.74 7.65 5.37 8 4 8H2V6H4C5.39 6 6.78 5.53 8 4.67C10.44 6.38 13.56 6.38 16 4.67C17.22 5.53 18.61 6 20 6ZM20 18H22V20H20C18.62 20 17.26 19.65 16 19C13.5 20.3 10.5 20.3 8 19C6.74 19.65 5.37 20 4 20H2V18H4C5.39 18 6.78 17.53 8 16.67C10.44 18.38 13.56 18.38 16 16.67C17.22 17.53 18.61 18 20 18Z" fill="currentColor"/></svg>
                PSORIASIS
              </li>
            </ul>

            <div className="yellow-box">
              <p>Most skincare is packed with ingredients you can&rsquo;t pronounce. Uddy keeps it simple. Grass-fed tallow. Natural ingredients. <span className="nothing-fake">Nothing fake.</span></p>
            </div>

            {status === 'success' ? (
              <div className="success-card" role="status">
                <h2 className="success-heading">You&rsquo;re on the list.</h2>
                <p>
                  We&rsquo;ve sent a confirmation link to <strong>{email}</strong>.
                  Tap it to finish signing up.
                </p>
              </div>
            ) : (
              <div className="signup-section">
                <h2 className="signup-heading">JOIN THE HERD</h2>
                <ul className="signup-list">
                  <li>Launch discounts</li>
                  <li>First dibs on our first batch</li>
                  <li>Behind-the-scenes updates</li>
                </ul>
                <form onSubmit={handleSubmit} noValidate className="signup-form">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={status === 'loading'}
                    aria-label="Email address"
                    className="email-input"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading' || !isValidEmail}
                    className="submit-button"
                  >
                    {status === 'loading' ? 'Sending\u2026' : 'GET NOTIFIED (FEED YOUR FACE)'}
                  </button>
                </form>
                {status === 'error' && (
                  <p className="error-message" role="alert">{errorMsg}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right hero panel */}
        <div className="hero-panel">
          <div className="hero-teal-wedge" />
          <div className="hero-pink-shape" />
          <img src="/prelaunch-hero.png" alt="Uddy skincare products" className="hero-img" />
          {/* Badge inside hero for mobile positioning */}
          <div className="coming-soon">
            <span>COMING SOON</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          height: 100vh;
          background: #dbd9d9;
          overflow: hidden;
          font-family: var(--font-inter), sans-serif;
        }

        /* ===== Background shapes ===== */
        .bg-teal-top {
          position: absolute;
          left: 0;
          top: 0;
          width: 37px;
          height: 50%;
          background: #009e8c;
          z-index: 0;
        }
        .bg-pink-bottom {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 37px;
          height: 50%;
          background: #d877b0;
          z-index: 0;
        }
        .bg-teal-wedge {
          position: absolute;
          top: 0;
          right: 0;
          width: 60.3%;
          height: 11.2%;
          background: #009e8c;
          clip-path: polygon(0 0, 100% 0, 100% 100%);
          z-index: 2;
          pointer-events: none;
        }
        .bg-pink-shape {
          position: absolute;
          left: 19.6%;
          top: 33.5%;
          width: 41.3%;
          height: 66.5%;
          background: #d877b0;
          clip-path: polygon(40% 0, 80% 0, 100% 100%, 0% 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* ===== Layout ===== */
        .layout {
          display: flex;
          height: 100vh;
          position: relative;
        }

        /* ===== Copy panel ===== */
        .copy-panel {
          flex: 0 0 52%;
          background: #edece7;
          margin-left: 2.57%;
          height: 100vh;
          position: relative;
          z-index: 3;
          overflow: hidden;
        }
        .copy-inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(8px, 1.6vh, 16px);
          padding: clamp(12px, 2vh, 20px) clamp(16px, 3.1vh, 32px) calc(clamp(16px, 3.1vh, 32px) + 16px);
          height: 100%;
          box-sizing: border-box;
        }
        .wordmark {
          width: 100%;
          height: auto;
          max-height: 38vh;
          object-fit: contain;
          object-position: center;
          display: block;
        }
        .tagline-wrap {
          text-align: center;
          padding: 0;
          margin-top: clamp(-6px, -0.8vh, -2px);
        }
        .tagline {
          font-weight: 800;
          font-size: clamp(20px, 4.5vh, 46px);
          color: #000;
          letter-spacing: 0.02em;
          margin: 0;
        }
        /* ===== Pills row ===== */
        .pills-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          list-style: none;
          margin: 0;
          padding: clamp(4px, 0.8vh, 8px) 0;
        }
        .pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border: 2px solid #000;
          border-radius: 24px;
          font-weight: 700;
          font-size: 14px;
          color: #000;
          white-space: nowrap;
        }
        .pill-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          color: #000;
        }
        .pill-icon-rotated {
          transform: rotate(90deg);
        }

        .yellow-box {
          background: #f9d867;
          border: 4px solid #000;
          padding: clamp(8px, 1.6vh, 16px) 32px;
          box-shadow: 4px 4px 0 #000;
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 2.3vh, 24px);
        }
        .yellow-box p {
          margin: 0;
          font-weight: 400;
          font-size: clamp(13px, 2.3vh, 24px);
          color: #000;
          text-align: center;
          line-height: 1.4;
        }
        .nothing-fake {
          display: inline;
        }
        .signup-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(2px, 0.5vh, 6px);
        }
        .signup-list li {
          font-weight: 500;
          font-size: clamp(14px, 2.1vh, 20px);
          color: #000;
          line-height: 1.4;
          padding-left: 22px;
          position: relative;
        }
        .signup-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='M7 1c.3 2 .5 4 0 6-.2 1.5-.5 3-.3 4.5M1.5 5.5c2 .5 4 1 6 1s3-.3 5-1M2.5 2.5c1.5 1.5 3 3 4.5 4.5M11.5 2.5c-1.5 1.5-3 3-4.5 4.5M3 10c1.5-1 3-2.5 4-4M11 10c-1.5-1-3-2.5-4-4' fill='none' stroke='%23000' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center / contain;
        }

        /* ===== Signup ===== */
        .signup-section {
          display: flex;
          flex-direction: column;
          gap: clamp(6px, 1vh, 10px);
          margin-top: clamp(4px, 0.8vh, 12px);
          padding-bottom: clamp(8px, 1.6vh, 16px);
        }
        .signup-heading {
          font-weight: 700;
          font-size: clamp(20px, 3.9vh, 40px);
          color: #000;
          text-align: center;
          margin: 0;
          padding-bottom: 0;
        }
        .signup-form {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 1.5vh, 15px);
        }
        .email-input {
          width: 100%;
          height: 60px;
          padding: 0 16px;
          border: 3px solid #000;
          background: #fff;
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #000;
          text-align: center;
          box-shadow: 3px 3px 0 #000;
          outline: none;
          box-sizing: border-box;
        }
        .email-input::placeholder {
          color: #a7a7a7;
          text-align: center;
        }
        .email-input:focus {
          box-shadow: 1px 1px 0 #000;
          transform: translate(2px, 2px);
        }
        .submit-button {
          width: 100%;
          height: 60px;
          padding: 0 16px;
          border: 3px solid #000;
          background: #009e8c;
          color: #f9f5f0;
          font-family: var(--font-inter), sans-serif;
          font-weight: 900;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 3px 3px 0 #000;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .submit-button:hover:not(:disabled) {
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #000;
        }
        .submit-button:active:not(:disabled) {
          transform: translate(3px, 3px);
          box-shadow: 0 0 0 #000;
        }
        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .error-message {
          margin: 0;
          font-size: 14px;
          color: #b42318;
          font-weight: 600;
        }

        /* ===== Success card ===== */
        .success-card {
          flex: 0 0 auto;
          background: #fff;
          border: 4px solid #000;
          padding: 32px 24px;
          box-shadow: 4px 4px 0 #009e8c;
          margin-top: 16px;
        }
        .success-heading {
          font-weight: 900;
          font-size: clamp(24px, 2.5vw, 36px);
          text-transform: uppercase;
          margin: 0 0 12px 0;
          line-height: 1;
          color: #000;
        }
        .success-card p {
          margin: 0;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          color: #000;
        }

        /* ===== Hero panel ===== */
        .hero-panel {
          flex: 1;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: stretch;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }
        .hero-teal-wedge,
        .hero-pink-shape {
          display: none;
        }
        .coming-soon {
          position: absolute;
          left: calc(65% + 48px);
          top: calc(27.8% + 64px);
          transform: translate(-50%, -50%) rotate(17deg);
          width: 121px;
          height: 121px;
          background: #f9d867;
          border: 3.9px solid #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 3.5px 2.2px 0 #000;
          z-index: 4;
        }
        .coming-soon span {
          font-weight: 800;
          font-size: 15px;
          color: #000;
          text-align: center;
          letter-spacing: 0.02em;
          line-height: 1.2;
          width: 82px;
        }

        /* ===== Mobile ===== */
        @media (max-width: 900px) {
          .page {
            height: auto;
            max-width: 100vw;
            overflow-x: hidden;
          }
          .layout {
            flex-direction: column;
            height: auto;
          }
          .copy-panel {
            flex: 0 0 auto;
            width: 100%;
            margin-left: 0;
            height: auto;
            overflow: hidden;
          }
          .copy-inner {
            padding: 32px 20px;
            height: auto;
            gap: 16px;
            justify-content: flex-start;
          }
          .wordmark {
            max-height: none;
          }
          .tagline {
            font-size: clamp(18px, 5vw, 32px);
          }
          .yellow-box {
            padding-left: 16px;
            padding-right: 16px;
          }
          .nothing-fake {
            display: block;
            margin-top: 4px;
          }
          /* ===== Hero photo section (mobile) ===== */
          .hero-panel {
            display: block;
            flex: none;
            height: 135vw;
            min-height: 0;
            width: 100%;
            position: relative;
            background: #dbd9d9;
            overflow: hidden;
            z-index: 1;
          }
          .hero-img {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 96%;
            object-fit: contain;
            object-position: center top;
          }

          /* Mobile shapes inside hero-panel */
          .hero-teal-wedge {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 9%;
            background: #009e8c;
            clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%);
            z-index: 2;
            pointer-events: none;
          }
          .hero-pink-shape {
            display: block;
            position: absolute;
            left: 0;
            top: 30%;
            width: 23%;
            height: 70%;
            background: #d877b0;
            clip-path: polygon(0 0, 0 100%, 100% 100%);
            z-index: 2;
            pointer-events: none;
          }

          /* Hide layout-level shapes on mobile */
          .bg-teal-top {
            width: 100%;
            height: 10px;
            left: 0;
            top: 0;
            z-index: 5;
          }
          .bg-pink-bottom {
            display: block;
            top: 10px;
            bottom: auto;
            width: 100%;
            height: 6px;
            z-index: 5;
          }
          .bg-teal-wedge {
            display: none;
          }
          .bg-pink-shape {
            display: none;
          }

          /* Coming Soon badge */
          .coming-soon {
            left: auto;
            right: 42px;
            top: 36%;
            width: 83px;
            height: 83px;
            border-width: 2.7px;
            box-shadow: 2.2px 1.3px 0 #000;
            transform: rotate(17deg);
          }
          .coming-soon span {
            font-size: 10.7px;
            width: 56px;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          overflow-x: hidden;
        }
        @media (max-width: 900px) {
          html, body {
            overflow-x: hidden !important;
          }
        }
      `}</style>
    </div>
  );
}
