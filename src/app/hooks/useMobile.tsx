'use client';
import { useState, useEffect } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1080);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;