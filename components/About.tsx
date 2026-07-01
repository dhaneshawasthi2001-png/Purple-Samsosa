"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-cream-soft bg-grid-pattern relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block">
            Who We Are
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            why we started.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Text & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="font-body text-base text-ink/80 space-y-6 leading-relaxed max-w-xl">
              <p className="text-lg sm:text-xl font-normal text-ink/90 leading-relaxed border-l-[3px] border-purple-primary pl-5 py-1">
                In today&apos;s digital era, we saw that there is no one who is truly improving the digital presence of a brand. Most agencies either design gorgeous visual assets that drive no traffic, or run technical marketing campaigns that lack brand soul and identity.
              </p>
              <p className="pl-6">
                We founded Purple Samosa to solve this exact gap. We realized that true brand growth requires a unified approach.
              </p>
              <p className="pl-6">
                By bringing brand positioning, high-end web development, and performance campaigns under a single strategy, we help brands stand out and scale in a crowded digital landscape.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Overlapping Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-6 relative h-[440px] sm:h-[520px] md:h-[600px] w-full flex items-center justify-center"
          >
            {/* Image 1: Restaurant Interior (Left-aligned, rotated left) */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: -2, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute left-0 top-4 w-[56%] aspect-[4/5] bg-cream-base p-3 rounded-2xl shadow-xl rotate-[-5deg] border border-cream-deep cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782843522/ChatGPT_Image_Jun_30_2026_11_48_28_PM_lzh0cy.png"
                  alt="Aesthetic Space and Studio Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 35vw"
                />
              </div>
            </motion.div>

            {/* Image 2: Packaging Mockup (Right-aligned, rotated right, overlaps Image 1) */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: 2, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute right-0 bottom-4 w-[62%] aspect-[4/5] bg-cream-base p-3 rounded-2xl shadow-2xl rotate-[4deg] border border-cream-deep cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782843889/ChatGPT_Image_Jun_30_2026_11_54_26_PM_l5it1w.png"
                  alt="Creative Branding and Product Mockup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 35vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
