'use client'

import '@splinetool/viewer';
import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
      };
    }
  }
}

export default function SplineBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed w-screen h-screen bg-black inset-0 z-0 pointer-events-none">
      <spline-viewer
        className="w-full h-full pointer-events-auto"
        url="https://prod.spline.design/tnncsZa3g99aVmfi/scene.splinecode"
      />
    </div>
  );
}

