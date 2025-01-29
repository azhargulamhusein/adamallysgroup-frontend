import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Check if window is defined (to prevent SSR issues)
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      // Initial scroll position
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
