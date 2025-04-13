import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin( ScrollTrigger );

const LineByLineText = ( { lines = [], triggerId } ) => {
  const containerRef = useRef();

  useEffect( () => {
    const q = gsap.utils.selector( containerRef );

    gsap.fromTo(
      q( ".line" ),
      {
        opacity: 1,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `#${triggerId}`,
          start: "top 50%",
          toggleActions: "play none none none",
          once: true,
          // markers: true // uncomment for debugging
        },
      }
    );
  }, [triggerId] );

  return (
    <div
      id={triggerId}
      ref={containerRef}
      className="text-center text-gray-300 font-light space-y-6"
    >
      {lines.map( ( line, index ) => (
        <p key={index} className="line overflow-hidden">
          <span className="inline-block">{line}</span>
        </p>
      ) )}
    </div>
  );
};

export default LineByLineText;
