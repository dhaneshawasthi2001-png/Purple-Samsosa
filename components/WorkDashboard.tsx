"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, 
  Instagram, 
  Megaphone, 
  Search, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default function WorkDashboard() {
  const [activeTab, setActiveTab] = useState<"branding" | "social" | "ads" | "seo">("branding");

  const tabs = [
    { 
      id: "branding", 
      label: "branding & designing", 
      sublabel: "visual identity & guides",
      icon: Palette 
    },
    { 
      id: "social", 
      label: "social media", 
      sublabel: "aesthetic content grids",
      icon: Instagram 
    },
    { 
      id: "ads", 
      label: "meta ads", 
      sublabel: "paid acquisition creatives",
      icon: Megaphone 
    },
    { 
      id: "seo", 
      label: "SEO visibility", 
      sublabel: "organic rankings & growth",
      icon: Search 
    },
  ] as const;

  // Curated premium mock data grids with exactly 6 high-fidelity images each (forming a clean 3x2 grid)
  const showcaseData = {
    branding: [
      {
        title: "lumina organics",
        category: "skincare packaging design",
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "velo stationery",
        category: "brand assets & identity",
        url: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "mesa tote bag",
        category: "merchandise packaging",
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "nook brandmark",
        category: "visual identity design",
        url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "nectar bottles",
        category: "premium beverage design",
        url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "bistro menu",
        category: "luxury cafe branding",
        url: "https://images.unsplash.com/photo-1590244921253-53f2c510c7ec?auto=format&fit=crop&w=600&q=80"
      },
    ],
    social: [
      {
        title: "daily bowl flatlay",
        category: "food photography & art direction",
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "sol cafe aesthetics",
        category: "lifestyle curation",
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "aura autumn shoot",
        category: "editorial styling & capture",
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "workspace layouts",
        category: "design agency curation",
        url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "zest beverage frames",
        category: "motion design flatlay",
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "linear brand grid",
        category: "template grid assets",
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
    ],
    ads: [
      {
        title: "fresh box campaign",
        category: "instagram stories format ad",
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "sage serum launch",
        category: "facebook feed placement",
        url: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "roam luggage slides",
        category: "carousel promotion design",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "volt fitness ads",
        category: "high-contrast promo graphics",
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "maison seasonal offer",
        category: "lifestyle brand discount banner",
        url: "https://images.unsplash.com/photo-1534452208111-2f354f6a729a?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "atlas app interface",
        category: "lead gen ad screen",
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
      },
    ],
    seo: [
      {
        title: "organic traffic scaling",
        category: "technical audits & core web vitals",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "keyword indexing growth",
        category: "content strategy & domain ranking",
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "conversion path audits",
        category: "user funnel optimization dashboard",
        url: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "local search domination",
        category: "gmb audits & schema markers",
        url: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "performance workstations",
        category: "daily organic search tracking",
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "organic audit overview",
        category: "ranking performance matrix",
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
      },
    ],
  };

  return (
    <section 
      id="work-dashboard" 
      className="py-24 md:py-36 bg-cream-base bg-grid-pattern relative overflow-x-clip border-b border-cream-deep"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-purple-soft/5 blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/2"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Spacious Section Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-purple-primary bg-cream-deep/60 px-5 py-2 rounded-full border border-cream-deep inline-block mb-4">
            our work showcase
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase leading-[1.05]">
            creative outputs. <br />
            <span className="text-purple-primary font-medium">structured results.</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-ink/75 mt-6 leading-relaxed max-w-xl font-normal">
            Take a tour of our visual and technical achievements. Toggle below to review actual project captures, campaigns, and identity sheets.
          </p>
        </div>

        {/* Desktop Sidebar Layout / Mobile Stacks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Navigation Sidebar (3 columns) - Locked (Sticky) on Desktop */}
          <div className="lg:col-span-4 space-y-3 w-full lg:sticky lg:top-32 lg:self-start">
            {/* Mobile Tab Swiper */}
            <div className="lg:hidden overflow-x-auto no-scrollbar flex space-x-3 pb-4">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-body text-sm font-semibold tracking-wide lowercase whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                      isActive 
                        ? "bg-purple-primary text-cream-base border-purple-primary shadow-sm" 
                        : "bg-cream-soft text-purple-soft border-cream-deep hover:bg-cream-deep/50"
                    }`}
                  >
                    <TabIcon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Navigation Stack */}
            <div className="hidden lg:flex flex-col space-y-3">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start space-x-4 group cursor-pointer ${
                      isActive 
                        ? "bg-purple-primary text-cream-base border-purple-primary shadow-md translate-x-1" 
                        : "bg-cream-soft text-ink border-cream-deep hover:bg-cream-deep/50 hover:translate-x-1"
                    }`}
                  >
                    <div className={`p-3 rounded-xl transition-colors ${
                      isActive ? "bg-purple-deep text-cream-base" : "bg-cream-deep text-purple-primary"
                    }`}>
                      <TabIcon size={20} className="stroke-[1.75]" />
                    </div>
                    <div>
                      <h4 className={`font-display text-base font-semibold lowercase tracking-tight ${
                        isActive ? "text-cream-base" : "text-ink"
                      }`}>
                        {tab.label}
                      </h4>
                      <p className={`font-body text-xs mt-1 transition-colors ${
                        isActive ? "text-purple-faint" : "text-ink/65"
                      }`}>
                        {tab.sublabel}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Grid Content Viewer (8 columns) */}
          <div className="lg:col-span-8 w-full">
            <div className="bg-cream-soft rounded-3xl border border-cream-deep p-6 md:p-10 shadow-sm min-h-[500px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Grid Heading */}
                  <div className="flex items-center justify-between border-b border-cream-deep pb-4">
                    <div>
                      <span className="font-mono text-[10px] text-purple-primary/65 uppercase tracking-widest font-bold">
                        active archive
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink lowercase tracking-tight mt-0.5">
                        {tabs.find(t => t.id === activeTab)?.label} project files
                      </h3>
                    </div>
                    <div className="flex items-center space-x-1.5 bg-purple-primary/5 px-3 py-1.5 rounded-full border border-purple-primary/10">
                      <Sparkles size={12} className="text-purple-primary" />
                      <span className="font-body text-[10px] text-purple-primary font-bold uppercase tracking-wider">
                        {showcaseData[activeTab].length} items
                      </span>
                    </div>
                  </div>

                  {/* Compact Portfolio Grid: 3 columns, aspect-square cards */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {showcaseData[activeTab].map((item, idx) => (
                      <div 
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl border border-cream-deep bg-cream-base aspect-square shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
                      >
                        {/* Image container */}
                        <div className="relative w-full h-full">
                          <Image
                            src={item.url}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          
                          {/* Rich glassmorphic overlay on hover */}
                          <div className="absolute inset-0 bg-[#402955]/90 backdrop-blur-[6px] opacity-0 group-hover:opacity-100 transition-all duration-400 p-4 flex flex-col justify-between">
                            <div className="flex justify-end">
                              <div className="bg-cream-base/15 p-1.5 rounded-full border border-cream-base/20 text-cream-base">
                                <ArrowUpRight size={14} />
                              </div>
                            </div>
                            <div>
                              <span className="font-mono text-[8px] uppercase tracking-widest text-purple-faint block mb-0.5">
                                {item.category}
                              </span>
                              <h4 className="font-display text-base font-medium lowercase text-cream-base leading-tight">
                                {item.title}
                              </h4>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
