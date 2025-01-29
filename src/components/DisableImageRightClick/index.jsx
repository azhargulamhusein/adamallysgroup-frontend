'use client'
import { useEffect } from 'react';

const DisableImageRightClick = () => {
  useEffect(() => {
    const preventRightClick = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    window.addEventListener('contextmenu', preventRightClick);
    return () => {
      window.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);

  return null;
};

export default DisableImageRightClick;
