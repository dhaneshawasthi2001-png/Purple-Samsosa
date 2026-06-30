"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function StatItem({ value, prefix = "", suffix = "", label }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo
        onUpdate(latest) {
          node.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-purple-deep/40 backdrop-blur-md border border-purple-soft/20 ring-1 ring-white/5 rounded-3xl shadow-xl hover:border-purple-primary/50 hover:shadow-2xl transition-all duration-300">
      <span
        ref={ref}
        className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-cream-base block leading-none tracking-tight mb-3 lowercase"
      >
        {prefix}0{suffix}
      </span>
      <p className="font-body text-xs md:text-sm text-purple-faint uppercase tracking-[0.12em] font-semibold max-w-[200px]">
        {label}
      </p>
    </div>
  );
}

export default function StatCounterSection() {
  const stats = [
    { value: 50, suffix: "+", label: "Brands Scaled" },
    { value: 3, suffix: "x", label: "Avg. Client Growth" },
    { value: 10, suffix: "+", label: "Combined Years Experience" },
    { value: 100, suffix: "%", label: "In-House Execution" },
  ];

  return (
    <section className="bg-purple-deep bg-grid-pattern-dark py-24 md:py-32 relative overflow-hidden border-b border-purple-soft/20">
      {/* Noise filter */}
      <div className="grain-overlay" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
