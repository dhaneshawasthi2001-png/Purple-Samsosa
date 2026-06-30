"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Compass, Target, ArrowRight } from "lucide-react";

export default function BrandElevation() {
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
      title: "Strategic Distinction",
      desc: "Unlocking your brand's unique voice to command immediate attention.",
    },
    {
      icon: Sparkles,
      title: "Exquisite Aesthetics",
      desc: "Crafting detail-oriented, high-end designs that elevate customer trust.",
    },
    {
      icon: Target,
      title: "Seamless Engineering",
      desc: "Merging visual excellence with flawless, high-performance execution.",
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
          
          {/* Left Column: Image Frame */}
          <motion.div 
            className="lg:col-span-5 w-full flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="relative w-full max-w-[450px] lg:max-w-none aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-cream-soft p-4 rounded-3xl shadow-xl border border-cream-deep cursor-pointer group transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/brand-elevation.png"
                  alt="Elevating your brand visual concept"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                {/* Visual subtle overlay */}
                <div className="absolute inset-0 bg-purple-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Value Proposition */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
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
                elevating your brand
              </motion.span>
              
              <motion.h2 
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase leading-[1.05]"
              >
                stuffed with strategy. <br />
                <span className="text-purple-primary font-medium">served with style.</span>
              </motion.h2>
            </div>

            <motion.div 
              variants={itemVariants} 
              className="font-body text-sm sm:text-base text-ink/75 space-y-4 leading-relaxed max-w-2xl font-normal"
            >
              <p>
                At Purple Samosa, we believe that brand building is an art of blending strategic intent with uncompromising design aesthetics. We do not just create visuals; we design memorable identities that command attention and drive conversion.
              </p>
              <p>
                Whether you are shaping a new market entry or revitalizing a legacy brand, our bespoke design approach ensures every touchpoint—from digital interfaces to physical assets—expresses your unique narrative with absolute clarity and high-end craft.
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
                  Explore Our Creative Work
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
