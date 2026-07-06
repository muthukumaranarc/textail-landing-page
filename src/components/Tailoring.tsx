import { useState } from 'react'

const services = [
  {
    label: 'Wool Suiting',
    title: 'Wool & Worsted Suiting',
    desc: 'From luxurious Italian wools to durable English worsteds, we source only the finest fabrics for your perfect suit. Each garment is hand-cut and sewn to your exact measurements.',
    img: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    label: 'Linen Apparel',
    title: 'Linen & Lightweight Garments',
    desc: 'Perfect for warmer climates, our linen collection offers breathable elegance without compromising on structure. Ideal for both casual and formal occasions.',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop',
  },
  {
    label: 'Alterations',
    title: 'Precision Alteration Services',
    desc: 'Whether it is a family heirloom or a recent purchase, our master tailors restore and refine garments to perfection. Every stitch is placed with expert care.',
    img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function Tailoring() {
  const [active, setActive] = useState(0)
  const s = services[active]

  return (
    <section id="services" className="section section-light">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-title">Expert Tailoring &amp; Alterations</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From bespoke garments to meticulous alterations, our master tailors bring decades of experience to every piece.
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {services.map((svc, i) => (
            <button
              key={svc.label}
              className={`tab-btn${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {svc.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div className="service-card">
          <div className="service-card-img">
            <img src={s.img} alt={s.title} />
          </div>
          <div className="service-card-body">
            <h3 className="service-card-title">{s.title}</h3>
            <p className="service-card-desc">{s.desc}</p>
            <a href="#book" className="btn btn-primary">Book a Fitting</a>
          </div>
        </div>
      </div>

      <style>{`
        .tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 10px 28px;
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-radius: 6px;
          background: transparent;
          color: #666;
          border: 1px solid #ddd;
          transition: all 0.25s ease;
        }

        .tab-btn:hover {
          border-color: #d68c4d;
          color: #d68c4d;
        }

        .tab-btn.active {
          background: #d68c4d;
          color: #fff;
          border-color: #d68c4d;
        }

        .service-card {
          display: flex;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.3s;
        }

        .service-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }

        .service-card-img {
          flex: 0 0 45%;
          min-height: 320px;
          overflow: hidden;
        }

        .service-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-card-img img {
          transform: scale(1.04);
        }

        .service-card-body {
          flex: 1;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .service-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 14px;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }

        .service-card-desc {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        @media (max-width: 768px) {
          .service-card {
            flex-direction: column;
          }

          .service-card-img {
            flex: none;
            height: 220px;
          }

          .service-card-body {
            padding: 32px 24px;
          }

          .service-card-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}
