 'use client'

import '@splinetool/viewer';
import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url: string;
      };
    }
  }
}

export default function SplineBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500); // Delays loading for smoother experience
    return () => clearTimeout(timeout);
  }, []);

  if (!isMounted) {
    return null; // Prevents rendering issues before mount
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-[-1] overflow-hidden">
      <spline-viewer
        className="w-full h-full"
        url="https://prod.spline.design/tnncsZa3g99aVmfi/scene.splinecode"
        render-interval="auto"
        device-pixel-ratio="1"
        // shadows="false"
      />
    </div>
  );
}