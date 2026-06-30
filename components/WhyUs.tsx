"use client";

import { motion } from "framer-motion";
import { Coffee, Code, Layers, MessageCircle, BarChart3, ShieldCheck, Sparkles } from "lucide-react";

export default function WhyUs() {
  const valueProps = [
    {
      icon: Coffee,
      title: "results-driven team",
      desc: "We eat, sleep, and breathe growth strategy. We partner with ambitious, growth-minded businesses — zero generic templates.",
    },
    {
      icon: Code,
      title: "conversion-focused design",
      desc: "We study user behavior metrics, search patterns, and conversion triggers. We turn layouts into customer acquisition engines.",
    },
    {
      icon: Layers,
      title: "brand & strategy aligned",
      desc: "No disconnect between business margins and creative layouts. We align operational goals with premium visual output.",
    },
    {
      icon: MessageCircle,
      title: "positioning that sells",
      desc: "Every digital touchpoint, print asset, and media copy acts as a high-end showcase designed to drive user action.",
    },
    {
      icon: BarChart3,
      title: "data-backed content strategy",
      desc: "No vanity likes or empty views. We produce layouts, organic assets, and copy written specifically as lead-generation funnels.",
    },
  ];

  const flagshipProp = {
    icon: ShieldCheck,
    title: "end-to-end execution",
    desc: "We don't hand off template files and walk away. We write the code, deploy the systems, and manage organic search campaigns daily to grow your business.",
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
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
    <section className="py-24 md:py-40 bg-cream-soft border-b border-cream-deep relative overflow-hidden">
      {/* Visual background ambient lighting */}
      <div 
        className="absolute bottom-0 left-0 w-[55vw] h-[55vw] bg-purple-soft/5 blur-[130px] pointer-events-none translate-x-[-1/3] translate-y-[1/3]"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header with entrance animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-purple-primary bg-cream-deep/60 px-5 py-2 rounded-full border border-cream-deep inline-block mb-3">
            Why Purple Samosa
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            built for growth.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 mt-3 max-w-xl mx-auto font-normal">
            Generic design agencies don&apos;t understand acquisition funnels. Traditional consultants don&apos;t know visual craft. We combine both.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          
          {/* Card 1: Flagship Brand Card (Column 1, spans 2 rows) */}
          <motion.div
            variants={cardVariants}
            className="lg:row-span-2 bg-purple-primary text-cream-base p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-500 border border-purple-soft/30 group min-h-[380px] lg:min-h-full"
          >
            {/* Soft triangle watermark overlay */}
            <div 
              className="absolute -right-10 -bottom-10 w-[70%] aspect-square bg-purple-soft/10 blur-[30px] rounded-full pointer-events-none select-none transition-transform duration-700 group-hover:scale-110 animate-pulse"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
            
            <div className="space-y-4">
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cream-soft/60 block">
                our core commitment
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] lowercase tracking-tight">
                why we <br /> do what <br /> we do.
              </h3>
            </div>

            <div className="space-y-6 pt-8 relative z-10">
              <p className="font-body text-sm text-cream-soft/85 leading-relaxed font-normal">
                We merge operational business margins with premium visual outputs to build high-performance acquisition engines.
              </p>
              <div className="flex items-center space-x-2 bg-cream-base/10 px-4 py-3 rounded-2xl border border-cream-base/10 text-cream-base w-fit">
                <Sparkles size={18} className="text-cream-soft" />
                <span className="font-body text-xs font-semibold lowercase tracking-wide">
                  zero template models
                </span>
              </div>
            </div>
          </motion.div>

          {/* Cards 2 to 6: Loop through valueProps (occupies columns 2 & 3 in rows 1 & 2) */}
          {valueProps.map((prop, idx) => {
            const PropIcon = prop.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-cream-base/40 backdrop-blur-sm border border-cream-deep/60 p-8 rounded-3xl shadow-sm hover:shadow-md hover:bg-cream-soft hover:border-purple-primary/20 hover:scale-[1.01] transition-all duration-500 flex flex-col justify-between min-h-[220px] relative group overflow-hidden cursor-pointer"
              >
                {/* Subtle Step Number Chip */}
                <div className="absolute top-8 right-8 font-mono text-[10px] text-purple-soft font-bold uppercase tracking-wider bg-purple-primary/5 px-2.5 py-0.5 rounded border border-purple-soft/5">
                  0{idx + 1}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="text-purple-primary bg-purple-primary/5 p-3 rounded-2xl w-fit group-hover:bg-purple-primary group-hover:text-cream-base transition-all duration-500 shadow-sm">
                    <PropIcon size={24} className="stroke-[1.75]" />
                  </div>
                  <h3 className="font-display text-xl font-medium lowercase text-ink group-hover:text-purple-primary transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-ink/70 leading-relaxed font-normal">
                    {prop.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Card 7: Flagship Double-Width Card (Column 2 & 3 in Row 3) */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-2 bg-[#FAF8F5] border border-cream-deep/80 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-purple-primary/20 hover:scale-[1.005] transition-all duration-500 flex flex-col justify-between min-h-[220px] relative group overflow-hidden cursor-pointer"
          >
            {/* Subtle Step Number Chip */}
            <div className="absolute top-8 right-8 font-mono text-[10px] text-purple-soft font-bold uppercase tracking-wider bg-purple-primary/5 px-2.5 py-0.5 rounded border border-purple-soft/5">
              06
            </div>

            <div className="space-y-4 relative z-10">
              <div className="text-purple-primary bg-purple-primary/5 p-3 rounded-2xl w-fit group-hover:bg-purple-primary group-hover:text-cream-base transition-all duration-500 shadow-sm">
                <flagshipProp.icon size={24} className="stroke-[1.75]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5 space-y-1">
                  <h3 className="font-display text-xl font-medium lowercase text-ink group-hover:text-purple-primary transition-colors duration-300">
                    {flagshipProp.title}
                  </h3>
                  <span className="font-body text-[10px] font-bold text-purple-soft uppercase tracking-wider block">
                    partnership approach
                  </span>
                </div>
                <div className="md:col-span-7">
                  <p className="font-body text-xs sm:text-sm text-ink/70 leading-relaxed font-normal">
                    {flagshipProp.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
