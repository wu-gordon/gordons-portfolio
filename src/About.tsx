import { aboutImg } from './aboutAssets'
import { ABOUT_HEIGHT, Artboard, Layer, SiteFooter, SiteNav } from './ui'
import './App.css'
import './About.css'

export default function About() {
  return (
    <Artboard height={ABOUT_HEIGHT}>
      <section className="about-hero">
        <SiteNav current="about" />

        <div className="hello-line">
          <span className="drop-cap hello-h">H</span>
          <span className="hello-rest">ELLO :)) MY NAME IS</span>
        </div>

        <div className="gordon-name">
          <p>GORDON WU.</p>
          <img className="gordon-strike" src={aboutImg.strikeGordon} alt="" />
        </div>

        <p className="nickname nickname-gordog">gordog</p>
        <p className="nickname nickname-gmoney">gmoney</p>
        <p className="nickname nickname-gwu">gwu</p>

        <div className="selfie" aria-hidden="true">
          <Layer src={aboutImg.selfieBody} left={33.89} top={209.64} width={97.409} height={229.455} />
          <Layer src={aboutImg.selfieHead} left={0} top={145.14} width={125} height={125} />
          <Layer src={aboutImg.selfieEyeLeft} left={24.11} top={203.2} width={9.835} height={9.835} />
          <Layer src={aboutImg.selfieEyeRight} left={66.94} top={192.09} width={10.152} height={10.152} />
          <div className="selfie-mouth">
            <img src={aboutImg.selfieMouth} alt="" width={18.078} height={12.894} />
          </div>
          <div className="masked-photo portrait-photo">
            <img src={aboutImg.photoPortrait} alt="Gordon holding a camera" />
          </div>
          <Layer src={aboutImg.selfieHand1} left={47.11} top={225.62} width={69.818} height={80.047} />
          <Layer src={aboutImg.selfieHand2} left={47.03} top={272.2} width={17.58} height={31.085} />
        </div>

        <div className="presenting" aria-hidden="true">
          <Layer src={aboutImg.presentBody} left={66.41} top={64.57} width={145.221} height={255.614} />
          <Layer src={aboutImg.presentHead} left={106.55} top={17.05} width={116.381} height={116.381} />
          <Layer src={aboutImg.presentMouth} left={144.23} top={97.14} width={21.746} height={4.587} />
          <Layer src={aboutImg.presentEyeLeft} left={129.43} top={67.07} width={8.5} height={8.827} />
          <Layer src={aboutImg.presentEyeRight} left={171.28} top={69.03} width={9.48} height={9.154} />
          <div className="present-pointer">
            <img src={aboutImg.presentPointer} alt="" width={76.748} height={83.629} />
          </div>
          <Layer src={aboutImg.presentBook} left={104.75} top={141.6} width={105.592} height={109.188} />
          <Layer src={aboutImg.presentArm1} left={148.65} top={147.49} width={53.361} height={83.723} />
          <Layer src={aboutImg.presentArm2} left={174.87} top={167.1} width={25.378} height={39.393} />
        </div>
      </section>

      <section className="about-lore">
        <div className="lore-title">
          <span className="drop-cap lore-t">T</span>
          <span className="lore-rest">
            HE <span className="muted">LORE</span>
          </span>
        </div>
        <div className="lore-copy">
          <p>
            Initially pursuing pharmaceutical sciences, I discovered a passion for UX design after
            taking a Human-Computer Interaction course later in my degree. This newfound interest
            led me to pivot from my original path and immerse myself in the world of technology and
            design.
          </p>
          <p>
            Joining my local tech club at UBC, nwPlus, allowed me to dive even deeper, where I
            designed hackathon websites, internal tools, and lead workshops for our participants.
            These experiences have reinforced my commitment to pursuing a career in UX design.
          </p>
        </div>
        <div className="masked-photo hackathon-photo">
          <img src={aboutImg.photoHackathon} alt="Audience at a hackathon presentation" />
        </div>
        <div className="smiski-work" aria-hidden="true">
          <Layer src={aboutImg.workBody} left={85.37} top={121} width={83.32} height={180} />
          <Layer src={aboutImg.workLaptop1} left={105.78} top={192.76} width={52.62} height={13.248} />
          <Layer src={aboutImg.workLaptop2} left={108.96} top={196.63} width={50.163} height={12.504} />
          <Layer src={aboutImg.workLaptopBody} left={85.14} top={113.72} width={84.307} height={87.378} />
          <Layer src={aboutImg.workLaptopScreen} left={0} top={131.88} width={115.509} height={77.254} />
          <Layer src={aboutImg.workHead} left={54.93} top={0} width={133.074} height={131.287} />
          <div className="work-eye work-eye-left">
            <img src={aboutImg.workEyeLeft} alt="" width={10.211} height={10.976} />
          </div>
          <div className="work-eye work-eye-right">
            <img src={aboutImg.workEyeRight} alt="" width={5.869} height={9.404} />
          </div>
          <Layer src={aboutImg.workMouth} left={94.82} top={118.49} width={12.95} height={0.738} />
        </div>
      </section>

      <section className="about-cv">
        <div className="cv-col cv-experience">
          <h2>RELEVANT:EXPERIENCE</h2>
          <div className="cv-item">
            <p>
              <strong>UX Design Intern</strong> - Ontario Teachers’ Pension Plan
            </p>
            <p>May 2025 - Aug 2026</p>
          </div>
          <div className="cv-item">
            <p>
              <strong>UI/UX Designer</strong> - The Creative Solution
            </p>
            <p>Oct 2023 - June 2024</p>
          </div>
          <div className="cv-item">
            <p>
              <strong>UI/UX Designer</strong> - nwPlus UBC
            </p>
            <p>May 2022 - May 2024</p>
          </div>
        </div>
        <div className="cv-col cv-awards">
          <h2>MY:AWARDS</h2>
          <div className="award-row">
            <p className="award-year">2024</p>
            <div>
              <p>
                <strong>Best AI Hack</strong>, Stormhacks
              </p>
              <p>
                <span className="award-medium">Top 3 Winning Projects</span>, Stormhacks
              </p>
            </div>
          </div>
          <div className="award-row">
            <p className="award-year">2023</p>
            <div>
              <p>
                <strong>Best Use of Cockroach DB Serverless</strong>, Hack the North
              </p>
              <p>
                <strong>Most Strategic Web-Based Solution</strong>, UXL Designathon
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-beyond">
        <div className="beyond-title">
          <span className="drop-cap beyond-b">B</span>
          <span className="beyond-rest">
            EYOND
            <br />
            <span className="muted">DESIGNING...</span>
          </span>
        </div>
        <div className="life-photo life-coffee">
          <img src={aboutImg.photoCoffee} alt="Gordon sitting on a chair with a coffee" />
        </div>
        <div className="life-photo life-festival">
          <img src={aboutImg.photoFestival} alt="Concert stage at a music festival" />
        </div>
        <img className="smiski-nap" src={aboutImg.smiskiNap} alt="" />
        <img className="smiski-sweater" src={aboutImg.smiskiSweater} alt="" />
        <p className="life-caption life-caption-tl">I’m spending too much on coffee</p>
        <p className="life-caption life-caption-tr">
          I’m at music festivals banging my head to robot sounds
        </p>
        <div className="life-photo life-friends">
          <img src={aboutImg.photoFriends} alt="Gordon with friends outdoors" />
        </div>
        <div className="life-photo life-vending">
          <img src={aboutImg.photoVending} alt="Gordon vending at a trading card show" />
        </div>
        <img className="smiski-approve" src={aboutImg.smiskiApprove} alt="" />
        <p className="life-caption life-caption-bl">I’m touching grass with friends</p>
        <p className="life-caption life-caption-br">I’m vending at trading card shows</p>
      </section>

      <footer className="about-footer">
        <SiteFooter />
      </footer>
    </Artboard>
  )
}
