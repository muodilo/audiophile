'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-[#d87d4a] animate-pulse z-50" />
  );
}
