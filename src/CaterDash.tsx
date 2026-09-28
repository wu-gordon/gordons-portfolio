import { caterdashImg } from './caterdashAssets'
import { ARTBOARD_WIDTH, BackToTop, CATERDASH_HEIGHT, Artboard, SiteFooter, SiteNav } from './ui'
import './App.css'
import './CaterDash.css'

function Bullet({ className, children }: { className: string; children: string }) {
  return (
    <p className={`cd-bullet ${className}`}>
      <span className="cd-dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export default function CaterDash() {
  return (
    <>
      <Artboard height={CATERDASH_HEIGHT}>
        <section className="cd-hero">
          <SiteNav current="case" />
          <p className="cd-date">January 2024 (2 weeks)</p>
          <h1 className="cd-title">CaterDash</h1>
          <p className="cd-lede">
            Reimagining the ordering process for
            <br />
            Canada’s largest catering marketplace.
          </p>
          <div className="cd-meta">
            <p>
              <strong>My Role:</strong>
              <br />
              UX Design, Web Design,
              <br />
              Client Contact
            </p>
            <p>
              <strong>Design Tools:</strong>
              <br />
              Figma
            </p>
            <p>
              <strong>The Team:</strong>
              <br />
              1 designer
            </p>
          </div>
        </section>

        <section className="cd-banner" aria-hidden="true">
          <img src={caterdashImg.banner} alt="" width={ARTBOARD_WIDTH} height={686} />
        </section>

        <section className="cd-block cd-overview">
          <p className="cd-kicker">OVERVIEW</p>
          <h2>The origins of NNECT and how it became CaterDash</h2>
          <p className="cd-copy">
            NNECT began as a solution for students struggling with high delivery fees and local
            restaurants facing tight margins. By introducing “social ordering,” they helped group
            orders save costs and supported local businesses in optimizing resources. However, to
            expand beyond their initial audience of university students and compete with established
            catering companies, NNECT rebranded as CaterDash. This shift involved a new focus on
            being a faster, more efficient, and user-friendly catering service, leading to a complete
            overhaul of their ordering system and brand identity.
          </p>
          <p className="cd-kicker cd-kicker-2">PROBLEM</p>
          <h2 className="cd-h2-2">Placing catering orders became too tedious and slow...</h2>
          <p className="cd-copy cd-copy-2">
            NNECT’s quote-based ordering system required users to fill out a form and wait for
            manual approval, causing delays and frustration. This process was slow, inefficient, and
            prone to errors, making it unsuitable for quick, seamless ordering.
          </p>
        </section>

        <section className="cd-block cd-request">
          <p className="cd-kicker cd-kicker-center">THE CLIENT’S REQUEST</p>
          <p className="cd-quote">
            “We want to completely rebrand from NNECT with a fresh new website. Our goal is to offer
            a catering service that is fast, user-friendly, and easy to navigate.”
          </p>
        </section>

        <section className="cd-block cd-nnect">
          <p className="cd-kicker">PREVIOUS WEBSITE</p>
          <h2>Pain points from the current NNECT experience</h2>
          <img
            className="cd-shot cd-shot-1"
            src={caterdashImg.nnect1}
            alt="NNECT homepage with an unclear delivery-focused slogan"
          />
          <div className="cd-connector cd-connector-1" aria-hidden="true">
            <span className="cd-connector-dot" />
            <span className="cd-connector-line" />
          </div>
          <div className="cd-callout cd-callout-1">
            <p className="cd-callout-title">Unclear header/slogan</p>
            <p>
              NNECT brands itself as a food delivery app, but its main feature is food catering for
              events.
            </p>
          </div>
          <img
            className="cd-shot cd-shot-2"
            src={caterdashImg.nnect2}
            alt="NNECT quote-based catering order form"
          />
          <div className="cd-connector cd-connector-2" aria-hidden="true">
            <span className="cd-connector-dot" />
            <span className="cd-connector-line" />
          </div>
          <div className="cd-callout cd-callout-2">
            <p className="cd-callout-title">Quote-based order form</p>
            <p>
              When trying to place an order, users are directed to a form that needs to be confirmed
              upon completion, causing delays.
            </p>
          </div>
          <img
            className="cd-shot cd-shot-3"
            src={caterdashImg.nnect3}
            alt="NNECT website mixing catering, meal plans, and careers"
          />
          <div className="cd-connector cd-connector-3" aria-hidden="true">
            <span className="cd-connector-dot" />
            <span className="cd-connector-line" />
          </div>
          <div className="cd-callout cd-callout-3">
            <p className="cd-callout-title">Misleading offerings &amp; bad UX</p>
            <p>
              As an application that focuses on food catering, NNECT also offers a meal plan option
              for users under the “Food” tab on the navigation bar, and an entire section dedicated
              to careers.
            </p>
          </div>
        </section>

        <section className="cd-block cd-compete">
          <p className="cd-kicker">COMPETITIVE ANALYSIS</p>
          <h2>The notable competitors in this problem space</h2>
          <p className="cd-copy">
            NNECT’s quote-based ordering system required users to fill out a form and wait for
            manual approval, causing delays and frustration. This process was slow, inefficient, and
            prone to errors, making it unsuitable for quick, seamless ordering.
          </p>
          <img className="cd-logo cd-logo-ez" src={caterdashImg.logoEzcater} alt="" />
          <img className="cd-logo cd-logo-foodee" src={caterdashImg.logoFoodee} alt="" />
          <img className="cd-logo cd-logo-hh" src={caterdashImg.logoHungerhub} alt="" />
          <p className="cd-brand cd-brand-ez">ezcater</p>
          <p className="cd-brand cd-brand-foodee">foodee</p>
          <p className="cd-brand cd-brand-hh">hungerhub</p>
          <p className="cd-row-label cd-row-product">Product</p>
          <p className="cd-row-label cd-row-strengths">Strengths</p>
          <p className="cd-row-label cd-row-weak">Weaknesses</p>
          <p className="cd-product cd-product-ez">
            corporate
            <br />
            catering
          </p>
          <p className="cd-product cd-product-foodee">
            corporate
            <br />
            meal delivery
          </p>
          <p className="cd-product cd-product-hh">
            corporate catering,
            <br />
            meal delivery
          </p>
          <span className="cd-rule cd-rule-1" />
          <span className="cd-rule cd-rule-2" />
          <Bullet className="cd-b-ez-1">
            Integrated ordering process with good UX and a user-friendly UI
          </Bullet>
          <Bullet className="cd-b-foodee-1">Intuitive UX and UI with clear headers</Bullet>
          <Bullet className="cd-b-foodee-2">
            Integrated ordering process with viewable cuisines on home page
          </Bullet>
          <Bullet className="cd-b-hh-1">Good UX with simple and modern UI</Bullet>
          <Bullet className="cd-b-hh-2">Clear headers, descriptions, and offerings</Bullet>
          <Bullet className="cd-b-ez-w1">Poor accessibility on main website</Bullet>
          <Bullet className="cd-b-ez-w2">Cuisines are not viewable on the home page</Bullet>
          <Bullet className="cd-b-foodee-w1">No legend for dietary restriction tags</Bullet>
          <Bullet className="cd-b-foodee-w2">Cuisine locations are poorly displayed</Bullet>
          <Bullet className="cd-b-hh-w1">Quote-based ordering system</Bullet>
        </section>

        <section className="cd-block cd-solution">
          <p className="cd-kicker">THE SOLUTION</p>
          <h2>Introducing, CaterDash.</h2>
          <p className="cd-copy">
            This redesign addresses key pain points by streamlining the entire ordering process,
            ensuring a smoother and more intuitive experience. I focused on three core improvements:
            integrating the ordering flow directly into the website, enhancing visual clarity with
            bold contrast, and optimizing the user experience for ease and efficiency.
          </p>
          <img
            className="cd-solution-img"
            src={caterdashImg.solution}
            alt="CaterDash homepage, cuisine browsing, and checkout on desktop and mobile"
          />
        </section>

        <section className="cd-block cd-flow">
          <p className="cd-kicker">USER FLOW</p>
          <h2>Mapping out details of the integrated ordering process</h2>
          <p className="cd-copy">
            The user flow map highlights the key actions users are able to accomplish through the
            website, and helped me decide which key screens to create. This way, I was able to work
            on prototyping simultaneously, while staying on the same page.
          </p>
          <img
            className="cd-flow-img"
            src={caterdashImg.flow}
            alt="User flow map of the CaterDash ordering process"
          />
        </section>

        <section className="cd-block cd-type">
          <p className="cd-kicker">TYPOGRAPHY &amp; COLORS</p>
          <h2>Giving CaterDash a new bold and modern look</h2>
          <p className="cd-copy">
            The client wanted a red primary color with a light background color to create a vibrant,
            high-contrast palette that conveyed modernity, simplicity, and trustworthiness. I
            selected a clean, modern font to match this vision, ensuring a fresh and approachable
            design.
          </p>
          <img
            className="cd-type-img"
            src={caterdashImg.typeBoard}
            alt="Poppins type scale and CaterDash color tokens"
          />
        </section>

        <section className="cd-block cd-lofi">
          <p className="cd-kicker">PROTOTYPING</p>
          <h2>Going straight to mid-fidelity prototypes</h2>
          <p className="cd-copy">
            Under tight time constraints and with detailed user flows already mapped out, I decided
            to bypass low-fidelity sketches and move directly into creating mid-fidelity prototypes.
            With a clear vision and a strong understanding of the client’s needs, I felt confident
            that this was the right approach.
          </p>
          <img
            className="cd-lofi-img"
            src={caterdashImg.lofi}
            alt="Mid-fidelity CaterDash prototype screens"
          />
        </section>

        <section className="cd-block cd-decisions">
          <p className="cd-kicker">KEY DESIGN DECISIONS</p>
          <h2>Collaborating with the client on what changes to make</h2>
          <p className="cd-copy">
            Client discussions were my primary source of feedback throughout the design iteration
            process. While I offered my expertise on design principles and provided input on how some
            of their suggestions might lead to a poor user experience, the client remained firm in
            their vision. Consequently, I made several adjustments from my initial design to align
            with the client’s specific requests and requirements.
          </p>
          <img
            src={caterdashImg.decisions}
            alt="Landing page and item menu iterations made with the client, showing original designs and requested changes"
          />
        </section>

        <section className="cd-block cd-takeaways">
          <p className="cd-kicker">KEY TAKEAWAYS</p>
          <h2>Sometimes, it’s important to cater exactly to the client</h2>
          <p className="cd-copy">
            Throughout the design process for CaterDash, the client had a clear vision, leaving little
            room for flexibility or alternative solutions. While my role as a designer is to provide
            insights and develop the most intuitive user experience possible, I had to closely adhere
            to the client’s preferences and proceed with their requests. The changes implemented were
            the result of several focused discussions, aligning the design with their expectations
            while maintaining a balance between usability and their desired outcomes.
          </p>
        </section>

        <footer className="cd-footer">
          <SiteFooter />
        </footer>
      </Artboard>
      <BackToTop />
    </>
  )
}
