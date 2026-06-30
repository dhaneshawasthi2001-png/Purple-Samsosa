"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: "Rajluxmi",
      renderLogo: () => (
        <div className="font-serif tracking-[0.16em] text-2xl md:text-3xl text-purple-primary font-semibold uppercase text-center select-none">
          Rajluxmi
        </div>
      ),
      subtext: "brand positioning & identity",
    },
    {
      name: "Dadas Veg",
      renderLogo: () => (
        <div className="font-display tracking-tight text-xl md:text-2xl text-ink font-bold lowercase flex items-center justify-center space-x-1.5 select-none">
          <span>dadas veg</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
      ),
      subtext: "performance marketing & ad campaigns",
    },
    {
      name: "Nuttmeeg Bakers",
      renderLogo: () => (
        <div className="font-body tracking-wider text-lg md:text-xl text-purple-soft font-semibold lowercase italic flex items-center justify-center space-x-2 select-none">
          <span>nuttmeeg bakers</span>
        </div>
      ),
      subtext: "e-commerce web engineering",
    },
    {
      name: "Frankfinn",
      renderLogo: () => (
        <div className="font-display tracking-[0.2em] text-sm md:text-base text-ink font-bold uppercase text-center flex flex-col items-center select-none">
          <span>frankfinn</span>
          <span className="text-[9px] tracking-[0.12em] font-body text-purple-faint font-semibold uppercase mt-0.5">
            airhostess academy
          </span>
        </div>
      ),
      subtext: "local search & lead generation",
    },
    {
      name: "Diamonds Dream Academy",
      renderLogo: () => (
        <div className="font-display tracking-wide text-base md:text-lg text-purple-deep font-semibold lowercase text-center flex flex-col items-center select-none">
          <div className="flex items-center space-x-1.5">
            <span className="text-xs text-purple-soft">◆</span>
            <span>diamonds dream</span>
            <span className="text-xs text-purple-soft">◆</span>
          </div>
          <span className="text-[10px] tracking-[0.1em] font-body text-purple-soft font-medium uppercase mt-0.5">
            academy
          </span>
        </div>
      ),
      subtext: "social media scaling & content",
    },
    {
      name: "Adalat",
      renderLogo: () => (
        <div className="font-serif tracking-widest text-xl md:text-2xl text-ink font-bold uppercase text-center border-y border-ink/10 py-1.5 px-5 select-none">
          Adalat
        </div>
      ),
      subtext: "search ranking & authority",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = 320; // width of card + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="work" className="py-24 md:py-36 bg-cream-base bg-grid-pattern border-b border-cream-deep relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block mb-3">
            our clients
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            brands we&apos;ve helped grow.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 mt-3 max-w-xl mx-auto font-normal">
            Helping brands build distinct identities, scale their digital presence, and engineer high-performance acquisition systems.
          </p>

          {/* Slider Arrow Controls */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 border border-cream-deep rounded-full bg-cream-soft text-purple-soft hover:bg-cream-base hover:text-purple-primary transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 border border-cream-deep rounded-full bg-cream-soft text-purple-soft hover:bg-cream-base hover:text-purple-primary transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Logo Track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] flex flex-col justify-between p-8 bg-cream-soft/75 backdrop-blur-sm border border-cream-deep rounded-3xl shadow-sm hover:border-purple-primary/30 transition-all duration-300 scroll-snap-align-start group"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Typographic Logo Frame */}
              <div className="h-[120px] w-full flex items-center justify-center bg-cream-base/50 rounded-2xl border border-cream-deep/40 group-hover:bg-cream-base transition-colors duration-300">
                {client.renderLogo()}
              </div>

              {/* Label Info */}
              <div className="mt-6 text-center">
                <span className="font-body text-xs font-bold uppercase tracking-wider text-purple-soft select-none block">
                  {client.subtext}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
