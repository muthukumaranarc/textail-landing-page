import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
    { label: 'Heritage', href: '#heritage' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Logo variant="light" size="md" />

        <nav className={`navbar-nav${open ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar-link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#book" className="btn btn-primary navbar-cta">Book Now</a>
        </nav>

        <button
          className={`navbar-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }

        .navbar .logo-text:hover {
          color: #d68c4d;
          transition: color 0.2s;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .navbar-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          transition: color 0.2s;
        }

        .navbar-link:hover {
          color: #d68c4d;
        }

        .navbar-cta {
          padding: 10px 24px;
          font-size: 0.8rem;
        }

        /* ─── Hamburger ─── */
        .navbar-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 36px;
          height: 36px;
          background: none;
          gap: 5px;
        }

        .navbar-toggle span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .navbar-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .navbar-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .navbar-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .navbar-toggle {
            display: flex;
          }

          .navbar-nav {
            position: fixed;
            top: 68px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(26, 26, 26, 0.98);
            padding: 32px 24px;
            gap: 24px;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .navbar-nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>
    </header>
  )
}
