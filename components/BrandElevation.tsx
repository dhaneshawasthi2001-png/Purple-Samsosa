"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Compass, Target, ArrowRight } from "lucide-react";

export default function BrandElevation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 15,
      },
    },
  };

  const pillars = [
    {
      icon: Compass,
      title: "chef's kiss strategy",
      desc: "Unlocking your brand's unique voice so you're not just another clone. Pure main character energy.",
    },
    {
      icon: Sparkles,
      title: "visuals that eat",
      desc: "Sleek, detail-oriented designs that command attention and leave absolutely zero crumbs.",
    },
    {
      icon: Target,
      title: "devs absolutely cooked",
      desc: "Flawless, high-performance execution that matches the visuals with satisfying speed.",
    },
  ];

  return (
    <section 
      id="brand-elevation" 
      className="py-20 md:py-32 bg-cream-base bg-grid-pattern relative overflow-hidden border-b border-cream-deep"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-purple-soft/5 blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/2"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Before/After Brand Slider */}
          <motion.div 
            className="lg:col-span-6 w-full flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="relative w-full max-w-[520px] lg:max-w-none aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-cream-soft p-4 rounded-3xl shadow-xl border border-cream-deep select-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-cream-deep">
                
                {/* BEFORE: Standard Brand (Grayscale/Dull/Low Contrast) */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782845488/super30-1562995719_xxe6nb.jpg"
                    alt="Standard Boring Brand Layout"
                    fill
                    className="object-cover grayscale brightness-[0.75] contrast-[0.8] blur-[1px]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    />
                  <div className="absolute top-4 left-4 bg-ink/80 text-cream-base text-[10px] sm:text-xs font-body font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-sm z-10 border border-cream-base/10 shadow-sm">
                    dull & generic
                  </div>
                </div>

                {/* AFTER: Elevated Brand (Full Color & High Fidelity) */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
                  style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
                  >
                  <Image
                  src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782845488/images_1_sctgyo.jpg"
                    alt="Purple Samosa Elevated Brand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-purple-primary text-cream-base text-[10px] sm:text-xs font-body font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full z-10 shadow-md border border-purple-deep">
                    elevated by purple samosa
                  </div>
                </div>

                {/* Draggable Divider Bar */}
                <div 
                  className="absolute top-0 bottom-0 w-[2.5px] bg-purple-primary z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Glowing vertical line effect */}
                  <div className="absolute inset-0 bg-purple-soft/50 blur-[2px]" />
                  
                  {/* Slider Control Handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-purple-primary text-cream-base rounded-full shadow-xl flex items-center justify-center border-2 border-cream-base transition-transform duration-200 group-hover:scale-110 z-20">
                    <span className="text-sm font-semibold select-none flex gap-0.5 pointer-events-none">
                      <span>‹</span>
                      <span className="text-[9px] opacity-75 font-normal">|</span>
                      <span>›</span>
                    </span>
                  </div>
                </div>

                {/* Help guide badge (Fades out when interacted with) */}
                {sliderPosition === 50 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-purple-deep/90 text-cream-base text-[10px] sm:text-xs font-body tracking-wider px-4 py-2 rounded-full backdrop-blur-sm z-20 pointer-events-none animate-pulse border border-purple-primary/20">
                    ← drag slider to compare →
                  </div>
                )}

                {/* Invisible native input for capturing events cleanly */}
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-none"
                  aria-label="Brand Elevation Slider"
                />

              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Value Proposition */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="space-y-4">
              <motion.span 
                variants={itemVariants} 
                className="font-body text-xs font-bold uppercase tracking-[0.18em] text-purple-primary bg-cream-deep/60 px-5 py-2 rounded-full border border-cream-deep inline-block"
              >
                glow up era
              </motion.span>
              
              <motion.h2 
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase leading-[1.05]"
              >
                from standard NPC. <br />
                <span className="text-purple-primary font-medium">to infinite aura.</span>
              </motion.h2>
            </div>

            <motion.div 
              variants={itemVariants} 
              className="font-body text-sm sm:text-base text-ink/75 space-y-4 leading-relaxed max-w-2xl font-normal"
            >
              <p>
                Let&apos;s be real—most brand design is giving basic. Gray layouts, default system fonts, and zero personality. If your digital presence looks like a default template, you&apos;re losing aura points by the second. We didn&apos;t start Purple Samosa to create more background noise.
              </p>
              <p>
                We&apos;re here to give your brand the ultimate upgrade. By combining sharp market positioning with design assets that actually eat, we make sure every touchpoint serves absolute main character energy. Drag the slider to see the difference.
              </p>
            </motion.div>

            {/* Pillars */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-purple-primary bg-purple-primary/10 p-2.5 rounded-xl mt-0.5">
                    <pillar.icon size={20} className="stroke-[1.75]" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold lowercase text-ink">
                      {pillar.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-ink/70 mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="inline-block"
              >
                <Link
                  href="#work"
                  className="inline-flex justify-center items-center bg-purple-primary text-cream-base font-body font-semibold px-8 py-4 rounded-full text-sm sm:text-base shadow-md hover:bg-purple-deep hover:shadow-lg transition-all duration-200 group"
                >
                  upgrade your brand aura
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
