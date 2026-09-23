import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { img } from './assets'
import './App.css'

const ARTBOARD_WIDTH = 1440
const ARTBOARD_HEIGHT = 892 + 2441 + 731
const RESUME_URL =
  'https://docs.google.com/document/d/1E9r_5JN_HsRJ2gCAwDCRcvbuMScXxPX3K63CUAP4Vvk/edit?usp=sharing'
const EMAIL = 'mailto:gordonwu2000@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/gordonwu08/'
const SPOTIFY =
  'https://open.spotify.com/user/21y3qjyg5psviefk5kqai23fa?si=d82cfcaec4914c34'

type LayerProps = {
  src: string
  left: number
  top: number
  width: number
  height: number
  alt?: string
  className?: string
}

function Layer({ src, left, top, width, height, alt = '', className }: LayerProps) {
  return (
    <div className={`layer ${className ?? ''}`.trim()} style={{ left, top, width, height }}>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  )
}

function Token({ children }: { children: ReactNode }) {
  return <span className="token">{children}</span>
}

function ProjectCard({
  title,
  tags,
  description,
  preview,
  href,
}: {
  title: string
  tags: string[]
  description: ReactNode
  preview: ReactNode
  href?: string
}) {
  const body = (
    <>
      <div className="project-copy">
        <div className="project-copy-top">
          <h3>{title}</h3>
          <div className="token-row">
            {tags.map((tag) => (
              <Token key={tag}>{tag}</Token>
            ))}
          </div>
        </div>
        <div className="project-desc">{description}</div>
      </div>
      <div className="project-preview">{preview}</div>
      <span className="view-project">VIEW PROJECT</span>
    </>
  )

  if (href) {
    return (
      <a className="project-card" href={href}>
        {body}
      </a>
    )
  }

  return <article className="project-card">{body}</article>
}

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top, behavior: 'smooth' })
}

function App() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => setScale(window.innerWidth / ARTBOARD_WIDTH)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="viewport" style={{ height: ARTBOARD_HEIGHT * scale }}>
      <div
        className="artboard"
        style={{ transform: `scale(${scale})` } satisfies CSSProperties}
      >
        <header className="hero">
          <nav className="nav" aria-label="Primary">
            <p>GORDON WU</p>
            <a
              href="#about"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('about')
              }}
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('projects')
              }}
            >
              PROJECTS
            </a>
            <a
              className="nav-resume"
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
          </nav>

          <div className="hero-headline">
            <img
              className="letter-m"
              src={img.letterM}
              alt=""
              width={148}
              height={92}
            />
            <p className="hero-line hero-line-1">
              <span>ETICULOUS</span>
              <span>IN</span>
              <span>CRAFTING</span>
            </p>
            <p className="hero-line hero-line-2">
              <span className="muted">ELEGANT</span>
              <span> AND </span>
              <span className="muted">FUNCTIONAL</span>
            </p>
            <p className="hero-line hero-line-3 muted">DESIGNS.</p>
          </div>

          <div id="about" className="identity">
            <p className="identity-name">GORDON WU</p>
            <p className="identity-role">UX/VISUAL/PRODUCT DESIGNER</p>
            <div className="socials">
              <a className="social" href={EMAIL} aria-label="Email">
                <img src={img.iconEmailBg} alt="" width={40} height={40} />
                <img className="social-email" src={img.iconEmail} alt="" width={22} height={16.5} />
              </a>
              <a
                className="social"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={img.iconLinkedin} alt="" width={40} height={40} />
              </a>
              <a
                className="social"
                href={SPOTIFY}
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify"
              >
                <img src={img.iconSpotify} alt="" width={40} height={40} />
              </a>
            </div>
          </div>

          <div className="smiski-ladder" aria-hidden="true">
            <Layer src={img.smiskiLadderBody} left={51.86} top={70.74} width={169.497} height={214.216} />
            <Layer src={img.smiskiLadder} left={0} top={16.3} width={109.715} height={81.152} />
            <Layer src={img.smiskiLadderHead} left={68.05} top={0} width={127.692} height={127.692} />
          </div>

          <div className="smiski-boxes" aria-hidden="true">
            <Layer src={img.smiskiBoxesLowerBody} left={17.5} top={124.49} width={131.025} height={173.838} />
            <Layer src={img.smiskiBoxesHead} left={70.57} top={18.82} width={123.996} height={123.996} />
            <Layer src={img.smiskiBox3} left={0} top={105.18} width={83.84} height={84.344} />
            <Layer src={img.smiskiBox2} left={10.92} top={51.41} width={66.535} height={61.83} />
            <Layer src={img.smiskiBox1} left={2.69} top={0} width={80.816} height={59.31} />
            <Layer src={img.smiskiBoxesArm} left={21.39} top={133.86} width={118.04} height={44.886} />
          </div>

          <div className="smiski-lamp" aria-hidden="true">
            <img src={img.smiskiLamp} alt="" width={170.402} height={295.185} />
          </div>

          <div className="hero-meta">
            <p>UX DESIGNER</p>
            <a
              className="scroll-more"
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                scrollToId('projects')
              }}
            >
              SCROLL TO VIEW MORE
              <img src={img.scrollChevron} alt="" width={20} height={15} />
            </a>
            <p>BURNABY, BC</p>
          </div>
        </header>

        <section id="projects" className="projects">
          <div className="projects-intro">
            <div className="projects-title">
              <p className="projects-title-text">://&nbsp;&nbsp;&nbsp;&nbsp;ROJECTS</p>
              <img className="letter-p" src={img.letterP} alt="" width={114} height={92} />
            </div>
            <p className="aside aside-left">
              THEY CALL ME
              <br />
              GORDON RAMSAY,
            </p>
            <p className="aside aside-right">
              BECAUSE I’M ALWAYS
              <br />
              COOKIN.
            </p>
            <div className="smiski-idea" aria-hidden="true">
              <Layer src={img.ideaBody} left={0} top={190.03} width={156} height={143.173} />
              <Layer src={img.ideaHead} left={8.09} top={71.85} width={131.868} height={131.868} />
              <div className="idea-mouth">
                <img src={img.ideaMouth} alt="" width={22.701} height={14.721} />
              </div>
              <div className="idea-eye idea-eye-left">
                <img src={img.ideaEyeLeft} alt="" width={9.539} height={12.293} />
              </div>
              <div className="idea-eye idea-eye-right">
                <img src={img.ideaEyeRight} alt="" width={9.539} height={12.293} />
              </div>
              <Layer src={img.ideaBulb} left={47.71} top={0} width={54.479} height={51.057} />
              <Layer src={img.ideaBulbBase} left={59.8} top={50.21} width={29.012} height={22.539} />
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-head">
              <p>WORK:EXPERIENCES</p>
              <p>GALLERY 01</p>
            </div>
            <img className="divider" src={img.divider} alt="" />

            <ProjectCard
              title="Spredo"
              tags={['UX DESIGN', 'WEB DESIGN', 'CLIENT PROJECT']}
              description={
                <>
                  Designing a scalable e-commerce
                  <br />
                  experience for a growing CPG brand.
                </>
              }
              preview={
                <div className="preview-frame preview-spredo">
                  <img className="imac" src={img.imacSpredo} alt="Spredo website on a desktop computer" />
                  <img className="spredo-logo" src={img.logoSpredo} alt="" />
                </div>
              }
            />

            <img className="divider" src={img.divider} alt="" />

            <ProjectCard
              title="CaterDash"
              tags={['UX DESIGN', 'WEB DESIGN', 'CLIENT PROJECT']}
              description="Reimagining the ordering process for Canada’s leading restaurant catering marketplace with 45,000+ meals delivered (previously known as NNECT)."
              preview={
                <div className="preview-frame preview-caterdash">
                  <img className="apple-set" src={img.appleSetCaterdash} alt="CaterDash product screens on Apple devices" />
                  <div className="caterdash-logo" aria-hidden="true">
                    <img className="caterdash-circle" src={img.caterdashLogoCircle} alt="" />
                    <div className="caterdash-arc">
                      <img src={img.caterdashLogoArc} alt="" />
                    </div>
                    <img className="caterdash-dot caterdash-dot-top" src={img.caterdashLogoDot} alt="" />
                    <img className="caterdash-dot caterdash-dot-bottom" src={img.caterdashLogoDot} alt="" />
                  </div>
                </div>
              }
            />

            <img className="divider" src={img.divider} alt="" />

            <ProjectCard
              title="Broomies 🏅"
              tags={['UI/UX DESIGN', 'HACKATHON']}
              description={
                <>
                  <p>
                    Our roommate-friendly solution to easily assign chores, track monthly
                    performance, and split expenses effortlessly.
                  </p>
                  <p>
                    Awarded <strong>Best Use of CockroachDB Serverless</strong> at Hack the North
                    2023.
                  </p>
                </>
              }
              preview={
                <div className="preview-frame preview-broomies">
                  <img className="phones" src={img.iphoneBroomies} alt="Broomies app screens on phones" />
                  <div className="broom-mark" aria-hidden="true">
                    <div className="broom-handle">
                      <img src={img.broomVector658} alt="" />
                    </div>
                    <img className="broom-union" src={img.broomUnion} alt="" />
                    <div className="broom-head">
                      <img className="broom-v2" src={img.broomVector2} alt="" />
                      <img className="broom-v3" src={img.broomVector3} alt="" />
                      <img className="broom-v14" src={img.broomVector14} alt="" />
                    </div>
                    <div className="broom-bristle">
                      <img src={img.broomVector655} alt="" />
                    </div>
                  </div>
                </div>
              }
            />

            <img className="divider" src={img.divider} alt="" />
          </div>
        </section>

        <footer className="footer-block">
          <div className="collection">
            <img className="letter-g" src={img.letterG} alt="" width={99} height={107} />
            <p className="collection-wu">WU</p>
            <p className="collection-design">DESIGN</p>
            <p className="collection-portfolio">PORTFOLIO</p>
            <p className="collection-01">COLLECTION 01</p>
            <p className="collection-fw">FW24</p>
            <p className="collection-bby">BBY</p>
            <p className="collection-year">©2024</p>
            <div className="smiski-artist" aria-hidden="true">
              <Layer src={img.artistBody} left={0} top={111.73} width={153.764} height={190.921} />
              <Layer src={img.artistLegs} left={73.72} top={233.49} width={18.338} height={67.459} />
              <Layer src={img.palette} left={91.41} top={137.86} width={69.595} height={67.426} />
              <Layer src={img.palettePaint1} left={135.61} top={143.27} width={18.4} height={9.781} />
              <Layer src={img.palettePaint2} left={136.25} top={154.06} width={17.096} height={13.423} />
              <Layer src={img.palettePaint3} left={128.86} top={164.88} width={17.271} height={16.513} />
              <Layer src={img.palettePaint4} left={119.14} top={176.62} width={15.63} height={17.306} />
              <div className="palette-paint-5">
                <img src={img.palettePaint5} alt="" width={18.329} height={23.929} />
              </div>
              <Layer src={img.artistHead} left={7.25} top={0} width={128.041} height={128.041} />
              <div className="artist-mouth">
                <img src={img.artistMouth} alt="" width={22.934} height={6.363} />
              </div>
              <Layer src={img.artistEyeLeft} left={46.95} top={64.34} width={28.474} height={19.415} />
              <div className="artist-eye-right">
                <img src={img.artistEyeRight} alt="" width={26.939} height={15.7} />
              </div>
              <Layer src={img.artistBrowLeft} left={49.16} top={47.82} width={11.134} height={10.807} />
              <Layer src={img.artistBrowRight} left={93.37} top={54.37} width={10.152} height={10.807} />
              <Layer src={img.brush1} left={17.89} top={121.65} width={53.378} height={32.42} />
              <Layer src={img.brush2} left={65.86} top={144.94} width={29.8} height={19.771} />
              <Layer src={img.hand1} left={15.6} top={140.64} width={43.282} height={31.782} />
              <Layer src={img.hand2} left={22.8} top={148.34} width={16.66} height={19.157} />
            </div>
          </div>
          <div className="footer">
            <p>Crafted on my 2016 jet engine MacBook Pro.</p>
            <p className="copyright">©2024 by Gordon Wu</p>
            <div className="footer-links">
              <a href={EMAIL}>Email</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a
                href="https://open.spotify.com/user/21y3qjyg5psviefk5kqai23fa?si=621e8f0351b74e88"
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
