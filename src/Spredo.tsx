import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { spredoImg } from './spredoAssets'
import { ARTBOARD_WIDTH, BackToTop, SPREDO_HEIGHT, Artboard, SiteFooter, SiteNav } from './ui'
import './App.css'
import './Spredo.css'

function CompareSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  className = '',
}: {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  className?: string
}) {
  const [pos, setPos] = useState(50)
  const frame = useRef<HTMLDivElement>(null)

  const move = useCallback((clientX: number) => {
    const el = frame.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(96, Math.max(2, next)))
  }, [])

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    move(event.clientX)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    move(event.clientX)
  }

  return (
    <div
      ref={frame}
      className={`compare ${className}`.trim()}
      role="slider"
      aria-label="Before and after design comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') setPos((value) => Math.max(2, value - 4))
        if (event.key === 'ArrowRight') setPos((value) => Math.min(96, value + 4))
      }}
    >
      <img className="compare-img compare-after" src={after} alt={afterAlt} draggable={false} />
      <div className="compare-before-clip" style={{ width: `${pos}%` }}>
        <img className="compare-img compare-before" src={before} alt={beforeAlt} draggable={false} />
      </div>
      <div className="compare-handle" style={{ left: `${pos}%` }}>
        <span className="compare-bar" />
        <span className="compare-knob" />
      </div>
    </div>
  )
}

export default function Spredo() {
  return (
    <>
      <Artboard height={SPREDO_HEIGHT}>
        <section className="cs-hero">
          <SiteNav current="case" />
          <p className="cs-date">August 2026 (1 month)</p>
          <h1 className="cs-title">Spredo</h1>
          <p className="cs-lede">
            Designing a scalable e-commerce
            <br />
            experience for a growing CPG brand.
          </p>
          <div className="cs-meta">
            <p>
              <strong>My Role:</strong>
              <br />
              UX/UI Designer
            </p>
            <p>
              <strong>Scope:</strong>
              <br />
              Full pre-checkout experience
            </p>
            <p>
              <strong>Outcome:</strong>
              <br />
              Shipped to Shopify developers and now
              <br />
              live at{' '}
              <a href="https://spredo.ca" target="_blank" rel="noreferrer">
                Spredo.ca
              </a>
            </p>
          </div>
        </section>

        <section className="cs-banner" aria-hidden="true">
          <img src={spredoImg.banner} alt="" width={ARTBOARD_WIDTH} height={686} />
        </section>

        <section className="cs-block cs-challenge">
          <p className="cs-kicker">OVERVIEW</p>
          <h2>The challenge</h2>
          <div className="cs-copy">
            <p>Spredo had a strong product, but its website wasn’t communicating that strength.</p>
            <p>
              Weak product imagery, unclear hierarchy, and limited product storytelling made it
              difficult for buyers to understand what differentiated Spredo or feel confident
              stocking it in their workplace. The redesign needed to balance three things:
            </p>
            <ol>
              <li>Build credibility with B2B buyers</li>
              <li>Make detailed product information easy to understand</li>
              <li>Create an experience that could scale as Spredo grew</li>
            </ol>
          </div>
        </section>

        <section className="cs-block cs-discovery">
          <p className="cs-kicker">DISCOVERY</p>
          <h2>Finding the opportunities</h2>
          <p className="cs-copy cs-copy-tight">
            I began by auditing every screen of the existing website in Figma, identifying what was
            working, where users could experience friction, and where Spredo was missing
            opportunities to communicate its value.
          </p>
          <img className="cs-audit" src={spredoImg.audit} alt="Audit of existing Spredo website screens" />
          <p className="cs-copy cs-copy-mid">
            I paired those findings with qualitative competitor design analysis research provided by
            the client.
          </p>
          <div className="cs-matrix" aria-hidden="true">
            <div className="cs-matrix-labels">
              <span>Brand personality</span>
              <span>Product-led storytelling</span>
              <span>Clear information hierarchy</span>
              <span>Premium / trustworthy feel</span>
            </div>
            <img className="cs-matrix-line" src={spredoImg.matrixLine} alt="" />
            <img className="cs-checks cs-checks-graza" src={spredoImg.checksGraza} alt="" />
            <img className="cs-checks cs-checks-bloom" src={spredoImg.checksBloom} alt="" />
            <img className="cs-checks cs-checks-olipop" src={spredoImg.checksOlipop} alt="" />
            <img className="cs-checks cs-checks-nespresso" src={spredoImg.checksNespresso} alt="" />
            <img className="cs-logo cs-logo-graza" src={spredoImg.graza} alt="" />
            <img className="cs-logo cs-logo-bloom" src={spredoImg.bloom} alt="" />
            <img className="cs-logo cs-logo-olipop" src={spredoImg.olipop} alt="" />
            <img className="cs-logo cs-logo-nespresso" src={spredoImg.nespresso} alt="" />
            <p className="cs-brand cs-brand-graza">Graza</p>
            <p className="cs-brand cs-brand-bloom">Bloom</p>
            <p className="cs-brand cs-brand-olipop">Olipop</p>
            <p className="cs-brand cs-brand-nespresso">Nespresso</p>
          </div>
          <div className="cs-copy cs-copy-end">
            <p>
              Three opportunities became clear: strengthen product storytelling, improve information
              hierarchy, and create a digital experience that better reflected the quality of the
              brand.
            </p>
            <p>
              With a one-month timeline, I moved from lightweight lo-fi exploration into
              high-fidelity design, focusing most of my time on the areas that had the greatest
              influence on purchasing decisions.
            </p>
          </div>
        </section>

        <section className="cs-block cs-direction">
          <p className="cs-kicker">DIRECTION</p>
          <h2>Designing around buyer confidence</h2>
          <div className="cs-copy">
            <p>
              I analyzed the competitive analysis alongside the existing experience to identify
              patterns in typography, product presentation, imagery, spacing, and information
              hierarchy.
            </p>
            <p>
              This lead me to decide on the design direction to be around buyer confidence. Thus,
              the homepage and product pages became the core focus of the redesign, with the other
              pages coming after.
            </p>
            <p>
              I used stronger product imagery, clearer typography, intentional spacing, and more
              defined content sections to make information easier to scan while giving the product
              more visual presence.
            </p>
            <p className="cs-slider-hint">Drag each slider to compare before and after.</p>
          </div>
          <CompareSlider
            className="compare-home"
            before={spredoImg.beforeHome}
            after={spredoImg.afterHome}
            beforeAlt="Spredo homepage before the redesign"
            afterAlt="Spredo homepage after the redesign"
          />
          <p className="cs-copy cs-copy-product">
            On product pages, I reorganized information around the questions buyers would naturally
            have: what the product is, what makes it different, what’s inside it, and whether they
            can trust it.
          </p>
          <CompareSlider
            className="compare-product"
            before={spredoImg.beforeProduct}
            after={spredoImg.afterProduct}
            beforeAlt="Spredo product page before the redesign"
            afterAlt="Spredo product page after the redesign"
          />
          <div className="cs-copy cs-copy-nutrition">
            <p>
              On product pages, I reorganized information around the questions buyers would naturally
              have: what the product is, what makes it different, what’s inside it, and whether they
              can trust it.
            </p>
            <p>
              Nutrition information was presented clearly through supporting messaging and product
              packaging, while customer reviews added social proof once buyers had understood the
              product.
            </p>
            <p>
              The goal was to give customers enough information to feel confident without
              overwhelming the purchasing experience.
            </p>
          </div>
          <CompareSlider
            className="compare-nutrition"
            before={spredoImg.beforeNutrition}
            after={spredoImg.afterNutrition}
            beforeAlt="Spredo nutrition and reviews before the redesign"
            afterAlt="Spredo nutrition and reviews after the redesign"
          />
        </section>

        <section className="cs-block cs-growth">
          <p className="cs-kicker">UX DECISIONS & TRADEOFFS</p>
          <h2>Designing for growth, not just today</h2>
          <div className="cs-copy">
            <p>
              One of the client’s original ideas was to display available flavours as individual
              pills beneath each product description.
            </p>
            <p>I recommended replacing the pills with a dropdown selector.</p>
            <p>
              The solution kept the page clean and easy to navigate today while creating a pattern
              that could scale alongside Spredo’s product line.
            </p>
            <p>
              It was a small interaction, but reflected a larger principle I carried throughout the
              project: designing for where the business was going, not only where it was today.
            </p>
          </div>
          <img className="cs-pills" src={spredoImg.pills} alt="Product page using flavour pills" />
          <img
            className="cs-dropdown"
            src={spredoImg.dropdown}
            alt="Product page using a flavour dropdown"
          />
          <span className="cs-tradeoff-arrow" aria-hidden="true" />
          <p className="cs-caption cs-caption-pills">Pill selector</p>
          <p className="cs-caption cs-caption-dropdown">Dropdown selector</p>
        </section>

        <section className="cs-block cs-journey">
          <p className="cs-kicker">THE JOURNEY</p>
          <h2>From design to launch</h2>
          <div className="cs-copy">
            <p>
              I redesigned Spredo’s complete pre-checkout experience, including the homepage, shop,
              individual product pages, Our Story, B2B and wholesale pages, corporate gifting,
              contact, and cart.
            </p>
            <p>
              The final Figma file was prepared for developer handoff and implemented by Spredo’s
              Shopify developers almost exactly as designed.
            </p>
            <p>
              The redesigned experience is now live at{' '}
              <a href="https://spredo.ca" target="_blank" rel="noreferrer">
                Spredo.ca
              </a>
              .
            </p>
            <p>
              Beyond shipping the site, one of the most rewarding outcomes was seeing how
              differently the Spredo team viewed their own brand. Their excitement grew throughout
              the project as the new experience began to reflect the quality and ambition they
              already saw in their product.
            </p>
          </div>
          <img
            className="cs-figma"
            src={spredoImg.journey}
            alt="Spredo Figma file prepared for developer handoff"
          />
          <h2 className="cs-takeaway">What I took away</h2>
          <div className="cs-copy cs-copy-takeaway">
            <p>
              Because the Spredo team had limited experience working with UX design, communicating
              the work became an important part of the process. Spredo strengthened my ability to
              adapt how I communicate design decisions to different audiences.
            </p>
            <p>
              Rather than simply presenting solutions, I learned how to explain the reasoning behind
              them in a way that gave clients the confidence to make informed decisions alongside
              me.
            </p>
            <p>
              The project became a strong example of how thoughtful UX, clear communication, and
              stakeholder alignment can turn a fast-moving client engagement into a smooth path from
              problem to launch.
            </p>
          </div>
        </section>

        <footer className="cs-footer">
          <SiteFooter />
        </footer>
      </Artboard>
      <BackToTop />
    </>
  )
}
