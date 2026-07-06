const steps = [
  {
    title: 'Consultation',
    desc: 'We begin with a deep conversation about your style, needs, and vision.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Fabric Choice',
    desc: 'Select from hundreds of premium fabrics sourced from the finest mills.',
    img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Pattern & Cut',
    desc: 'Your personal pattern is drafted and hand-cut by our master tailor.',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop',
  },
  {
    title: 'Finish & Fit',
    desc: 'Meticulous construction and fittings ensure a flawless final garment.',
    img: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function Process() {
  return (
    <section id="process" className="section section-dark">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 className="section-title" style={{ color: '#fff' }}>Our Process</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', color: '#aaa' }}>
            From the first conversation to the final fitting, every step is handled with care and precision.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={step.title} className="process-card">
              <div className="process-card-img">
                <img src={step.img} alt={step.title} />
                <span className="process-step-num">0{i + 1}</span>
              </div>
              <div className="process-card-body">
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-card {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .process-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
        }

        .process-card-img {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .process-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .process-card:hover .process-card-img img {
          transform: scale(1.06);
        }

        .process-step-num {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #fff;
          background: rgba(214, 140, 77, 0.9);
          padding: 6px 14px;
          border-radius: 6px;
          letter-spacing: 0.04em;
        }

        .process-card-body {
          padding: 24px 20px;
        }

        .process-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .process-card-desc {
          font-size: 0.85rem;
          color: #999;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .process-grid {
            grid-template-columns: 1fr;
          }

          .process-card-img {
            height: 180px;
          }
        }
      `}</style>
    </section>
  )
}
