"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-cream-soft bg-grid-pattern relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block">
            Who We Are
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            why we started.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Text & Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-body text-base text-ink/80 space-y-6 leading-relaxed max-w-xl">
              <p>
                In today&apos;s digital era, we saw that there is no one who is truly improving the digital presence of a brand. Most agencies either design gorgeous visual assets that drive no traffic, or run technical marketing campaigns that lack brand soul and identity.
              </p>
              <p>
                We founded Purple Samosa to solve this exact gap. We realized that true brand growth requires a unified approach.
              </p>
              <p>
                By bringing brand positioning, high-end web development, and performance campaigns under a single strategy, we help brands stand out and scale in a crowded digital landscape.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Overlapping Collage */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] md:h-[500px] w-full flex items-center justify-center">
            {/* Image 1: Restaurant Interior (Left-aligned, rotated left) */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: -2, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute left-4 top-8 w-[50%] aspect-[4/5] bg-cream-base p-3 rounded-2xl shadow-xl rotate-[-6deg] border border-cream-deep cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src="/restaurant.png"
                  alt="Aesthetic Space and Studio Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>

            {/* Image 2: Packaging Mockup (Right-aligned, rotated right, overlaps Image 1) */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: 2, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute right-4 bottom-8 w-[55%] aspect-[4/5] bg-cream-base p-3 rounded-2xl shadow-2xl rotate-[4deg] border border-cream-deep cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src="/packaging.png"
                  alt="Creative Branding and Product Mockup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
