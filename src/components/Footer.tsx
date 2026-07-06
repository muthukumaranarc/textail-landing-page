import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div id="book" className="footer-cta">
        <h2 className="footer-cta-title">Book a Private Consultation</h2>
        <p className="footer-cta-subtitle">
          Experience the art of bespoke tailoring. Schedule a one-on-one session with our master tailors.
        </p>
        <div className="footer-cta-actions">
          <a href="#book" className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 40px' }}>
            Schedule Now
          </a>
          <a href="mailto:hello@textail.com" className="btn btn-outline-light" style={{ fontSize: '1rem', padding: '16px 40px' }}>
            Contact Us
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <Logo variant="light" size="sm" />
          <p className="footer-copy">&copy; {new Date().getFullYear()} Textail. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #1a1a1a;
          color: #fff;
        }

        .footer-cta {
          text-align: center;
          padding: 80px 24px;
          max-width: 640px;
          margin: 0 auto;
        }

        .footer-cta-title {
          font-family: 'Inter', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .footer-cta-subtitle {
          font-size: 1rem;
          color: #aaa;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .footer-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0;
        }

        .footer .logo-text:hover {
          color: #d68c4d;
          transition: color 0.2s;
        }

        .footer-copy {
          font-size: 0.8rem;
          color: #777;
        }

        @media (max-width: 600px) {
          .footer-cta-title {
            font-size: 1.5rem;
          }

          .footer-bottom-inner {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
