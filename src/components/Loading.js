'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Loading() {
  const pathname = usePathname();
  const [showInitial, setShowInitial] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  // Initial load only (first visit / hard refresh)
  useEffect(() => {
    // Curtain opens after 800ms
    const slideTimer = setTimeout(() => setSlideOut(true), 800);
    // Hide completely after 1.8s
    const hideTimer = setTimeout(() => setShowInitial(false), 1800);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
    };
  }, []); // empty dependency = runs only once on mount

  // Page change transition (every route change)
  useEffect(() => {
    if (!showInitial) {
      setShowTransition(true);
      const timer = setTimeout(() => setShowTransition(false), 600);
      return () => clearTimeout(timer);
    }
  }, [pathname, showInitial]);

  // Initial curtain loader
  if (showInitial) {
    return (
      <>
        {/* Left curtain */}
        <div
          className={`fixed top-0 left-0 w-1/2 h-full bg-white z-[9999] transition-transform duration-1000 ease-in-out ${
            slideOut ? 'translate-x-[-100%]' : 'translate-x-0'
          }`}
        />

        {/* Right curtain */}
        <div
          className={`fixed top-0 right-0 w-1/2 h-full bg-white z-[9999] transition-transform duration-1000 ease-in-out ${
            slideOut ? 'translate-x-[100%]' : 'translate-x-0'
          }`}
        />

        {/* Single green circle */}
        <div
          className={`fixed inset-0 z-[10000] flex items-center justify-center transition-opacity duration-500 ${
            slideOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-14 h-14 rounded-full border-4 border-[#009271] border-t-transparent animate-spin" />
        </div>
      </>
    );
  }

  // Page transition overlay (fade + scale)
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9980] bg-white transition-opacity duration-600 ease-in-out ${
        showTransition ? 'opacity-30' : 'opacity-0'
      }`}
    />
  );
}