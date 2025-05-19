"use client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';
import Navbar from './Navbar';
import { useEffect, useRef } from 'react';
gsap.registerPlugin( ScrollTrigger );

export default function RealtimeVFX( { children } ) {
  const scrollRef = useRef( null );

// useEffect(() => {
//   if (typeof window === 'undefined' || !scrollRef.current) return;

//   import('locomotive-scroll').then((LocomotiveScrollModule) => {
//     const LocomotiveScroll = LocomotiveScrollModule.default;

//     const scrollEl = scrollRef.current;

//     const locoScroll = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       lerp: 0.05,
//     });

//     ScrollTrigger.scrollerProxy(scrollEl, {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: scrollEl.style.transform ? 'transform' : 'fixed',
//     });

//     locoScroll.on('scroll', ScrollTrigger.update);

//     ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
//     ScrollTrigger.refresh();

//     return () => {
//       locoScroll.destroy();
//       ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
//     };
//   });
// }, []);

  return (
    <div  ref={scrollRef}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
