const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '4k+', label: 'Garments Crafted' },
  { value: '800+', label: 'Satisfied Clients' },
  { value: '100%', label: 'Bespoke Approach' },
]

export default function Statistics() {
  return (
    <section className="section stats-section">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-title">Our Legacy in Numbers</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Decades of dedication to the art of tailoring, reflected in every garment we create.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          background: #fff;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card {
          text-align: center;
          padding: 40px 20px;
          background: #f9f9f9;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
        }

        .stat-value {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: #d68c4d;
          line-height: 1.1;
          margin-bottom: 8px;
          letter-spacing: -0.03em;
        }

        .stat-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .stat-value {
            font-size: 2.2rem;
            letter-spacing: -0.02em;
          }

          .stat-card {
            padding: 28px 16px;
          }
        }
      `}</style>
    </section>
  )
}
