"use client";

import React from "react";

export default function MarqueeBreak() {
  const items = [
    "branding",
    "seo",
    "social media",
    "performance marketing",
    "pr & positioning",
    "websites",
    "identity design",
    "content strategy",
  ];

  // Repeat items to ensure smooth infinite loop scroller width
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-purple-primary py-6 border-y border-purple-soft/30 overflow-hidden relative z-10 flex items-center">
      <div className="grain-overlay opacity-[0.015]" />
      
      <div className="flex whitespace-nowrap overflow-hidden w-full">
        {/* Infinite scrolling row */}
        <div className="flex animate-marquee-strip hover:[animation-play-state:paused] cursor-pointer">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center mx-6 sm:mx-8">
              <span className="font-display text-lg sm:text-2xl font-medium text-cream-base lowercase tracking-wide">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-cream-deep/60 ml-12 sm:ml-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
