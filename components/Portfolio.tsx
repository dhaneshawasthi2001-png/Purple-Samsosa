"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    "https://res.cloudinary.com/dmj0smemf/image/upload/v1782892306/7_4_jv6ugx.png",
    "https://res.cloudinary.com/dmj0smemf/image/upload/v1782892306/5_8_jvon6j.png",
    "https://res.cloudinary.com/dmj0smemf/image/upload/v1782892306/6_6_uwrzex.png",
    "https://res.cloudinary.com/dmj0smemf/image/upload/v1782892307/3_10_b3dqtj.png",
    "https://res.cloudinary.com/dmj0smemf/image/upload/v1782892307/4_8_geyyam.png",
    "https://res.cloudinary.com/dmj0smemf/image/upload/v1782892307/2_14_s1vuhy.png",
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 320; // width of card + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="work" className="py-24 md:py-36 bg-cream-base bg-grid-pattern border-b border-cream-deep relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block mb-3">
            our clients
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            brands we&apos;ve helped grow.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 mt-3 max-w-xl mx-auto font-normal">
            Partnering with ambitious businesses to scale their digital reach and build memorable market presence.
          </p>

          {/* Slider Arrow Controls */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 border border-cream-deep rounded-full bg-cream-soft text-purple-soft hover:bg-cream-base hover:text-purple-primary transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 border border-cream-deep rounded-full bg-cream-soft text-purple-soft hover:bg-cream-base hover:text-purple-primary transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Logo Track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {clients.map((logoUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
              className="flex-shrink-0 w-[240px] sm:w-[280px] flex items-center justify-center p-6 bg-cream-soft/75 backdrop-blur-sm border border-cream-deep rounded-3xl shadow-sm hover:border-purple-primary/30 transition-all duration-300 scroll-snap-align-start group"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Image Logo Frame */}
              <div className="relative w-full h-[90px] sm:h-[110px] flex items-center justify-center">
                <Image
                  src={logoUrl}
                  alt={`Client Logo ${idx + 1}`}
                  fill
                  className="object-contain filter opacity-90 group-hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 768px) 200px, 250px"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
