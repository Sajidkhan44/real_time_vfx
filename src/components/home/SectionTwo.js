"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionWrapper from "../SectionWrapper";

gsap.registerPlugin( ScrollTrigger );

export default function SectionTwo() {
  const wrapperRef = useRef( null );

  const paras = [
    {
      text: "At REAL TIME VFX, we transform ideas into breathtaking visuals through cutting-edge technology and artistic mastery. Our passion for storytelling drives us to create immersive experiences that captivate audiences across films, gaming, commercials, and digital media.",
    },
    {
      text: "With an unwavering commitment to quality and innovation, we bring your vision to life—seamlessly blending creativity with precision to craft extraordinary visual effects.",
    },
    {
      text: "Let’s push the boundaries of possibility—together.",
    },
  ];

  useEffect( () => {
    if ( wrapperRef.current ) {
      requestAnimationFrame( () => {
        const chars = wrapperRef.current.querySelectorAll( ".char" );

        gsap.timeline( {
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "-200px",
            end: "70%",
            scrub: true,
            scroller: "[data-scroll-container]", // Required for locomotive scroll
          },
        } ).fromTo(
          chars,
          { opacity: 0.1, color: "#666" },
          { opacity: 1, color: "#fff", stagger: 0.02, duration: 2.5 }
        );
      } );
    }
  }, [] );

  return (
    <div ref={wrapperRef} className=" relative z-[999] font-sans">
      <SectionWrapper>
        <div className=" space-y-12 text-[1.5rem] md:text-[2.2rem] leading-relaxed font-light text-gray-300 tracking-tight">
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
      </SectionWrapper>
    </div>
  );
}
