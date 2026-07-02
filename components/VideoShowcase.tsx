"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles, Flame } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  aspect: "vertical" | "horizontal";
  client: string;
}

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Keep track of DOM elements for play/pause on hover
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const videos: VideoItem[] = [
    {
      id: "video-1",
      title: "social campaign reel 01",
      category: "performance optimization & styling",
      videoUrl: "https://res.cloudinary.com/dmj0smemf/video/upload/v1782889168/AQOsKN4WBaxOp-3vi7IlY04eN8UCkF7yA-r4-rWz5Ni1cmiUY9CvJtlyUXiU_slkLdTLrWyJo_Z4I8ZJYVhN9PHfD4-z6kfv1dZcBBg_dhiclk.mp4",
      thumbnailUrl: "https://res.cloudinary.com/dmj0smemf/video/upload/v1782889168/AQOsKN4WBaxOp-3vi7IlY04eN8UCkF7yA-r4-rWz5Ni1cmiUY9CvJtlyUXiU_slkLdTLrWyJo_Z4I8ZJYVhN9PHfD4-z6kfv1dZcBBg_dhiclk.jpg",
      aspect: "vertical",
      client: "brand campaign",
    },
    {
      id: "video-2",
      title: "social campaign reel 02",
      category: "creative storytelling & pacing",
      videoUrl: "https://res.cloudinary.com/dmj0smemf/video/upload/v1782889835/IMG_0493_gvzgoq.mp4",
      thumbnailUrl: "https://res.cloudinary.com/dmj0smemf/video/upload/v1782889835/IMG_0493_gvzgoq.jpg",
      aspect: "vertical",
      client: "brand story",
    },
    {
      id: "video-3",
      title: "social campaign reel 03",
      category: "brand identity commercial",
      videoUrl: "https://res.cloudinary.com/dmj0smemf/video/upload/v1782889731/AQNGlXXLKwuiRFGAqLLfJYTQl3GmFygqQWJWnq-O5-XXIt7sZNjX5-mqfPJmNQ17yl0e49Hm_ttLmrYj62BcFGLuNVtr-T9K3vwgwXc_nlt9hk.mp4",
      thumbnailUrl: "https://res.cloudinary.com/dmj0smemf/video/upload/v1782889731/AQNGlXXLKwuiRFGAqLLfJYTQl3GmFygqQWJWnq-O5-XXIt7sZNjX5-mqfPJmNQ17yl0e49Hm_ttLmrYj62BcFGLuNVtr-T9K3vwgwXc_nlt9hk.jpg",
      aspect: "vertical",
      client: "organic content",
    },
  ];

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id: string) => {
    setHoveredId(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      // Reset to beginning on leave
      video.currentTime = 0;
    }
  };

  return (
    <section id="video-work" className="py-24 md:py-36 bg-cream-base bg-grid-pattern relative overflow-hidden border-b border-cream-deep">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/3 right-1/4 w-[45vw] h-[45vw] bg-purple-soft/5 blur-[120px] samosa-blob pointer-events-none select-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Elements */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-purple-primary bg-cream-deep/60 px-5 py-2 rounded-full border border-cream-deep inline-block mb-4">
            our work: video showcase
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            visuals that eat. <br />
            <span className="text-purple-primary">zero crumbs left.</span>
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 mt-4 max-w-xl mx-auto font-normal leading-relaxed">
            We direct, shoot, and edit scroll-stopping vertical content designed to hook digital audiences and build massive brand aura.
          </p>
        </div>

        {/* Video Grid Layout / Horizontal Swiper on Mobile */}
        <div className="flex lg:grid overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scroll-smooth no-scrollbar flex-row lg:grid-cols-4 gap-6 lg:gap-8 items-stretch pb-8 lg:pb-0 px-4 md:px-6 lg:px-0 -mx-4 md:-mx-6 lg:mx-0 w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] lg:w-auto">
          
          {/* Vertical Video 1 (col-span-1) */}
          <div className="flex justify-center w-[82vw] sm:w-[320px] lg:w-full shrink-0 lg:shrink snap-center lg:snap-none">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 15 }}
              className="w-full flex flex-col justify-between"
            >
              {/* Phone Mockup Frame */}
              <div 
                className="relative aspect-[9/16] rounded-[2.5rem] border-[8px] border-ink/90 bg-[#070707] shadow-2xl overflow-hidden group cursor-pointer w-full"
                onMouseEnter={() => handleMouseEnter("video-1")}
                onMouseLeave={() => handleMouseLeave("video-1")}
                onClick={() => setActiveVideo(videos[0])}
              >
                {/* Screen Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4.5 bg-ink/90 rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-10 h-1 bg-ink/20 rounded-full" />
                </div>

                {/* Video Container */}
                <div className="absolute inset-0 w-full h-full z-10">
                  <video
                    ref={(el) => { videoRefs.current["video-1"] = el; }}
                    src={videos[0].videoUrl}
                    poster={videos[0].thumbnailUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Darkening */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/25 opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                </div>

                {/* Tap to Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-cream-soft/10 border border-cream-soft/30 backdrop-blur-sm flex items-center justify-center text-cream-soft shadow-inner">
                    <Play size={20} className="fill-cream-soft ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Text info below the video screen */}
              <div className="mt-4 text-center">
                <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-primary flex items-center justify-center gap-1.5">
                  <Flame size={12} className="fill-purple-primary text-purple-primary" />
                  {videos[0].client}
                </span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-ink lowercase mt-1 leading-tight">
                  {videos[0].title}
                </h3>
                <p className="font-body text-xs text-ink/65 lowercase">
                  {videos[0].category}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vertical Video 2 (col-span-1) */}
          <div className="flex justify-center w-[82vw] sm:w-[320px] lg:w-full shrink-0 lg:shrink snap-center lg:snap-none">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.05 }}
              className="w-full flex flex-col justify-between"
            >
              {/* Phone Mockup Frame */}
              <div 
                className="relative aspect-[9/16] rounded-[2.5rem] border-[8px] border-ink/90 bg-[#070707] shadow-2xl overflow-hidden group cursor-pointer w-full"
                onMouseEnter={() => handleMouseEnter("video-2")}
                onMouseLeave={() => handleMouseLeave("video-2")}
                onClick={() => setActiveVideo(videos[1])}
              >
                {/* Screen Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4.5 bg-ink/90 rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-10 h-1 bg-ink/20 rounded-full" />
                </div>

                {/* Video Container */}
                <div className="absolute inset-0 w-full h-full z-10">
                  <video
                    ref={(el) => { videoRefs.current["video-2"] = el; }}
                    src={videos[1].videoUrl}
                    poster={videos[1].thumbnailUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Darkening */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/25 opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                </div>

                {/* Tap to Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-cream-soft/10 border border-cream-soft/30 backdrop-blur-sm flex items-center justify-center text-cream-soft shadow-inner">
                    <Play size={20} className="fill-cream-soft ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Text info below the video screen */}
              <div className="mt-4 text-center">
                <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-primary flex items-center justify-center gap-1.5">
                  <Flame size={12} className="fill-purple-primary text-purple-primary" />
                  {videos[1].client}
                </span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-ink lowercase mt-1 leading-tight">
                  {videos[1].title}
                </h3>
                <p className="font-body text-xs text-ink/65 lowercase">
                  {videos[1].category}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vertical Video 3 (col-span-1) */}
          <div className="flex justify-center w-[82vw] sm:w-[320px] lg:w-full shrink-0 lg:shrink snap-center lg:snap-none">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.1 }}
              className="w-full flex flex-col justify-between"
            >
              {/* Phone Mockup Frame */}
              <div 
                className="relative aspect-[9/16] rounded-[2.5rem] border-[8px] border-ink/90 bg-[#070707] shadow-2xl overflow-hidden group cursor-pointer w-full"
                onMouseEnter={() => handleMouseEnter("video-3")}
                onMouseLeave={() => handleMouseLeave("video-3")}
                onClick={() => setActiveVideo(videos[2])}
              >
                {/* Screen Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4.5 bg-ink/90 rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-10 h-1 bg-ink/20 rounded-full" />
                </div>

                {/* Video Container */}
                <div className="absolute inset-0 w-full h-full z-10">
                  <video
                    ref={(el) => { videoRefs.current["video-3"] = el; }}
                    src={videos[2].videoUrl}
                    poster={videos[2].thumbnailUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Darkening */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/25 opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                </div>

                {/* Tap to Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-cream-soft/10 border border-cream-soft/30 backdrop-blur-sm flex items-center justify-center text-cream-soft shadow-inner">
                    <Play size={20} className="fill-cream-soft ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Text info below the video screen */}
              <div className="mt-4 text-center">
                <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-primary flex items-center justify-center gap-1.5">
                  <Flame size={12} className="fill-purple-primary text-purple-primary" />
                  {videos[2].client}
                </span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-ink lowercase mt-1 leading-tight">
                  {videos[2].title}
                </h3>
                <p className="font-body text-xs text-ink/65 lowercase">
                  {videos[2].category}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Aesthetic Brand Box (col-span-1) */}
          <div className="flex w-[82vw] sm:w-[320px] lg:w-full shrink-0 lg:shrink snap-center lg:snap-none">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.15 }}
              className="bg-purple-deep text-cream-base p-8 rounded-[2.5rem] border border-purple-soft/30 relative overflow-hidden shadow-xl flex flex-col justify-between w-full h-full min-h-[340px]"
            >
              {/* Grain overlay */}
              <div className="grain-overlay opacity-[0.025]" />
              
              <div className="absolute top-6 right-6 text-[#2ec4b6] opacity-35">
                <Sparkles size={28} className="animate-pulse" />
              </div>

              <div className="space-y-4 relative z-10 text-left">
                <h4 className="font-display text-xl sm:text-2xl font-semibold leading-tight lowercase">
                  engineered for retention.
                </h4>
                <p className="font-body text-xs sm:text-sm text-cream-deep/80 leading-relaxed font-normal">
                  In food, beverage, and design, visual pacing is everything. We combine curated art direction with quick-cut formats, elegant custom styling, and crisp edits that optimize for viewer attention.
                </p>
              </div>

              <div className="flex flex-col space-y-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#2ec4b6] pt-6 border-t border-purple-soft/30 relative z-10 text-left">
                <span>✦ vertical campaign formats</span>
                <span>✦ data-backed pacing hooks</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Full-Screen Theatre Lightbox Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative bg-[#000] rounded-3xl overflow-hidden shadow-2xl w-full max-h-[85vh] aspect-[9/16] md:max-w-[420px] border border-cream-deep/15"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Custom Header in Lightbox */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#000]/80 to-transparent z-50 flex items-center justify-between px-6">
                <div>
                  <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#2ec4b6]">
                    {activeVideo.client}
                  </span>
                  <h4 className="font-display text-sm sm:text-base text-cream-soft lowercase leading-tight">
                    {activeVideo.title}
                  </h4>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-10 h-10 rounded-full bg-[#000]/40 border border-cream-soft/20 text-cream-soft flex items-center justify-center hover:bg-cream-soft hover:text-ink transition-colors cursor-pointer"
                  aria-label="Close Player"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Video Player */}
              <video
                src={activeVideo.videoUrl}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
