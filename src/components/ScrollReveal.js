'use client';

import { useEffect, useRef } from 'react';

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * Uses the same .reveal / .reveal.on classes defined in globals.css.
 *
 * Props:
 *   delay  — optional CSS transition-delay in ms (default 0)
 *   as     — wrapper element tag (default 'div')
 */
export default function ScrollReveal({ children, delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply delay if provided
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('on');
          observer.unobserve(el); // only animate once
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className="reveal">
      {children}
    </Tag>
  );
}