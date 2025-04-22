import { useEffect, useRef, useState } from "react";

const ScrollPositionTracker = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const prevScrollPosition = useRef(0); // Stores the previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      // Update previous scroll position before setting the new one
      prevScrollPosition.current = scrollPosition;
      setScrollPosition(window.scrollY);

      // Compare current and previous scroll positions
      if (window.scrollY > prevScrollPosition.current) {
        console.log("Scrolling DOWN");
      } else if (window.scrollY < prevScrollPosition.current) {
        console.log("Scrolling UP");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]); // Dependency ensures latest `scrollPosition` is used

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        zIndex: "999999",
      }}
    >
      Scrolled: <strong>{scrollPosition}px</strong> from top
      <div>
        Direction:{" "}
        {scrollPosition > prevScrollPosition.current ? "↓ Down" : "↑ Up"}
      </div>
    </div>
  );
};

export default ScrollPositionTracker;
