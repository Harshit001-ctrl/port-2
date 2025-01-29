import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,  // Enable smooth scrolling
      mouseMultiplier: 1.2, // Adjust the mouse scroll speed
      touchMultiplier: 2.0, // Adjust touch scroll speed on mobile
      gestureMultiplier: 1.0, // Adjust touch gesture multiplier
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
  }, []);
  
  
 
  }

