import { gsap } from "gsap";
import { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: "power3.inOut",
    })
      .fromTo(
        img.current,
        { scale: 2, duration: 3.2, ease: "power4.inOut" },
        { scale: 1.1, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, { opacity: 0, duration: 1, ease: "out" }, "-=2");
  }, []);

  return (
    <section
      id="hero"
      className="hero relative flex w-full h-svh select-none items-center justify-center py-4"
      aria-label="hero"
    >
      <div className="z-10 flex flex-col   w-full items-center text-title 2xl:text-[10vw] space-y-1 xl:space-y-2 2xl:space-y-4 font-bold  uppercase text-accent-300 ">
        <div className="title  ">
          {/* Learn more about useRef */}
          <h1
            ref={(el) => (titles.current[0] = el)}
            className="translate-y-96 overflow-visible text-3xl md:text-4xl lg:text-7xl "
          >
            Hey, I&apos;m Sohrab Khan
          </h1>
        </div>
        <div className=" title">
          <h1
            ref={(el) => (titles.current[1] = el)}
            className="translate-y-96 md:font-outline-4 md:text-transparent  overflow-visible text-2xl md:text-4xl lg:text-7xl "
          >
            I build cool websites
          </h1>
        </div>
        <div className=" title ">
          <h1
            ref={(el) => (titles.current[2] = el)}
            className="translate-y-96 text-xl md:text-4xl lg:text-7xl "
          >
            Like this one.
          </h1>
        </div>
      </div>
      <div
        ref={imgContainer}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden rounded-md"
      >
        <div className="relative w-56 h-52 md:w-64 md:h-56 lg:w-[34rem] lg:h-[28rem] overflow-clip">
          <Image
            ref={img}
            className=" rounded-md opacity-50 scale-[2]"
            // className=" scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto"
            src={"/assets/images/heroimg.webp"}
            alt="Sohrab Khan"
            fill
          />
        </div>
      </div>
      <div
        ref={scroll}
        className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8"
      >
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
}
