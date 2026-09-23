import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from 'react'

export const ARTBOARD_WIDTH = 1440
export const HOME_HEIGHT = 892 + 2441 + 731
export const ABOUT_HEIGHT = 844 + 626 + 480 + 1405 + 186
export const SPREDO_HEIGHT = 467 + 686 + 467 + 1634 + 2867 + 1129 + 1357 + 186
export const RESUME_URL =
  'https://docs.google.com/document/d/1E9r_5JN_HsRJ2gCAwDCRcvbuMScXxPX3K63CUAP4Vvk/edit?usp=sharing'
export const EMAIL = 'mailto:gordonwu2000@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/gordonwu08/'
export const SPOTIFY =
  'https://open.spotify.com/user/21y3qjyg5psviefk5kqai23fa?si=d82cfcaec4914c34'
export const SPOTIFY_FOOTER =
  'https://open.spotify.com/user/21y3qjyg5psviefk5kqai23fa?si=621e8f0351b74e88'

export function Layer({
  src,
  left,
  top,
  width,
  height,
  alt = '',
  className,
}: {
  src: string
  left: number
  top: number
  width: number
  height: number
  alt?: string
  className?: string
}) {
  return (
    <div className={`layer ${className ?? ''}`.trim()} style={{ left, top, width, height }}>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  )
}

export function Artboard({ height, children }: { height: number; children: ReactNode }) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => setScale(window.innerWidth / ARTBOARD_WIDTH)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="viewport" style={{ height: height * scale }}>
      <div
        className="artboard"
        style={{ height, transform: `scale(${scale})` } satisfies CSSProperties}
      >
        {children}
      </div>
    </div>
  )
}

export function jumpToTop() {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

export function navigate(to: string) {
  const stayScrolled = to.includes('#')
  if (!stayScrolled) jumpToTop()
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  if (!stayScrolled) jumpToTop()
}

export function SiteNav({
  current,
  onProjectsClick,
}: {
  current: 'home' | 'about' | 'case'
  onProjectsClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <nav className="nav" aria-label="Primary">
      {current === 'home' ? (
        <p>GORDON WU</p>
      ) : (
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault()
            navigate('/')
          }}
        >
          GORDON WU
        </a>
      )}
      {current === 'about' ? (
        <p>ABOUT</p>
      ) : (
        <a
          href="/about"
          onClick={(event) => {
            event.preventDefault()
            navigate('/about')
          }}
        >
          ABOUT
        </a>
      )}
      <a
        href={current === 'home' ? '#projects' : '/#projects'}
        onClick={(event) => {
          if (onProjectsClick) {
            onProjectsClick(event)
            return
          }
          event.preventDefault()
          navigate('/#projects')
        }}
      >
        PROJECTS
      </a>
      <a className="nav-resume" href={RESUME_URL} target="_blank" rel="noreferrer">
        RESUME
      </a>
    </nav>
  )
}

export function SiteFooter({ className = '' }: { className?: string }) {
  return (
    <div className={`footer ${className}`.trim()}>
      <p>Crafted on my 2016 jet engine MacBook Pro.</p>
      <p className="copyright">©2024 by Gordon Wu</p>
      <div className="footer-links">
        <a href={EMAIL}>Email</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={SPOTIFY_FOOTER} target="_blank" rel="noreferrer">
          Spotify
        </a>
      </div>
    </div>
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path
          d="M3.5 11.25 L9 5.25 L14.5 11.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
