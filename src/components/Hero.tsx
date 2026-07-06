export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-bg" />
      <div className="hero-content container">
        <h1 className="hero-title">Bespoke Tailoring<br />Crafted For You</h1>
        <p className="hero-subtitle">
          Where heritage craftsmanship meets contemporary design. Every garment is a testament
          to precision, passion, and the finest materials.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#book" className="btn btn-outline-light">Book Consultation</a>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 120px 24px 80px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.5)),
            url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop') center / cover no-repeat;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 80%, rgba(214, 140, 77, 0.15), transparent 70%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 780px;
        }

        .hero-title {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.7;
          max-width: 540px;
          margin: 0 auto 40px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-subtitle {
            font-size: 0.95rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  )
}
