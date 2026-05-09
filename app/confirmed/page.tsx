type SearchParams = { status?: string };

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { status } = await searchParams;

  const content = (() => {
    switch (status) {
      case 'success':
        return {
          heading: "You're in.",
          subtitle: "Welcome to the herd.",
          body: "We'll keep you posted as we get closer to launch.",
        };
      case 'already':
        return {
          heading: "Already confirmed.",
          subtitle: null,
          body: "Your email is already on the list. Nothing more to do.",
        };
      case 'invalid':
        return {
          heading: "Link expired.",
          subtitle: null,
          body: "This link is invalid or has already been used. You can sign up again from the home page.",
        };
      case 'error':
      default:
        return {
          heading: "Something went wrong.",
          subtitle: null,
          body: "We couldn't confirm your email. Please try signing up again.",
        };
    }
  })();

  return (
    <>
      <main className="page">
        {/* Accent wedges */}
        <div className="wedge-teal" />
        <div className="wedge-pink" />

        <div className="card">
          <img src="/uddy-wordmark.svg" alt="uddy." className="wordmark" />
          <h2 className="heading">{content.heading}</h2>
          {content.subtitle && <p className="subtitle">{content.subtitle}</p>}
          <p className="body">{content.body}</p>
          <p className="signature">&mdash; Jack &amp; Hollie</p>
        </div>
      </main>

      <style>{`
        .page {
          min-height: 100dvh;
          background: #edece7;
          color: #000;
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .wedge-teal {
          position: absolute;
          top: 0;
          left: 0;
          width: 18vw;
          height: 35vh;
          background: #009e8c;
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .wedge-pink {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 22vw;
          height: 40vh;
          background: #d877b0;
          clip-path: polygon(100% 0, 0 100%, 100% 100%);
        }
        .card {
          max-width: 480px;
          width: 100%;
          text-align: center;
          padding: 48px 40px;
          background: #ffffff;
          border: 3px solid #000;
          box-shadow: 4px 4px 0 #000;
          position: relative;
          z-index: 1;
          animation: fadeUp 0.5s ease-out both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wordmark {
          display: block;
          width: 100%;
          max-width: 600px;
          height: auto;
          margin: 0 auto 28px auto;
        }
        .heading {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: 34px;
          line-height: 1.1;
          margin: 0 0 12px 0;
          color: #009e8c;
          text-transform: uppercase;
        }
        .subtitle {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.4;
          margin: 0 0 8px 0;
          color: #000;
        }
        .body {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 400;
          font-size: 15px;
          line-height: 1.55;
          margin: 0 0 24px 0;
          color: #666;
        }
        .signature {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-size: 18px;
          color: #444;
          margin: 0;
        }
      `}</style>
    </>
  );
}
