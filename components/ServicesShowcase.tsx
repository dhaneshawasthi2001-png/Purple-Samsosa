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
      icon: BarChart3,
      title: "performance marketing",
      desc: "Paid acquisition, PPC, ROI-driven performance campaigns, and client conversion analytics to scale customer acquisition.",
      highlight: "paid acquisition",
      bgClass: "bg-purple-deep/95 backdrop-blur-md border border-purple-soft/40 ring-1 ring-purple-faint/10 text-cream-base shadow-[0_8px_30px_rgba(54,35,72,0.2)] hover:border-purple-primary/60",
      iconColor: "text-cream-base",
      accent: "text-purple-faint",
    },
    {
      icon: Monitor,
      title: "web & app development",
      desc: "Fast, responsive, high-converting websites and custom applications designed to convert traffic into revenue.",
      highlight: "full-stack engineering",
      bgClass: "bg-cream-soft/95 backdrop-blur-md border border-cream-deep/60 ring-1 ring-cream-base/10 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-purple-primary/45",
      iconColor: "text-purple-primary",
      accent: "text-purple-soft",
    },
    {
      icon: Instagram,
      title: "social media strategy",
      desc: "Thumb-stopping content, aesthetic brand grids, active community growth, and influencer relationship campaigns.",
      highlight: "content engines",
      bgClass: "bg-purple-deep/95 backdrop-blur-md border border-purple-soft/40 ring-1 ring-purple-faint/10 text-cream-base shadow-[0_8px_30px_rgba(54,35,72,0.2)] hover:border-purple-primary/60",
      iconColor: "text-cream-base",
      accent: "text-purple-faint",
    },
    {
      icon: Search,
      title: "search engine optimization",
      desc: "Local search and global organic discovery rankings to direct high-intent search traffic straight to your product pages.",
      highlight: "organic traffic",
      bgClass: "bg-cream-soft/95 backdrop-blur-md border border-cream-deep/60 ring-1 ring-cream-base/10 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-purple-primary/45",
      iconColor: "text-purple-primary",
      accent: "text-purple-soft",
    },
    {
      icon: Sparkles,
      title: "brand identity systems",
      desc: "Naming, visual identity architectures, tone of voice guidelines, and positioning models that build customer memory.",
      highlight: "visual architecture",
      bgClass: "bg-purple-deep/95 backdrop-blur-md border border-purple-soft/40 ring-1 ring-purple-faint/10 text-cream-base shadow-[0_8px_30px_rgba(54,35,72,0.2)] hover:border-purple-primary/60",
      iconColor: "text-cream-base",
      accent: "text-purple-faint",
    },
    {
      icon: Box,
      title: "creative asset design",
      desc: "Physical package prints, digital layouts, pitches, and corporate assets crafted with pixel-precise attention to detail.",
      highlight: "print & digital layout",
      bgClass: "bg-cream-soft/95 backdrop-blur-md border border-cream-deep/60 ring-1 ring-cream-base/10 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-purple-primary/45",
      iconColor: "text-purple-primary",
      accent: "text-purple-soft",
    },
    {
      icon: Megaphone,
      title: "pr & communications",
      desc: "Strategic media outreach, PR releases, brand feature placements, and credibility campaigns to build brand trust.",
      highlight: "media coverage",
      bgClass: "bg-purple-deep/95 backdrop-blur-md border border-purple-soft/40 ring-1 ring-purple-faint/10 text-cream-base shadow-[0_8px_30px_rgba(54,35,72,0.2)] hover:border-purple-primary/60",
      iconColor: "text-cream-base",
      accent: "text-purple-faint",
    },
    {
      icon: TrendingUp,
      title: "growth auditing & funnels",
      desc: "Operational conversion funnel diagnostics, client acquisition analysis, and structured business growth plans.",
      highlight: "strategic diagnostic",
      bgClass: "bg-cream-soft/95 backdrop-blur-md border border-cream-deep/60 ring-1 ring-cream-base/10 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-purple-primary/45",
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
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block mb-3">
            our services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            explore what we do.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 mt-3 max-w-xl mx-auto font-normal">
            From performance campaign bidding and web engineering to creative PR positioning and visual design assets.
          </p>
        </div>

        {/* Scrollable grid/stacked layout */}
        {isMobile ? (
          /* Mobile Stacked Layout with standard scroll-in */
          <div className="flex flex-col space-y-6 px-4">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
                key={index}
                className={`w-full rounded-3xl border p-8 flex flex-col justify-between min-h-[300px] shadow-sm relative overflow-hidden ${service.bgClass}`}
              >
                {/* Background Samosa Triangle watermark */}
                <div className="absolute -bottom-16 -right-16 opacity-5 pointer-events-none select-none">
                  <service.icon size={220} className="stroke-[1.5]" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className={`p-4 bg-purple-primary/10 w-fit rounded-2xl ${service.iconColor}`}>
                    <service.icon size={28} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-medium lowercase leading-tight">
                      {service.title}
                    </h3>
                    <p className={`font-body text-xs font-semibold uppercase tracking-wider ${service.accent}`}>
                      {service.highlight}
                    </p>
                  </div>

                  <p className="font-body text-sm opacity-80 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop Scroll-Pinned Horizontal Slider */
          <div className="relative w-full h-[360px] md:h-[400px] overflow-hidden flex items-center">
            <motion.div
              style={{ x: xTransform }}
              className="flex gap-8 w-max select-none pr-8 md:pr-16"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-[340px] md:w-[380px] h-[340px] flex-shrink-0 rounded-3xl border p-8 flex flex-col justify-between shadow-md relative overflow-hidden cursor-pointer ${service.bgClass}`}
                >
                  {/* Background Samosa Triangle watermark */}
                  <div className="absolute -bottom-12 -right-12 opacity-[0.03] pointer-events-none select-none">
                    <service.icon size={180} className="stroke-[1]" />
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-purple-primary/10 rounded-2xl text-purple-primary">
                        <service.icon size={26} className={service.iconColor} />
                      </div>
                      <span className={`font-body text-xs font-bold uppercase tracking-widest ${service.accent}`}>
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-medium lowercase leading-tight">
                        {service.title}
                      </h3>
                      <p className={`font-body text-xs font-semibold uppercase tracking-[0.08em] ${service.accent}`}>
                        {service.highlight}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-4 pt-3 border-t border-purple-soft/10">
                    <p className="font-body text-xs md:text-sm opacity-80 leading-relaxed">
                      {service.desc}
                    </p>
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
