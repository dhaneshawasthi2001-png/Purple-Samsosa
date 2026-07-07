"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, Monitor, Instagram, Search, Sparkles, Box, Megaphone, TrendingUp, ArrowRight } from "lucide-react";

export default function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Translate horizontal track based on vertical scroll progress
  const xTransform = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-78%"]);

  const services = [
    {
      icon: Sparkles,
      title: "brand identity systems",
      desc: "A logo isn't a brand. We build the full system — name, visual language, tone of voice — so your brand looks and sounds like itself everywhere it shows up.",
      highlight: "visual architecture",
      tags: ["Naming Architect", "Guidelines Docs", "Positioning Models"],
      isDark: true,
      bgClass: "bg-gradient-to-br from-[#362348] via-[#2A1B3A] to-[#1A1024] text-cream-base border-purple-soft/30 hover:border-purple-primary/70 shadow-[0_8px_30px_rgba(54,35,72,0.15)]",
      iconColor: "text-cream-base",
      accent: "text-[#FFB800]",
    },
    {
      icon: Instagram,
      title: "social media strategy",
      desc: "Feeds don't grow from posting more — they grow from posting on purpose. We build content systems that turn casual scrollers into people who show up for your brand on repeat.",
      highlight: "content engines",
      tags: ["Gen Z Creative", "Aesthetic Grids", "KOL Outreach"],
      isDark: false,
      bgClass: "bg-gradient-to-br from-[#FDFBF7] via-[#F7F2EB] to-[#EFE6D7] text-ink border-cream-deep/60 hover:border-purple-primary/45 shadow-[0_8px_30px_rgba(0,0,0,0.02)]",
      iconColor: "text-purple-primary",
      accent: "text-purple-soft",
    },
    {
      icon: BarChart3,
      title: "performance marketing",
      desc: "Every rupee of ad spend should know why it's there. We build campaigns around what your customers actually do before they buy — not around a media plan that looks good in a deck.",
      highlight: "paid acquisition",
      tags: ["ROI Bidding", "Paid Ads", "Conversion Rate"],
      isDark: true,
      bgClass: "bg-gradient-to-br from-[#362348] via-[#2A1B3A] to-[#1A1024] text-cream-base border-purple-soft/30 hover:border-purple-primary/70 shadow-[0_8px_30px_rgba(54,35,72,0.15)]",
      iconColor: "text-cream-base",
      accent: "text-[#FFB800]",
    },
    {
      icon: Search,
      title: "search engine optimization",
      desc: "Ranking for the wrong keyword is just decoration. We chase the searches your actual customers type when they're ready to buy — local and global.",
      highlight: "organic traffic",
      tags: ["Local & Global", "Page Rankings", "Backlink Strategy"],
      isDark: false,
      bgClass: "bg-gradient-to-br from-[#FDFBF7] via-[#F7F2EB] to-[#EFE6D7] text-ink border-cream-deep/60 hover:border-purple-primary/45 shadow-[0_8px_30px_rgba(0,0,0,0.02)]",
      iconColor: "text-purple-primary",
      accent: "text-purple-soft",
    },
    {
      icon: Box,
      title: "creative asset design",
      desc: "Packaging, pitch decks, menus, banners — every asset your brand touches gets the same level of craft, because customers notice the ones that don't.",
      highlight: "print & digital layout",
      tags: ["Packaging Layouts", "Pitches & Decks", "Corporate Prints"],
      isDark: true,
      bgClass: "bg-gradient-to-br from-[#362348] via-[#2A1B3A] to-[#1A1024] text-cream-base border-purple-soft/30 hover:border-purple-primary/70 shadow-[0_8px_30px_rgba(54,35,72,0.15)]",
      iconColor: "text-cream-base",
      accent: "text-[#FFB800]",
    },
    {
      icon: Monitor,
      title: "web & app development",
      desc: "A website's job is to convert, not to just exist. We build sites fast enough to hold attention and structured enough to turn a scroll into an order.",
      highlight: "full-stack engineering",
      tags: ["Next.js / React", "Web Apps", "SEO Codebase"],
      isDark: false,
      bgClass: "bg-gradient-to-br from-[#FDFBF7] via-[#F7F2EB] to-[#EFE6D7] text-ink border-cream-deep/60 hover:border-purple-primary/45 shadow-[0_8px_30px_rgba(0,0,0,0.02)]",
      iconColor: "text-purple-primary",
      accent: "text-purple-soft",
    },
    {
      icon: Megaphone,
      title: "pr & communications",
      desc: "Being good isn't the same as being known. We get your brand in front of the rooms, publications, and people that build credibility faster than any ad can.",
      highlight: "media coverage",
      tags: ["Media Pitching", "Credibility Press", "PR Releases"],
      isDark: true,
      bgClass: "bg-gradient-to-br from-[#362348] via-[#2A1B3A] to-[#1A1024] text-cream-base border-purple-soft/30 hover:border-purple-primary/70 shadow-[0_8px_30px_rgba(54,35,72,0.15)]",
      iconColor: "text-cream-base",
      accent: "text-[#FFB800]",
    },
    {
      icon: TrendingUp,
      title: "growth auditing & funnels",
      desc: "Before we build anything new, we find out exactly where you're losing customers. Most growth problems aren't visibility problems — they're leaks nobody mapped.",
      highlight: "strategic diagnostic",
      tags: ["Conversion Funnels", "Acquisition Audit", "Growth Plans"],
      isDark: false,
      bgClass: "bg-gradient-to-br from-[#FDFBF7] via-[#F7F2EB] to-[#EFE6D7] text-ink border-cream-deep/60 hover:border-purple-primary/45 shadow-[0_8px_30px_rgba(0,0,0,0.02)]",
      iconColor: "text-purple-primary",
      accent: "text-purple-soft",
    },
  ];

  return (
    <div
      ref={containerRef}
      id="services"
      className={`relative w-full bg-cream-base bg-grid-pattern ${isMobile ? "py-20" : "h-[280vh]"}`}
    >
      {/* Sticky Frame for Desktop Scrolling */}
      <div className={`${isMobile ? "relative" : "sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-6 md:px-8 max-w-[1280px] mx-auto"}`}>
        
        {/* Header Elements */}
        <div className="mb-10 text-center max-w-3xl mx-auto px-4">
          <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-purple-primary block mb-3">
            our services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            explore what we do.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/75 mt-3 max-w-xl mx-auto font-normal">
            Eight disciplines, one accountable team. No handoffs, no diluted briefs, no &quot;that&apos;s a different department.&quot;
          </p>
        </div>

        {/* Scrollable grid/stacked layout */}
        {isMobile ? (
          /* Mobile Horizontal Two-Row Layout */
          <div className="flex flex-col space-y-8 px-4 overflow-hidden">
            
            {/* Row 1: First 4 services */}
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-5 pb-4 px-1 -mx-4 w-[calc(100%+2rem)] flex-row">
              {services.slice(0, 4).map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
                  key={index}
                  className={`w-[85vw] sm:w-[310px] shrink-0 snap-center rounded-[32px] border p-7 flex flex-col justify-between min-h-[350px] shadow-sm relative overflow-hidden group ${service.bgClass}`}
                >
                  {/* Background Samosa Outline Watermark */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.06] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <img
                      src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782995848/file_00000000df44720bb2584d0deccd5d90_e1jfy8.png"
                      alt="Samosa Outline"
                      className={`w-full h-full object-contain ${service.isDark ? "invert brightness-200" : "brightness-0"}`}
                    />
                  </div>

                  <div className="space-y-5 relative z-10 text-left">
                    <div className={`p-3.5 rounded-2xl w-fit transition-all duration-300 ${
                      service.isDark
                        ? "bg-purple-primary/30 text-cream-base border border-purple-soft/30"
                        : "bg-cream-deep/40 text-purple-primary border border-cream-deep/60"
                    }`}>
                      <service.icon size={22} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-medium leading-tight">
                        {service.title}
                      </h3>
                      
                      {/* Visual Tags */}
                      <div className="flex flex-wrap gap-1">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              service.isDark
                                ? "bg-purple-primary/20 text-cream-soft/90 border-purple-soft/30"
                                : "bg-purple-primary/5 text-purple-primary border-purple-primary/10"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="font-body text-xs opacity-80 leading-relaxed pt-1">
                      {service.desc}
                    </p>
                  </div>

                  {/* Explore link */}
                  <div className={`flex items-center gap-1.5 pt-3 border-t mt-4 relative z-10 ${
                    service.isDark ? "border-purple-soft/20" : "border-cream-deep/40"
                  }`}>
                    <span className={`font-body text-[10px] font-bold uppercase tracking-wider ${
                      service.isDark ? "text-cream-soft/85" : "text-purple-soft"
                    }`}>
                      Explore Service
                    </span>
                    <ArrowRight size={12} className={service.isDark ? "text-[#FFB800]" : "text-purple-primary"} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: Last 4 services */}
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-5 pb-4 px-1 -mx-4 w-[calc(100%+2rem)] flex-row">
              {services.slice(4, 8).map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
                  key={index + 4}
                  className={`w-[85vw] sm:w-[310px] shrink-0 snap-center rounded-[32px] border p-7 flex flex-col justify-between min-h-[350px] shadow-sm relative overflow-hidden group ${service.bgClass}`}
                >
                  {/* Background Samosa Outline Watermark */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.06] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <img
                      src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782995848/file_00000000df44720bb2584d0deccd5d90_e1jfy8.png"
                      alt="Samosa Outline"
                      className={`w-full h-full object-contain ${service.isDark ? "invert brightness-200" : "brightness-0"}`}
                    />
                  </div>

                  <div className="space-y-5 relative z-10 text-left">
                    <div className={`p-3.5 rounded-2xl w-fit transition-all duration-300 ${
                      service.isDark
                        ? "bg-purple-primary/30 text-cream-base border border-purple-soft/30"
                        : "bg-cream-deep/40 text-purple-primary border border-cream-deep/60"
                    }`}>
                      <service.icon size={22} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-medium leading-tight">
                        {service.title}
                      </h3>
                      
                      {/* Visual Tags */}
                      <div className="flex flex-wrap gap-1">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              service.isDark
                                ? "bg-purple-primary/20 text-cream-soft/90 border-purple-soft/30"
                                : "bg-purple-primary/5 text-purple-primary border-purple-primary/10"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="font-body text-xs opacity-80 leading-relaxed pt-1">
                      {service.desc}
                    </p>
                  </div>

                  {/* Explore link */}
                  <div className={`flex items-center gap-1.5 pt-3 border-t mt-4 relative z-10 ${
                    service.isDark ? "border-purple-soft/20" : "border-cream-deep/40"
                  }`}>
                    <span className={`font-body text-[10px] font-bold uppercase tracking-wider ${
                      service.isDark ? "text-cream-soft/85" : "text-purple-soft"
                    }`}>
                      Explore Service
                    </span>
                    <ArrowRight size={12} className={service.isDark ? "text-[#FFB800]" : "text-purple-primary"} />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ) : (
          /* Desktop Scroll-Pinned Horizontal Slider */
          <div className="relative w-full h-[450px] overflow-hidden flex items-center">
            <motion.div
              style={{ x: xTransform }}
              className="flex gap-8 w-max select-none pr-8 md:pr-16"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-[360px] md:w-[390px] h-[410px] flex-shrink-0 rounded-[32px] border p-8 flex flex-col justify-between shadow-md relative overflow-hidden cursor-pointer group ${service.bgClass}`}
                >
                  {/* Background Samosa Outline Watermark */}
                  <div className="absolute -bottom-8 -right-8 w-44 h-44 opacity-[0.04] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <img
                      src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782995848/file_00000000df44720bb2584d0deccd5d90_e1jfy8.png"
                      alt="Samosa Outline"
                      className={`w-full h-full object-contain ${service.isDark ? "invert brightness-200" : "brightness-0"}`}
                    />
                  </div>

                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`p-3.5 rounded-2xl transition-all duration-300 ${
                        service.isDark
                          ? "bg-purple-primary/30 text-cream-base border border-purple-soft/30 group-hover:bg-[#FFB800] group-hover:text-purple-deep group-hover:border-[#FFB800]/20 group-hover:shadow-[0_0_15px_rgba(255,184,0,0.3)]"
                          : "bg-cream-deep/40 text-purple-primary border border-cream-deep/60 group-hover:bg-purple-primary group-hover:text-cream-base group-hover:border-purple-primary/20 group-hover:shadow-[0_0_15px_rgba(64,41,85,0.25)]"
                      }`}>
                        <service.icon size={24} />
                      </div>
                      <span className={`font-body text-sm font-bold uppercase tracking-widest ${service.accent}`}>
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-medium leading-tight">
                        {service.title}
                      </h3>
                      
                      {/* Visual Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${
                              service.isDark
                                ? "bg-purple-primary/20 text-cream-soft/90 border-purple-soft/30"
                                : "bg-purple-primary/5 text-purple-primary border-purple-primary/10"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-4 pt-3">
                    <p className="font-body text-xs md:text-sm opacity-80 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Explore button/link */}
                  <div className={`flex items-center gap-2 pt-4 border-t relative z-10 transition-colors duration-300 ${
                    service.isDark ? "border-purple-soft/20" : "border-cream-deep/40"
                  }`}>
                    <span className={`font-body text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      service.isDark 
                        ? "text-cream-soft/80 group-hover:text-white group-hover:translate-x-1" 
                        : "text-purple-soft group-hover:text-purple-primary group-hover:translate-x-1"
                    }`}>
                      Explore Service
                    </span>
                    <ArrowRight size={14} className={`transition-all duration-300 ${
                      service.isDark
                        ? "text-[#FFB800] group-hover:translate-x-2"
                        : "text-purple-primary group-hover:translate-x-2"
                    }`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
