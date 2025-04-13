"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionWrapper from "../SectionWrapper";

gsap.registerPlugin( ScrollTrigger );

export default function SectionThree() {
  const wrapperRef = useRef( null );

  const paras = [
    {
      text: "Founded in September 2023, REAL TIME VFX is a Hyderabad-based studio committed to delivering world-class animation and visual effects services.",
    },
    {
      text: "At REAL TIME VFX, we see VFX as more than just a task—it’s an art form that demands passion, precision, and creativity. Unlike conventional studios, we approach every project as a unique opportunity to merge technical expertise with artistic vision. Our team of skilled artists and innovators ensures that every frame is crafted with dedication, bringing stories to life with unparalleled depth and realism.",
    },
    {
      text: "From concept to completion, we strive for excellence in every detail. Our mission is to enhance narratives, elevate visual storytelling, and transform ideas into breathtaking visuals that captivate audiences.",
    },
    {
      text: "Whether you need stunning cinematic visuals, realistic digital environments, or high-end CGI effects, REAL TIME VFX is your trusted partner in bringing imagination to life.",
    },
    {
      text: "Experience the future of visual effects—today.",
    },
  ];

  useEffect( () => {
    if ( wrapperRef.current ) {
      requestAnimationFrame( () => {
        const chars = wrapperRef.current.querySelectorAll( ".char" );

        const tl = gsap.timeline( {
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "-100px",
            end: "70%",
            scrub: true,
            scroller: "[data-scroll-container]",
          },
        } );

        tl.fromTo(
          chars,
          { color: "#000" },
          { color: "#fff", stagger: 0.03, duration: 2.5 }
        );

        tl.fromTo(
          ".red-ball",
          {
            top: "-50px",
            opacity: 0,
          },
          {
            top: "20%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<"
        );

        tl.to(
          ".red-ball",
          {
            scale: 70,
            boxShadow: "0 0 100px 80px rgba(255, 0, 0, 0.2)",
            duration: 2.5,
            ease: "power2.out",
          },
          "<80%"
        );
      } );
    }
  }, [] );

  return (
    <div
      ref={wrapperRef}
      className=" relative z-[999] bg-white about_us overflow-hidden font-sans"
    >
      <div className="absolute red-ball top-[-50px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] rounded-full bg-black border-4 border-white z-0"></div>

      <SectionWrapper>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8 text-justify">
            <h1 className="text-[2.5rem] font-semibold leading-snug text-gray-700 tracking-tight">
              FOUNDATION
            </h1>
            <div className="text-[1.2rem] md:text-[1.5rem] font-light space-y-6 leading-relaxed tracking-tight text-gray-600">
              {paras.map( ( line, lineKey ) => (
                <div className="line" key={lineKey}>
                  {line.text.split( "" ).map( ( char, charKey ) => (
                    <span className="char" key={`${lineKey}-${charKey}`}>
                      {char}
                    </span>
                  ) )}
                </div>
              ) )}
            </div>
          </div>

          <div className="flex items-center justify-center relative z-10">
            <img src="/RTV.png" alt="REAL TIME VFX Logo" className="max-w-full h-auto" />
          </div>
        </div>
     </SectionWrapper>
    </div>
  );
}
