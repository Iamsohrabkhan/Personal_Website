import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import Image from "next/image";
import Ukiyo from "ukiyojs";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  useEffect(() => {
    const parra = new Ukiyo(".ukiyo", {
      scale: 1.2,
      
    });

    return () => {
      parra.destroy();
    };
  }, []);

  return (
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <Image
            ref={profile}
            className="ukiyo aspect-square h-auto w-full rounded-md object-cove object-scale-down md:aspect-auto"
            src="/assets/images/profile.png"
            width={600}
            height={800}
            alt="image of Sohrab Khan"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p
              ref={body}
              className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0"
            >
              I am a front-end web developer specializing in smooth and
              interactive website experiences using Next.js, ReactJS, GSAP,
              Three.js, Webflow, and WordPress.
              <br />
              <br />
              Originally from Pakistan, I have a strong passion for web
              development and focus on building clean, responsive, and visually
              engaging websites.
              <br />
              <br />
              When I’m not writing code or experimenting with animations, I
              enjoy discussing web development, sharing ideas, and staying
              updated with the ever-evolving digital world.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
