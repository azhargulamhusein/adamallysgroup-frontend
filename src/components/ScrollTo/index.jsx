'use client'
const ScrollTo = ({ targetId, offset = 0, children }) => {
  const handleScrollToTarget = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleScrollToTarget}>
      {children}
    </a>
  );
};

export default ScrollTo;
