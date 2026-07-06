export default function Heritage() {
  return (
    <section id="heritage" className="section">
      <div className="heritage-grid">
        <div className="heritage-image">
          <img
            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop"
            alt="Master tailor at work"
          />
        </div>
        <div className="heritage-content">
          <span className="heritage-badge">Since 1998</span>
          <h2 className="section-title">A Legacy of Fine Tailoring</h2>
          <p className="section-subtitle" style={{ marginBottom: 20 }}>
            For over two decades, Textail has been synonymous with precision, quality, and timeless elegance.
            Founded by master tailor Alejandro Vargas in the heart of London, our atelier has dressed
            discerning gentlemen and women who appreciate the art of bespoke clothing.
          </p>
          <p className="section-subtitle" style={{ marginBottom: 28 }}>
            Every garment that leaves our workshop carries with it a tradition of excellence&mdash;from hand-stitched
            lapels to perfectly drafted patterns, we honor the craft with every cut and seam.
          </p>
          <div className="heritage-values">
            <div className="heritage-value">
              <span className="heritage-value-icon">&#9998;</span>
              <div>
                <h4>Hand-Crafted</h4>
                <p>Every stitch placed by expert hands</p>
              </div>
            </div>
            <div className="heritage-value">
              <span className="heritage-value-icon">&#9733;</span>
              <div>
                <h4>Premium Materials</h4>
                <p>Sourced from the world&apos;s finest mills</p>
              </div>
            </div>
            <div className="heritage-value">
              <span className="heritage-value-icon">&#9881;</span>
              <div>
                <h4>Perfect Fit</h4>
                <p>Tailored to your exact measurements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .heritage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .heritage-image {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }

        .heritage-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .heritage-image:hover img {
          transform: scale(1.04);
        }

        .heritage-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #d68c4d;
          background: rgba(214, 140, 77, 0.1);
          padding: 6px 16px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .heritage-values {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .heritage-value {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .heritage-value-icon {
          font-size: 1.4rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0ede8;
          border-radius: 10px;
          flex-shrink: 0;
          color: #d68c4d;
        }

        .heritage-value h4 {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: #1a1a1a;
        }

        .heritage-value p {
          font-size: 0.9rem;
          color: #777;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .heritage-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .heritage-image img {
            height: 300px;
          }

          .heritage-badge {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  )
}
