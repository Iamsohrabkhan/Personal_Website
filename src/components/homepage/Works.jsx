import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://www.seventy.blue/"
            img="/assets/images/seventy-blue-1.png"
            alt="Seventy Blue Mockup"
            name="Seventy Blue"
            type="• Frontend Development • Gsap Animations"
            year="2025"
            tools="Webflow • GSAP"
          />
        </div>
        <div className=" col-span-1 md:col-span-7">
          <Projects
            link="https://www.haroldcano.com/"
            img="/assets/images/harold.png"
            alt="Harold Cano portfolio"
            name="Harold Cano Portfolio"
            type="• Frontend Development"
            year="2024"
            tools="Next Js • Tailwind Css • Motion.dev • GSAP"
          />
        </div>
        <div className=" col-span-1 md:col-span-5">
          <Projects
            link="https://main--appletvplusclone.netlify.app/"
            img="/assets/images/apple.png"
            alt="Apple TV Plus Website e mockup"
            name="Apple TV Plus Website clone"
            type="Frontend Development"
            year="2024"
            tools="React • SCSS • GSAP"
          />
        </div>
        <div className=" col-span-1 md:col-span-5">
          <Projects
            link="https://fiftybrookgreen.co.uk/"
            img="/assets/images/brookgreen.png"
            alt="Brook Green Website mockup"
            name="Brook Green"
            type="Frontend Development"
            year="2025"
            tools="HTML • SCSS • GSAP"
          />
        </div>
        <div className=" col-span-1 md:col-span-7">
          <Projects
            link="https://countyhallkingston.co.uk/"
            img="/assets/images/chk.png"
            alt="County Hall Kingdom Website mockup"
            name="County Hall Kingdom"
            type="Frontend Development"
            year="2025"
            tools="HTML • SCSS • GSAP"
          />
        </div>
        <div className=" col-span-1 md:col-span-5">
          <Projects
            link="https://www.goodrgoods.com/"
            img="/assets/images/goodrgoods.png"
            alt="Goodrgoods Website e mockup"
            name="Good rgoods"
            type="Frontend Development"
            year="2025"
            tools="Framer"
          />
        </div>
        <div className=" col-span-1 md:col-span-7 ">
          <Projects
            link="https://www.abord.app/"
            img="/assets/images/abord-1.png"
            alt="abord mockup"
            name="Abord Tickets"
            type="Frontend Development"
            year="2025"
            tools="Next Js • Tailwind Css • Motion.dev"
          />
        </div>

        {/* Project #2 */}
        {/* <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://mementostudio.netlify.app/"
            img={"/assets/images/memento-desktop.webp"}
            alt="memento landing page mockup"
            name="memento studio landing page"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={"/assets/images/acc-square.webp"}
            alt="real business accountant project mockup"
            name="real business accountants"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={"/assets/images/godaddy-desktop.webp"}
            alt="godaddy clone page mockup"
            name="GODADDY LANDING PAGE CLONE"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div> */}
        {/* <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={"/assets/images/sunnyside-desktop.webp"}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div> */}
      </div>
    </section>
  );
}
