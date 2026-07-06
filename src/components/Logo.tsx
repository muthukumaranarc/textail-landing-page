import { type LogoProps } from '../types'

export default function Logo({ variant = 'dark', size = 'md', showIcon = true }: LogoProps) {
  const isLight = variant === 'light'
  const height = size === 'sm' ? 28 : size === 'md' ? 36 : 48
  const gap = size === 'sm' ? 10 : size === 'md' ? 12 : 16

  return (
    <a href="#" className={`logo logo-${variant}`} style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap,
      textDecoration: 'none',
    }}>
      {showIcon ? (
        <>
          <img
            src="/Logo.jpg"
            alt="Textail — Bespoke Tailoring"
            height={height}
            style={{
              width: 'auto',
              display: 'block',
            }}
          />
          <span
            className="logo-text"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.3rem' : '1.6rem',
              fontWeight: 700,
              color: isLight ? '#fff' : '#1a1a1a',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            Textail
          </span>
        </>
      ) : (
        <span
          className="logo-text"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.3rem' : '1.6rem',
            fontWeight: 700,
            color: isLight ? '#fff' : '#1a1a1a',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          Textail
        </span>
      )}
    </a>
  )
}
