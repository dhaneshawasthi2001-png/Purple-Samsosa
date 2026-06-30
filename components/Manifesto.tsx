"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the manifesto container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const text = "we don't just build brands. we create identity.";
  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-[80vh] w-full flex flex-col justify-center items-center bg-purple-deep bg-grid-pattern-dark px-6 md:px-8 text-center overflow-hidden py-24 border-y border-purple-soft/20"
    >
      {/* Visual grain texture overlay */}
      <div className="grain-overlay" />

      {/* Background soft triangle backdrop glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-purple-primary/10 blur-[150px] pointer-events-none"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cream-soft/75">
          our core manifesto
        </p>

        {/* Massive Reveal Headline */}
        <h2 className="font-display text-[32px] sm:text-[48px] md:text-[68px] lg:text-[80px] font-semibold leading-[1.05] tracking-tight lowercase select-none max-w-3xl">
          {words.map((word, i) => {
            // Distribute reveal intervals along the scroll length
            // As user scrolls from 0.2 to 0.7, reveal words sequentially
            const scrollStart = 0.2 + (i / words.length) * 0.4;
            const scrollEnd = scrollStart + 0.08;

            const opacity = useTransform(scrollYProgress, [scrollStart, scrollEnd], [0.25, 1]);
            const color = useTransform(scrollYProgress, [scrollStart, scrollEnd], ["#8C7F99", "#EFE6D7"]);

            return (
              <motion.span
                key={i}
                style={{ opacity, color }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            );
          })}
        </h2>

        {/* Small supporting paragraph */}
        <p className="font-body text-sm md:text-base text-purple-faint max-w-lg mx-auto leading-relaxed pt-2">
          Every brand touchpoint—from web experiences and identity designs to campaign assets and digital search footprints—is a signature. We build premium digital experiences that people remember.
        </p>
      </div>
    </section>
  );
}
