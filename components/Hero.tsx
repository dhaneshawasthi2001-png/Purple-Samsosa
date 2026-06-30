"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-cream-base bg-grid-pattern overflow-hidden px-6 md:px-8 pt-36 pb-24 md:pt-40 md:pb-32"
    >
      {/* Blurred triangular purple shape representing the samosa fold motif */}
      <div 
        className="absolute bottom-0 right-0 w-[65vw] h-[65vw] md:w-[45vw] md:h-[45vw] bg-purple-soft/15 blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="max-w-[1280px] mx-auto w-full relative z-10 flex flex-col items-center justify-center text-center">
        {/* Center Column: Text & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center text-center space-y-6 md:space-y-8"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="inline-block">
            <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-purple-primary bg-cream-deep/60 px-5 py-2 rounded-full border border-cream-deep">
              creative growth partner for brands
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="font-display text-[48px] sm:text-[68px] md:text-[88px] lg:text-[100px] font-medium text-ink leading-[0.95] tracking-tighter lowercase"
          >
            we build <br />
            brands people <br />
            <span className="text-purple-primary relative inline-block font-medium">
              remember
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[6px] bg-purple-primary/10 rounded" />
            </span>
            .
          </motion.h1>

          {/* Tagline & Subheading */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center space-y-4"
          >
            <span className="block font-display text-xl sm:text-2xl md:text-3xl text-purple-primary font-medium tracking-tight">
              Stuffed with Strategy. Served with Growth.
            </span>
            <p className="font-body text-sm sm:text-base md:text-lg text-ink/75 max-w-2xl leading-relaxed font-normal">
              We combine high-end creative brand strategy, custom web engineering, and performance marketing to build a dominant, memorable digital footprint for businesses.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full pt-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
            >
              <Link
                href="#contact"
                className="inline-flex justify-center items-center bg-purple-primary text-cream-base font-body font-semibold px-8 py-4 rounded-full text-base shadow-[0_4px_20px_rgba(64,41,85,0.15)] hover:bg-purple-deep hover:shadow-[0_4px_25px_rgba(64,41,85,0.25)] transition-all duration-200"
              >
                Start Your Growth
              </Link>
            </motion.div>

            <Link
              href="#work"
              className="inline-flex justify-center items-center text-purple-primary font-body font-bold text-base hover:text-purple-deep transition-colors py-3 group cursor-pointer"
            >
              See Our Work
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1.5 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none select-none">
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[24px] h-[38px] rounded-full border-2 border-purple-primary/30 flex justify-center p-1"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-purple-primary"
          />
        </motion.div>
      </div>
    </section>
  );
}
