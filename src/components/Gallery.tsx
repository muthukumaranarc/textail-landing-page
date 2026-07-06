const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop',
    alt: 'Bespoke linen suit',
    label: 'Linen Collection',
  },
  {
    src: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2070&auto=format&fit=crop',
    alt: 'Wool suiting fabric',
    label: 'Wool Worsted',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
    alt: 'Tailoring workshop',
    label: 'Our Atelier',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2070&auto=format&fit=crop',
    alt: 'Sewing details',
    label: 'Craft in Motion',
  },
  {
    src: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2009&auto=format&fit=crop',
    alt: 'Finished suit on mannequin',
    label: 'Finished Masterpiece',
  },
  {
    src: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop',
    alt: 'Fabric rolls',
    label: 'Premium Fabrics',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section section-light">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A glimpse into the artistry and craftsmanship behind every garment we create.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.label} className="gallery-item">
              <img src={item.src} alt={item.alt} />
              <div className="gallery-overlay">
                <span className="gallery-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .gallery-item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          cursor: pointer;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26, 26, 26, 0.7), transparent 50%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
