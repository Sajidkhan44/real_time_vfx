'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SectionWrapper from '../SectionWrapper';

gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo() {
  const wrapperRef = useRef(null);

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

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const chars = wrapper.querySelectorAll('.char');
    if (!chars.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
        markers: false, // enable if you want to debug scroll points
      },
    });

    tl.fromTo(
      chars,
      { opacity: 0.1, color: '#666' },
      { opacity: 1, color: '#fff', stagger: 0.02, duration: 2.5 }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="about" ref={wrapperRef} className="relative z-[999] font-sans">
      <SectionWrapper>
        <div className="space-y-12 text-[1.5rem] md:text-[2.2rem] leading-relaxed font-light text-gray-300 tracking-tight">
          {paras.map((line, lineKey) => (
            <div className="line" key={lineKey}>
              {line.text.split('').map((char, charKey) => (
                <span className="char" key={`${lineKey}-${charKey}`}>
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
