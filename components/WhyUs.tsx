"use client";

import { motion } from "framer-motion";
import { Coffee, Code, Layers, MessageCircle, BarChart3, ShieldCheck, Sparkles } from "lucide-react";

export default function WhyUs() {
  const valueProps = [
    {
      icon: Coffee,
      title: "results-driven team",
      desc: "No two briefs get the same template. We work with brands that want to grow, not brands that want a nice-looking case study.",
    },
    {
      icon: Code,
      title: "conversion-focused design",
      desc: "Every layout answers to behavior data first, aesthetics second — though usually, the two agree.",
    },
    {
      icon: Layers,
      title: "brand & strategy aligned",
      desc: "A brand's numbers and its visuals should tell the same story. When they don't, growth stalls no matter how good the ads are.",
    },
    {
      icon: MessageCircle,
      title: "positioning that sells",
      desc: "Every asset — digital or print — is built to do one job: move someone closer to a decision.",
    },
    {
      icon: BarChart3,
      title: "data-backed content strategy",
      desc: "Likes are a vanity metric until they convert. We build content and copy around what actually moves someone from scroll to sale.",
    },
  ];

  const flagshipProp = {
    icon: ShieldCheck,
    title: "end-to-end execution",
    desc: "No file handoff, no disappearing after launch. We stay inside the accounts, running the campaigns, watching the numbers.",
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
            why purple samosa
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            built for growth.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 mt-3 max-w-xl mx-auto font-normal">
            Design agencies rarely understand acquisition. Growth consultants rarely understand craft. Most brands end up managing both — with neither one talking to the other.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr"
        >
          
          {/* Card 1: Flagship Brand Card (Column 1, spans 2 rows) */}
          <motion.div
            variants={cardVariants}
            className="col-span-2 lg:col-span-1 lg:row-span-2 bg-purple-primary text-cream-base p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-500 border border-purple-soft/30 group min-h-[280px] lg:min-h-full"
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
              <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] lowercase tracking-tight">
                why we <br /> do what <br /> we do.
              </h3>
            </div>

            <div className="space-y-6 pt-4 lg:pt-8 relative z-10 text-left">
              <p className="font-body text-xs sm:text-sm text-cream-soft/85 leading-relaxed font-normal">
                Margins and visuals aren&apos;t separate conversations for us. Every layout we ship is judged by whether it looks premium and whether it performs — both, not either.
              </p>
              <div className="flex items-center space-x-2 bg-cream-base/10 px-4 py-2.5 rounded-xl border border-cream-base/10 text-cream-base w-fit">
                <Sparkles size={14} className="text-cream-soft" />
                <span className="font-body text-[10px] sm:text-xs font-semibold lowercase tracking-wide">
                  zero template models
                </span>
              </div>
            </div>
          </motion.div>

          {/* Cards 2 to 6: Loop through valueProps (occupies columns 2 & 3 in rows 1 & 2) */}
          {valueProps.map((prop, idx) => {
            const PropIcon = prop.icon;
            // The last item (index 4) spans full-width on mobile to avoid layout gaps
            const gridSpanClass = idx === 4 ? "col-span-2 lg:col-span-1" : "col-span-1 lg:col-span-1";
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`${gridSpanClass} bg-cream-base/40 backdrop-blur-sm border border-cream-deep/60 p-5 md:p-8 rounded-3xl shadow-sm hover:shadow-md hover:bg-cream-soft hover:border-purple-primary/20 hover:scale-[1.01] transition-all duration-500 flex flex-col justify-between min-h-[190px] md:min-h-[220px] relative group overflow-hidden cursor-pointer`}
              >
                {/* Subtle Step Number Chip */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8 font-mono text-[9px] md:text-[10px] text-purple-soft font-bold uppercase tracking-wider bg-purple-primary/5 px-2.5 py-0.5 rounded border border-purple-soft/5">
                  0{idx + 1}
                </div>

                <div className="space-y-3 md:space-y-4 relative z-10 text-left">
                  <div className="text-purple-primary bg-purple-primary/5 p-2.5 md:p-3 rounded-xl md:rounded-2xl w-fit group-hover:bg-purple-primary group-hover:text-cream-base transition-all duration-500 shadow-sm">
                    <PropIcon size={20} className="stroke-[1.75] md:w-6 md:h-6" />
                  </div>
                  <h3 className="font-display text-base md:text-xl font-medium lowercase text-ink group-hover:text-purple-primary transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="font-body text-[11px] sm:text-xs md:text-sm text-ink/70 leading-relaxed font-normal">
                    {prop.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Card 7: Flagship Double-Width Card (Column 2 & 3 in Row 3) */}
          <motion.div
            variants={cardVariants}
            className="col-span-2 lg:col-span-2 bg-[#FAF8F5] border border-cream-deep/80 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-purple-primary/20 hover:scale-[1.005] transition-all duration-500 flex flex-col justify-between min-h-[200px] md:min-h-[220px] relative group overflow-hidden cursor-pointer"
          >
            {/* Subtle Step Number Chip */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 font-mono text-[9px] md:text-[10px] text-purple-soft font-bold uppercase tracking-wider bg-purple-primary/5 px-2.5 py-0.5 rounded border border-purple-soft/5">
              06
            </div>

            <div className="space-y-4 relative z-10 text-left">
              <div className="text-purple-primary bg-purple-primary/5 p-2.5 md:p-3 rounded-xl md:rounded-2xl w-fit group-hover:bg-purple-primary group-hover:text-cream-base transition-all duration-500 shadow-sm">
                <flagshipProp.icon size={20} className="stroke-[1.75] md:w-6 md:h-6" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5 space-y-1">
                  <h3 className="font-display text-base md:text-xl font-medium lowercase text-ink group-hover:text-purple-primary transition-colors duration-300">
                    {flagshipProp.title}
                  </h3>
                  <span className="font-body text-[9px] md:text-[10px] font-bold text-purple-soft uppercase tracking-wider block">
                    partnership approach
                  </span>
                </div>
                <div className="md:col-span-7">
                  <p className="font-body text-xs md:text-sm text-ink/70 leading-relaxed font-normal">
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
