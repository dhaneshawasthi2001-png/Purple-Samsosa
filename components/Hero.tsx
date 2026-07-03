"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-[125px] sm:pt-[145px] lg:pt-[175px] pb-20 md:pb-28 bg-cream-soft bg-grid-pattern overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Noise filter */}
      <div className="grain-overlay" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
          className="lg:col-span-5 space-y-6 sm:space-y-8 text-left"
        >
          {/* Brand Badge */}
          <div className="space-y-3">
            <span className="font-body text-xs font-bold uppercase tracking-[0.22em] text-purple-soft/90 block">
              Stuffed with Strategy • Served with Growth
            </span>
            <div className="w-16 h-[2px] bg-purple-primary" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-medium text-ink tracking-tight leading-[1.08]">
            Your <br />
            <span className="text-purple-primary italic font-playfair font-normal">Success Story</span> <br />
            Starts Now!
          </h1>

          <p className="font-body text-sm sm:text-base md:text-lg text-ink/75 leading-relaxed max-w-lg font-normal">
            Purple Samosa is a premium{" "}
            <span className="font-bold text-purple-primary">
              creative growth partner
            </span>{" "}
            for ambitious modern brands. By combining strategic{" "}
            <span className="font-bold text-purple-primary">
              positioning, high-end development, and performance campaigns
            </span>{" "}
            under a single unified strategy, we help you scale and stand out in the digital landscape.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex flex-row items-center gap-6 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link
                  href="#contact"
                  className="group font-body font-semibold text-sm px-7 py-4 bg-purple-primary text-cream-soft rounded-full hover:bg-purple-deep hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Start Your Journey
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-cream-soft">→</span>
                </Link>
              </motion.div>

              <Link
                href="#services"
                className="group font-body text-sm text-purple-deep/90 hover:text-purple-primary transition-colors font-medium flex items-center gap-1"
              >
                Explore Our Services{" "}
                <span className="text-purple-primary font-semibold underline decoration-purple-primary/30 decoration-2 underline-offset-2 group-hover:decoration-purple-primary transition-all">
                  Here
                </span>
              </Link>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-2.5 text-xs text-purple-soft/85 font-body pt-2"
            >
              <span className="w-2 h-2 rounded-full bg-purple-primary" />
              <span>Trusted by 50+ growth-focused brands globally</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Exact Mockup Collage & Custom Shapes */}
        <div className="lg:col-span-7 relative w-full aspect-[1.1] max-w-[550px] lg:max-w-[620px] xl:max-w-[660px] mx-auto lg:mr-0 z-10">
          
          {/* Background dot grid under bottom-left image */}
          <div className="absolute bottom-[2%] left-[4%] w-24 h-24 -z-10 grid grid-cols-6 gap-2 opacity-30 select-none pointer-events-none">
            {Array.from({ length: 36 }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-soft" />
            ))}
          </div>

          {/* Thin curved decorative line wrapping top-left */}
          <div className="absolute top-[8%] left-[2%] w-[46%] h-[80%] pointer-events-none z-0">
            <div className="absolute inset-0 border border-purple-soft/30 rounded-full" />
            {/* Purple circle indicator */}
            <div className="absolute top-[50%] right-[-6.5px] -translate-y-1/2 w-3.5 h-3.5 bg-purple-primary rounded-full border border-cream-soft" />
          </div>

          {/* Thin curved outline scaled slightly around right image */}
          <div className="absolute top-[3%] right-[0%] w-[50%] h-[94%] border border-purple-soft/20 rounded-[180px] scale-[1.05] pointer-events-none z-0" />

          {/* Radiating sparkle/attention lines at the top of the right shape */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="absolute top-[8%] right-[51%] w-[6%] h-[6%] text-purple-soft/70 pointer-events-none select-none z-10"
          >
            <path d="M 6 26 L 12 20" />
            <path d="M 16 30 L 16 22" />
            <path d="M 26 26 L 20 20" />
          </svg>

          {/* Decorative Plus Signs */}
          <div className="absolute top-[56%] left-[45%] text-purple-primary font-light text-2xl pointer-events-none select-none z-10">+</div>
          <div className="absolute top-[48%] right-[-1%] text-purple-primary font-light text-2xl pointer-events-none select-none z-10">+</div>
          <div className="absolute bottom-[6%] right-[30%] text-purple-primary font-light text-2xl pointer-events-none select-none z-10">+</div>

          {/* Top Left: Flowchart Drawing (Leaf Shape) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ scale: 1.03 }}
            className="absolute top-[8%] left-[4%] w-[42%] aspect-[1.12] rounded-[110px_16px_110px_16px] overflow-hidden border border-cream-deep shadow-md z-10 bg-cream-deep/20 cursor-pointer"
          >
            <Image
              src="/hero-flowchart.png"
              alt="Hand sketching strategy flowchart next to Samosa mug"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 25vw"
              priority
            />
          </motion.div>

          {/* Bottom Left: Pegboard (Leaf Shape) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ scale: 1.03 }}
            className="absolute bottom-[4%] left-[4%] w-[42%] aspect-[1.12] rounded-[16px_110px_16px_110px] overflow-hidden border border-cream-deep shadow-md z-10 bg-cream-deep/20 cursor-pointer"
          >
            <Image
              src="/hero-pegboard.png"
              alt="Great brands don't happen by chance pegboard message next to succulent"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 25vw"
              priority
            />
          </motion.div>

          {/* Right: Laptop (Tall Capsule Shape) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 90, damping: 15 }}
            whileHover={{ scale: 1.02 }}
            className="absolute top-[5%] right-[2%] w-[46%] h-[90%] rounded-full overflow-hidden border border-cream-deep shadow-lg z-10 bg-cream-deep/20 cursor-pointer"
          >
            <Image
              src="/hero-laptop.png"
              alt="Laptop screen showing brand strategy on wooden desk next to vase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 45vw, 30vw"
              priority
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
