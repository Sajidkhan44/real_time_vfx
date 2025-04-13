// components/AnimatedText.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

const AnimatedText = ( { text, triggerId } ) => {
  const wrapperRef = useRef();

  useEffect( () => {
    const words = wrapperRef.current.querySelectorAll( ".word" );

    gsap.fromTo(
      words,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `#${triggerId}`,
          start: "-50px 90%",
          once: true,
          // markers: true // uncomment for debugging
        },
      }
    );
  }, [triggerId] );

  return (
    <p
      id={triggerId}
      ref={wrapperRef}
      className="flex flex-wrap  gap-2"
    >
      {text.split( " " ).map( ( word, index ) => (
        <span key={index} className="overflow-hidden inline-block">
          <span className="word inline-block">{word}</span>
        </span>
      ) )}
    </p>
  );
};

export default AnimatedText;
