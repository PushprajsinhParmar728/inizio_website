'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayContent, setDisplayContent] = useState(children);
  const [isChanging, setIsChanging]         = useState(false);

  useEffect(() => {
    setIsChanging(true);

    const timer = setTimeout(() => {
      setDisplayContent(children);
      setIsChanging(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
      className={isChanging
        ? 'opacity-0 scale-[0.99] pointer-events-none'
        : 'opacity-100 scale-100'}
    >
      {displayContent}
    </div>
  );
}