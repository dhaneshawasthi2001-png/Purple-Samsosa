"use client";

import { motion } from "framer-motion";
import { Coffee, Code, Layers, MessageCircle, BarChart3, ShieldCheck } from "lucide-react";

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
    {
      icon: ShieldCheck,
      title: "end-to-end execution",
      desc: "We don't hand off template files and walk away. We write the code, deploy the systems, and manage organic search campaigns daily.",
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-cream-soft border-b border-cream-deep">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block mb-3">
            Why Purple Samosa
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            built for growth.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 mt-3 max-w-xl mx-auto font-normal">
            Generic design agencies don&apos;t understand acquisition funnels. Traditional consultants don&apos;t know visual craft. We combine both.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              key={idx}
              className="bg-cream-base border border-cream-deep p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="text-purple-primary bg-purple-primary/5 p-3 rounded-2xl w-fit">
                  <prop.icon size={28} className="stroke-[1.5]" />
                </div>
                <h3 className="font-display text-xl font-medium lowercase text-ink">
                  {prop.title}
                </h3>
                <p className="font-body text-sm text-ink/75 leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
