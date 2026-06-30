"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor follow effect
  const cursorX = useSpring(mouseX, { damping: 30, stiffness: 300, mass: 0.6 });
  const cursorY = useSpring(mouseY, { damping: 30, stiffness: 300, mass: 0.6 });

  useEffect(() => {
    // Disable custom cursor on mobile touch screens
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Check if hovering over interactive elements to scale up the cursor
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest('[role="button"]') ||
        target.classList.contains("cursor-pointer");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central dot */}
      <motion.div
        className="cursor-dot hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.3 : 1,
          backgroundColor: isHovered ? "#362348" : "#402955",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
      {/* Outer spring ring */}
      <motion.div
        className="cursor-ring hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "#362348" : "#402955",
          backgroundColor: isHovered ? "rgba(64, 41, 85, 0.08)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 24 }}
      />
    </>
  );
}
