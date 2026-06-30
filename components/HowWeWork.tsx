"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Compass, Cpu, TrendingUp } from "lucide-react";

interface StepProps {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  onInView: (num: string) => void;
}

function StepCard({ num, title, desc, icon: Icon, onInView }: StepProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger inView when step card occupies the middle section of the viewport
  const isInView = useInView(ref, { margin: "-35% 0px -35% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView(num);
    }
  }, [isInView, num, onInView]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 border-l-2 pl-6 md:pl-8 py-8 ${
        isInView 
          ? "border-purple-primary opacity-100 scale-[1.01]" 
          : "border-cream-deep opacity-40 scale-100"
      }`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <span className={`font-display text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-md transition-colors ${
          isInView ? "bg-purple-primary text-cream-base" : "bg-cream-deep text-purple-soft"
        }`}>
          step {num}
        </span>
        <Icon className={`w-6 h-6 transition-colors ${
          isInView ? "text-purple-primary" : "text-purple-soft"
        }`} />
      </div>

      <h3 className={`font-display text-2xl md:text-3xl font-medium transition-colors lowercase ${
        isInView ? "text-ink" : "text-purple-soft"
      }`}>
        {title}
      </h3>

      <p className="font-body text-sm md:text-base text-ink/75 mt-3 leading-relaxed max-w-xl">
        {desc}
      </p>
    </div>
  );
}

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState("01");

  const steps = [
    {
      num: "01",
      title: "discover & audit",
      desc: "We perform a deep diagnostic audit of your brand's digital footprint. We analyze your website conversion rates, ad spend efficiency, search engine rankings, and competitor benchmarks to discover hidden blocks.",
      icon: Search,
    },
    {
      num: "02",
      title: "growth roadmap",
      desc: "We design a comprehensive creative and conversion strategy. From UX structural roadmaps and client acquisition funnels to layout restructures and custom campaigns, we align your brand with customer demands.",
      icon: Compass,
    },
    {
      num: "03",
      title: "execution & launch",
      desc: "Our design studio and development squads build the digital and brand assets. We build your high-converting website, roll out brand redesigns, construct advertising accounts, and design modern visual systems.",
      icon: Cpu,
    },
    {
      num: "04",
      title: "scaling & optimization",
      desc: "We manage and scale your digital performance campaigns. We run search optimization, manage paid ads bids, manage content pipelines, and analyze performance telemetry to optimize customer acquisition costs.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-cream-base bg-grid-pattern border-b border-cream-deep">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block">
            Our Execution Strategy
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            how we work.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 max-w-xl mx-auto font-normal">
            We align branding and digital growth under one single workflow. Scroll down to see our execution funnel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Column: Progress Widgets */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 pt-4">
            {/* Sliding step number indicator watermark */}
            <div className="h-[120px] overflow-hidden relative w-fit select-none pointer-events-none mt-2 hidden lg:block">
              <motion.div
                animate={{ y: -((parseInt(activeStep) - 1) * 120) }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="flex flex-col text-[120px] font-display font-medium leading-none text-purple-primary/10 lowercase"
              >
                <span className="h-[120px] block">01</span>
                <span className="h-[120px] block">02</span>
                <span className="h-[120px] block">03</span>
                <span className="h-[120px] block">04</span>
              </motion.div>
            </div>
            
            {/* Steps Progress Indicator (Desktop only) */}
            <div className="hidden lg:flex flex-col space-y-3 pt-6 border-t border-cream-deep w-fit">
              {steps.map((s) => (
                <div key={s.num} className="flex items-center space-x-3">
                  <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                    activeStep === s.num ? "bg-purple-primary scale-125" : "bg-purple-faint/30"
                  }`} />
                  <span className={`font-display text-xs font-bold lowercase transition-colors ${
                    activeStep === s.num ? "text-purple-primary font-medium" : "text-purple-faint"
                  }`}>
                    {s.num} — {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Scrolling Process Steps */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {steps.map((step) => (
              <StepCard
                key={step.num}
                num={step.num}
                title={step.title}
                desc={step.desc}
                icon={step.icon}
                onInView={setActiveStep}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
