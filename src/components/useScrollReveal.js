"use client"
import { useEffect, useRef, useState } from "react";

export const useScrollReveal = () => {
  const ref = useRef();
  const [visible, setVisible] = useState( false );

  useEffect( () => {
    const observer = new IntersectionObserver(
      ( [entry] ) => setVisible( entry.isIntersecting ),
      { threshold: 0.1 }
    );
    if ( ref.current ) observer.observe( ref.current );
    return () => observer.disconnect();
  }, [] );

  return [ref, visible];
};
