"use client";

import React from "react";

export default function MarqueeCrossing() {
  const strip1Phrases = [
    "custom brand identities",
    "high-converting web engineering",
    "organic search optimization",
    "ROI-driven performance ads",
    "social media scaling",
    "creative content production",
    "bespoke visual systems",
    "strategic brand positioning",
  ];

  const strip2Phrases = [
    "we design for active conversion",
    "scaling customer acquisition",
    "creating memorable touchpoints",
    "detail-oriented engineering",
    "data-driven growth campaigns",
    "premium digital experiences",
    "authority building strategy",
    "elevating your brand presence",
  ];

  // Repeat the arrays to ensure they are long enough for seamless looping
  const repeated1 = [...strip1Phrases, ...strip1Phrases, ...strip1Phrases, ...strip1Phrases];
  const repeated2 = [...strip2Phrases, ...strip2Phrases, ...strip2Phrases, ...strip2Phrases];

  return (
    <section className="relative w-full max-w-full h-[280px] sm:h-[340px] md:h-[400px] bg-cream-base overflow-hidden overflow-x-clip flex items-center justify-center py-16 select-none border-b border-cream-deep">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Ambient glowing spotlight in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-soft/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Decorative samosa watermark behind the cross */}
      <div className="absolute w-[200px] h-[200px] bg-purple-primary/5 samosa-blob blur-sm opacity-20 pointer-events-none" />

      {/* Strip 1: Beige (cream-soft), angled down, scrolls left-to-right (reverse) */}
      <div 
        className="absolute w-[160vw] h-[64px] sm:h-[76px] md:h-[88px] bg-cream-soft border-y-2 border-purple-primary flex items-center shadow-2xl z-20 overflow-hidden transform rotate-[4deg] transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
        style={{ transformOrigin: "center" }}
      >
        <div className="flex whitespace-nowrap overflow-hidden w-full">
          <div 
            className="flex animate-marquee-reverse py-2"
            style={{ 
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden"
            }}
          >
            {repeated1.map((phrase, idx) => (
              <div key={idx} className="flex items-center mx-4 sm:mx-6 md:mx-8">
                <span className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-purple-primary tracking-wider uppercase">
                  {phrase}
                </span>
                <span className="text-purple-primary text-lg sm:text-xl md:text-2xl ml-8 sm:ml-12 md:ml-16">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strip 2: Purple (purple-primary), angled up, scrolls right-to-left */}
      <div 
        className="absolute w-[160vw] h-[64px] sm:h-[76px] md:h-[88px] bg-purple-primary border-y-2 border-cream-deep/40 flex items-center shadow-2xl z-10 overflow-hidden transform -rotate-[3.5deg] transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
        style={{ transformOrigin: "center" }}
      >
        <div className="flex whitespace-nowrap overflow-hidden w-full">
          <div 
            className="flex animate-marquee-strip py-2"
            style={{ 
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden"
            }}
          >
            {repeated2.map((phrase, idx) => (
              <div key={idx} className="flex items-center mx-4 sm:mx-6 md:mx-8">
                <span className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-cream-soft tracking-wider uppercase">
                  {phrase}
                </span>
                <span className="text-cream-deep text-lg sm:text-xl md:text-2xl ml-8 sm:ml-12 md:ml-16">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
