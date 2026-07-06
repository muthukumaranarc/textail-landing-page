export default function Contact() {
  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ready to begin your bespoke journey? Visit our atelier or send us a message.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-card">
              <h3>Visit Our Atelier</h3>
              <p>47 Savile Row, London<br />W1S 2NZ, United Kingdom</p>
            </div>
            <div className="contact-info-card">
              <h3>Hours</h3>
              <p>Mon&ndash;Fri: 9:00 AM &ndash; 7:00 PM<br />Saturday: 10:00 AM &ndash; 5:00 PM<br />Sunday: By appointment</p>
            </div>
            <div className="contact-info-card">
              <h3>Contact</h3>
              <p>+44 20 7946 0138<br />hello@textail.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" required>
                <option value="">Select a service...</option>
                <option value="bespoke">Bespoke Suiting</option>
                <option value="linen">Linen Apparel</option>
                <option value="alterations">Alterations</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows={5} placeholder="Tell us about what you're looking for..." required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-card {
          background: #f9f9f9;
          padding: 28px 24px;
          border-radius: 10px;
          border-left: 3px solid #d68c4d;
          transition: transform 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateX(4px);
        }

        .contact-info-card h3 {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a1a1a;
        }

        .contact-info-card p {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.7;
        }

        .contact-form {
          background: #f9f9f9;
          padding: 36px 32px;
          border-radius: 12px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fff;
          color: #1a1a1a;
          transition: border-color 0.2s ease;
          outline: none;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #d68c4d;
          box-shadow: 0 0 0 3px rgba(214, 140, 77, 0.1);
        }

        .form-group textarea {
          resize: vertical;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 28px 20px;
          }
        }
      `}</style>
    </section>
  )
}
