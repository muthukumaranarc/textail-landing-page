const testimonials = [
  {
    name: 'James H.',
    role: 'CEO, Meridian Capital',
    text: 'Textail transformed the way I think about suiting. The attention to detail is extraordinary—every fitting was precise, and the final garment feels like it was made for me. Because it was.',
    rating: 5,
  },
  {
    name: 'Sophia L.',
    role: 'Creative Director',
    text: 'As someone in fashion, I have high standards. Textail exceeded them. The fabric selection is world-class, and the craftsmanship speaks for itself. I have found my tailor for life.',
    rating: 5,
  },
  {
    name: 'David R.',
    role: 'Barrister',
    text: 'I needed a wardrobe for court appearances and formal events. The team guided me through every choice with patience and expertise. The results are impeccable.',
    rating: 5,
  },
  {
    name: 'Elena M.',
    role: 'Interior Designer',
    text: 'Having garments that fit perfectly is a game-changer. Textail made the entire process effortless, and the quality is unmatched. Highly recommend their alteration services too.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-dark">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-title" style={{ color: '#fff' }}>What Our Clients Say</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', color: '#aaa' }}>
            Trusted by professionals, creatives, and connoisseurs of fine tailoring.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }, (_, i) => (
                  <span key={i} className="testimonial-star">&#9733;</span>
                ))}
              </div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 32px 28px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          border-color: rgba(214, 140, 77, 0.3);
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .testimonial-star {
          color: #d68c4d;
          font-size: 1rem;
        }

        .testimonial-text {
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.7;
          margin-bottom: 20px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #d68c4d;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .testimonial-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }

        .testimonial-role {
          font-size: 0.8rem;
          color: #888;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  )
}
