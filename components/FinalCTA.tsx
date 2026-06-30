"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-purple-deep text-cream-base relative overflow-hidden text-center">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Decorative backdrop triangle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-primary/10 blur-[150px] pointer-events-none"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center justify-center space-y-8">
        <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cream-soft/70">
          start your project
        </span>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium text-cream-base leading-[1.05] tracking-tight lowercase max-w-4xl">
          ready to build a <br />
          brand people remember?
        </h2>

        <p className="font-body text-base md:text-lg text-purple-faint max-w-xl mx-auto leading-relaxed">
          Let&apos;s map out your brand&apos;s growth strategy. Claim your free digital & creative growth audit today.
        </p>

        {/* Inverted CTA Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 350, damping: 15 }}
          className="pt-4"
        >
          <a
            href="https://wa.me/919999999999?text=Hi%20Purple%20Samosa%2C%20I%20would%20like%20to%20get%20a%20free%20audit%20for%20my%20brand."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-cream-base text-purple-deep font-body font-bold text-base md:text-lg px-10 py-5 rounded-full hover:bg-white hover:shadow-2xl transition-all duration-300 group"
          >
            Claim Your Free Audit
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>

        <p className="font-body text-xs text-purple-faint italic pt-2">
          Takes less than 2 minutes &middot; No commitments
        </p>
      </div>
    </section>
  );
}
