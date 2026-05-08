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
          body: "Thanks for confirming. We'll be in touch before we launch.",
        };
      case 'already':
        return {
          heading: "Already confirmed.",
          body: "Your email is already on the list. Nothing more to do.",
        };
      case 'invalid':
        return {
          heading: "Link expired.",
          body: "This link is invalid or has already been used. You can sign up again from the home page.",
        };
      case 'error':
      default:
        return {
          heading: "Something went wrong.",
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
          <h1 className="wordmark">uddy.</h1>
          <h2 className="heading">{content.heading}</h2>
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
          width: 120px;
          height: 120px;
          background: #009e8c;
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .wedge-pink {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 140px;
          height: 140px;
          background: #d877b0;
          clip-path: polygon(0 0, 0 100%, 100% 100%);
        }
        .card {
          max-width: 480px;
          text-align: center;
          padding: 40px 32px;
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
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: 36px;
          letter-spacing: -0.03em;
          margin: 0 0 24px 0;
          text-transform: lowercase;
        }
        .heading {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 900;
          font-size: 32px;
          line-height: 1.1;
          margin: 0 0 16px 0;
          color: #009e8c;
          text-transform: uppercase;
        }
        .body {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.55;
          margin: 0 0 24px 0;
        }
        .signature {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #666;
          margin: 0;
        }
      `}</style>
    </>
  );
}
