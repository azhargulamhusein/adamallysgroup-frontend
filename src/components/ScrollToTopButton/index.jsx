'use client'
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-[9999] fixed bottom-8 right-3 bg-theme-main text-white p-4 rounded-full shadow-lg focus:outline-none transition duration-300 ease-in-out"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
