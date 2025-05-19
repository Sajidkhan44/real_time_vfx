// ScrollContainer.jsx
"use client";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect, useRef } from 'react';

const ScrollContainer = ( { children } ) => {
  const scrollRef = useRef( null );

  useEffect( () => {
    const scroll = new LocomotiveScroll( {
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // ease-in-out speed
    } );

    return () => {
      scroll.destroy();
    };
  }, [] );

  return (
    <div  ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollContainer;
