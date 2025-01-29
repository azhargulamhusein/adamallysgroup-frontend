import { useState, useEffect, useRef } from 'react';

const CounterText = ({ targetValue, duration, hasPlus }) => {
  const [count, setCount] = useState(0);

  const [inView, setInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;

    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newCount = Math.min(Math.floor((progress / duration) * targetValue), targetValue);

      setCount(newCount);

      if (newCount < targetValue) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);
  }, [inView, targetValue, duration]);

  return (
    <div ref={counterRef} className="text-[36px] sm:text-[50px] leading-10 font_franklin">
      {`${count?.toLocaleString()} ${hasPlus ? "+" : ""}`}
    </div>
  );
};

export default CounterText;
