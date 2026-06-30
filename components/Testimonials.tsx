"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "Purple Samosa restructured our visual branding and corporate design system. In less than 60 days, our brand recognition surged, and client inquiries doubled. Their creative direction is polished, strategic, and highly professional.",
      author: "ananya gupta",
      role: "managing director",
      brand: "rajluxmi group",
    },
    {
      quote: "Most agencies just build pretty layouts. Purple Samosa understands conversion funnel metrics and user acquisition strategy. They built our high-converting web presence and optimized our advertising campaigns to triple our monthly leads.",
      author: "vijay dada",
      role: "founder",
      brand: "dadas veg",
    },
    {
      quote: "Their team took full ownership of our academy relaunch and organic social campaign. The digital assets they produced went viral locally, bringing in hundreds of new student registrations in a matter of weeks.",
      author: "shweta verma",
      role: "director",
      brand: "diamonds dream academy",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="py-24 md:py-40 bg-cream-soft border-b border-cream-deep relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Quote Icon Graphic Background */}
        <div className="absolute top-12 left-6 text-purple-faint/15 pointer-events-none select-none">
          <Quote size={160} className="stroke-[1]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-8 min-h-[350px]">
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block">
            client success
          </span>

          {/* Testimonial slider window */}
          <div className="w-full relative overflow-hidden flex items-center justify-center min-h-[220px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="max-w-3xl mx-auto space-y-6"
              >
                <p className="font-display text-lg sm:text-2xl md:text-3xl font-medium text-ink leading-relaxed italic lowercase">
                  &ldquo;{reviews[activeIndex].quote}&rdquo;
                </p>

                <div className="space-y-1">
                  <h4 className="font-display text-lg font-medium text-ink lowercase">
                    {reviews[activeIndex].author}
                  </h4>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-purple-soft">
                    {reviews[activeIndex].role} &middot; {reviews[activeIndex].brand}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls & Dots */}
          <div className="flex items-center space-x-6 pt-4">
            <button
              onClick={handlePrev}
              className="p-2 border border-cream-deep rounded-full hover:bg-cream-deep hover:text-purple-primary transition-all text-purple-soft cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex ? "bg-purple-primary scale-125" : "bg-cream-deep"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 border border-cream-deep rounded-full hover:bg-cream-deep hover:text-purple-primary transition-all text-purple-soft cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
