import { broomiesImg } from './broomiesAssets'
import { ARTBOARD_WIDTH, BackToTop, BROOMIES_HEIGHT, Artboard, SiteFooter, SiteNav } from './ui'
import './App.css'
import './Broomies.css'

export default function Broomies() {
  return (
    <>
      <Artboard height={BROOMIES_HEIGHT}>
        <section className="br-hero">
          <SiteNav current="case" />
          <p className="br-date">36 hours</p>
          <h1 className="br-title">Broomies</h1>
          <p className="br-lede">
            Say goodbye to all of your
            <br />
            roommate nightmares.
          </p>
          <div className="br-meta">
            <p>
              <strong>Hackathon:</strong>
              <br />
              Hack the North 2023
            </p>
            <p>
              <strong>Design Tools:</strong>
              <br />
              Figma
            </p>
            <p>
              <strong>The Team:</strong>
              <br />
              1 designer + 3 engineers
            </p>
          </div>
        </section>

        <section className="br-banner" aria-hidden="true">
          <img src={broomiesImg.banner} alt="" width={ARTBOARD_WIDTH} height={686} />
        </section>

        <section className="br-block br-overview">
          <p className="br-kicker">OVERVIEW</p>
          <h2>
            Facilitating fair and anonymous chore
            <br />
            assignments among roommates
          </h2>
          <p className="br-copy">
            Broomies is a mobile app created to ensure fair and anonymous distribution of chores among
            roommates. Users earn points for completing chores and can also track household expenses.
            These points are used to determine the monthly expense split among roommates, promoting
            timely chore completion.
          </p>
          <p className="br-kicker br-insp-kicker">INSPIRATION</p>
          <h3 className="br-insp-h">
            The idea came to mind when we started ranting to each other about living on campus
          </h3>
          <p className="br-insp-copy">
            To motivate users to complete chores, we introduced gamification in Broomies. By linking
            points earned for chores to monthly household expenses, we encourage friendly competition
            among roommates. This not only makes chores more engaging but also enhances the overall
            living experience.
          </p>
          <p className="br-kicker br-prob-kicker">PROBLEM</p>
          <h3 className="br-prob-h">
            It’s hard to make things fair for everyone without causing conflict...
          </h3>
          <p className="br-prob-copy">
            While living with roommates is fun and economical, organizing responsibilities and
            ensuring accountability can be difficult. Traditional methods like whiteboards or paper
            systems often result in messy spreadsheets and uneven chore distribution, leading to
            frustration. Shared expenses also complicate things, as purchases for the group can be
            forgotten, causing financial issues.
          </p>
        </section>

        <section className="br-block br-solution">
          <img
            className="br-phone br-phone-hero"
            src={broomiesImg.phoneHero}
            alt="Broomies home screen showing weekly chores and points"
          />
          <p className="br-kicker br-sol-kicker">THE SOLUTION</p>
          <h2 className="br-sol-h">Introducing, Broomies.</h2>
          <p className="br-sol-copy">
            By gamifying chores and linking points to household expenses, Broomies fosters friendly
            competition and enhances the overall living experience.
          </p>
          <img
            className="br-phone br-phone-sol"
            src={broomiesImg.phoneSolution}
            alt="Broomies leaderboard and household overview"
          />
          <p className="br-cap br-cap-1">Full transparency across the entire household.</p>
          <img
            className="br-phone br-phones-chores"
            src={broomiesImg.phonesChores}
            alt="Creating a chore and viewing assigned chores"
          />
          <p className="br-cap br-cap-2">
            Create chores anonymously that get randomly distributed each week.
          </p>
          <img
            className="br-phone br-phones-reviews"
            src={broomiesImg.phonesReviews}
            alt="Writing and reading anonymous roommate reviews"
          />
          <p className="br-cap br-cap-3">Write and view anonymous reviews to avoid confrontation.</p>
          <img
            className="br-phone br-phones-expenses"
            src={broomiesImg.phonesExpenses}
            alt="Recording a household expense and viewing the monthly split"
          />
          <p className="br-cap br-cap-4">
            Record household expenses where monthly sums get split based on chore completion.
          </p>
        </section>

        <section className="br-block br-process">
          <p className="br-kicker">THE DESIGN PROCESS</p>
          <h2>
            How I managed to divide up 36 hours of <span className="br-strike">torture</span> passion
            and hard work
          </h2>
          <p className="br-copy">
            Given the tight timeframe, I maximized efficiency by carefully planning each design step.
            Prioritizing clarity and functionality, I adopted strategies to boost productivity and
            ensure a smooth workflow. This preparation was essential for addressing the unique
            challenges of our niche problem space within the limited time.
          </p>
          <p className="br-kicker br-proto-kicker">PROTOTYPING</p>
          <h2 className="br-proto-h">Detailed Lo-Fi sketches for a smooth Hi-Fi transition</h2>
          <p className="br-copy br-proto-copy">
            Although spending time on low-fidelity designs isn’t always ideal, our niche problem space
            required clear functionality to refine our vision.
          </p>
          <img
            className="br-sketches"
            src={broomiesImg.sketches}
            alt="Low-fidelity paper sketches of the Broomies app"
          />
          <p className="br-kicker br-test-kicker">USER TESTING</p>
          <h2 className="br-test-h">User testing during a hackathon?!</h2>
          <p className="br-copy br-test-copy">
            Since we had a couple more hours to work with outside the conventional 24 hours, I local
            conducted usability with the people around us! This immediate feedback allowed for quick
            iterations and adjustments, ensuring our design met user needs effectively.
          </p>
          <p className="br-kicker br-future-kicker">FUTURE IMPLEMENTATIONS</p>
          <h3 className="br-future-h">If we weren’t capped by time...</h3>
          <p className="br-future-copy">
            Future steps would include formal usability testing with detailed user personas, and
            accessibility-focused UI enhancements to make the Broomies experience even better.
          </p>
          <p className="br-kicker br-lesson-kicker">LESSONS LEARNED</p>
          <h3 className="br-lesson-h">Hack The North felt like a super long dream</h3>
          <p className="br-lesson-copy">
            Looking back, I realized that although I had managed my time efficiently, I could’ve been
            faster with providing my engineers content to build if I didn’t spend so much time keeping
            my figma file clean. Having said that, I could’ve taken more time to flesh out all of the
            screens.
          </p>
        </section>

        <section className="br-block br-thanks">
          <p className="br-kicker">SPECIAL THANKS</p>
          <h2>Winning Best Use of CockroachDB Serverless and being guests on a podcast!</h2>
          <p className="br-copy">
            We won Best Use of CockroachDB Serverless and were invited to share our experience on
            CockroachDB’s podcast, Distributed Tea Time. We talked all about the hackathon process,
            from start to finish. I also have a segment on the design process where I go over our
            prototype in detail!
          </p>
          <img
            className="br-team"
            src={broomiesImg.team}
            alt="The Broomies team at Hack the North"
          />
        </section>

        <footer className="br-footer">
          <SiteFooter />
        </footer>
      </Artboard>
      <BackToTop />
    </>
  )
}
