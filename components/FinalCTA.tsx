"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
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

  return (
    <section 
      id="contact" 
      className="py-24 md:py-36 bg-cream-soft text-ink border-t border-cream-deep relative overflow-hidden text-center"
    >
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Decorative backdrop triangle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-soft/5 blur-[150px] pointer-events-none"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center justify-center space-y-8"
      >
        <motion.span 
          variants={itemVariants} 
          className="font-body text-xs font-bold uppercase tracking-[0.2em] text-purple-primary bg-cream-deep/60 px-5 py-2 rounded-full border border-cream-deep inline-block"
        >
          start your project
        </motion.span>

        <motion.h2 
          variants={itemVariants} 
          className="font-display text-4xl sm:text-6xl md:text-7xl font-medium text-ink leading-[1.05] tracking-tight lowercase max-w-4xl"
        >
          ready to build a <br />
          brand people remember?
        </motion.h2>

        <motion.p 
          variants={itemVariants} 
          className="font-body text-sm sm:text-base md:text-lg text-ink/75 max-w-xl mx-auto leading-relaxed font-normal"
        >
          Let us map out your brand strategy together. Claim your free digital & creative growth audit today.
        </motion.p>

        {/* Purple Brand CTA Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 350, damping: 15 }}
          className="pt-2"
        >
          <a
            href="https://wa.me/919999999999?text=Hi%20Purple%20Samosa%2C%20I%20would%20like%20to%20get%20a%20free%20audit%20for%20my%20brand."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-purple-primary text-cream-base font-body font-semibold text-base md:text-lg px-10 py-5 rounded-full hover:bg-purple-deep hover:text-white hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            Claim Your Free Audit
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>

        <motion.p 
          variants={itemVariants} 
          className="font-body text-xs text-purple-soft italic pt-2"
        >
          Takes less than 2 minutes • No commitments
        </motion.p>
      </motion.div>
    </section>
  );
}
