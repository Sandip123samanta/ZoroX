import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisSmoothScroll = ({ children }) => {
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const handleScroll = (time) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(handleScroll);
    };

    requestAnimationFrame(handleScroll);
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <div>{children}</div>;
};

export default LenisSmoothScroll;
