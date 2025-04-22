/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect, useRef, useState } from "react";
import MainMenu from "./MainMenu";
import styles from "./StickyMenuWrapper.module.css";
import TriggerMenu from "./TriggerMenu";

const StickyMenuWrapper = () => {
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  //   @ts-ignore
  const animationRef = useRef<number>();
  const [currentScrollY, setCurrentScrollY] = useState(0); // Track scroll position for JSX

  const SCROLL_THRESHOLD = 500;

  useEffect(() => {
    const updateMenuPosition = () => {
      if (!menuRef.current) return;

      const currentScrollY = window.scrollY;
      setCurrentScrollY(currentScrollY); // Update state for rendering
      const scrollDirection =
        currentScrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentScrollY;

      // Only activate animations after 500px scroll
      if (currentScrollY > SCROLL_THRESHOLD) {
        if (scrollDirection === "down") {
          menuRef.current.style.transform = "translateY(-200%)";
        } else if (scrollDirection === "up") {
          menuRef.current.style.transform = "translateY(0)";
        }
      } else {
        // Always show when below 500px
        menuRef.current.style.transform = "translateY(0)";
      }
    };

    const handleScroll = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(updateMenuPosition);
    };

    // Initialize position
    updateMenuPosition();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Sticky Menu with direct transform control */}
      <div
        ref={menuRef}
        className={`${styles.stickyMenu} ${
          currentScrollY < SCROLL_THRESHOLD ? styles.hidden : styles.block
        }`}
      >
        <TriggerMenu />
        <MainMenu />
      </div>

      {/* Static Menu for layout */}
      <div>
        <TriggerMenu />
        <MainMenu />
      </div>
    </>
  );
};

export default StickyMenuWrapper;
