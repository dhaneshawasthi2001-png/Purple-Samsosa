"use client";

import Image from "next/image";

export default function RevealBanner() {
  return (
    <div 
      className="relative h-[60vh] md:h-[75vh] w-full" 
      style={{ clipPath: "inset(0px)" }}
    >
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
          alt="Purple Samosa Creative Studio Workspace"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Sleek overlay with purple tint to match branding */}
        <div className="absolute inset-0 bg-[#0A0B1F]/60 backdrop-blur-[1px]" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-center text-center">
        <div className="max-w-4xl space-y-4 md:space-y-6">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-cream-soft/80 bg-purple-primary/30 border border-purple-soft/30 px-5 py-2.5 rounded-full backdrop-blur-sm inline-block">
            creative growth partner
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter text-cream-base leading-[0.95] lowercase">
            stuffed with strategy. <br />
            <span className="text-cream-soft font-normal italic">served with growth.</span>
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-cream-soft/75 max-w-xl mx-auto leading-relaxed font-normal pt-2">
            We build high-performance brand positionings, visual identity guidelines, and bespoke web platforms engineered for maximum digital reach.
          </p>
        </div>
      </div>
    </div>
  );
}
