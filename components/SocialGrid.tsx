"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, X, Instagram, Share2, Award, Facebook } from "lucide-react";

interface SocialPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  hashtag: string;
  caption: string;
  date: string;
}

export default function SocialGrid() {
  const [posts, setPosts] = useState<SocialPost[]>([
    {
      id: "post-1",
      imageUrl: "https://res.cloudinary.com/dmj0smemf/image/upload/v1782888960/WhatsApp_Image_2026-07-01_at_12.04.31_PM_hutafb.jpg",
      likes: 843,
      comments: 64,
      hashtag: "#curation",
      caption: "visual content curation for our brand partners. clean layouts and aesthetic food curation. ✦",
      date: "2 HOURS AGO",
    },
    {
      id: "post-2",
      imageUrl: "https://res.cloudinary.com/dmj0smemf/image/upload/v1782888960/WhatsApp_Image_2026-07-01_at_12.08.14_PM_wfjb1m.jpg",
      likes: 1205,
      comments: 118,
      hashtag: "#branding",
      caption: "bespoke graphic templates designed to drive active user engagement. ✦",
      date: "1 DAY AGO",
    },
    {
      id: "post-3",
      imageUrl: "https://res.cloudinary.com/dmj0smemf/image/upload/v1782888960/WhatsApp_Image_2026-07-01_at_12.25.30_PM_bforfs.jpg",
      likes: 954,
      comments: 47,
      hashtag: "#photography",
      caption: "editorial lifestyle photography. styling and direction that tells a story. ✦",
      date: "3 DAYS AGO",
    },
    {
      id: "post-4",
      imageUrl: "https://res.cloudinary.com/dmj0smemf/image/upload/v1782888960/WhatsApp_Image_2026-07-01_at_12.22.04_PM_gwi57k.jpg",
      likes: 1542,
      comments: 139,
      hashtag: "#packaging",
      caption: "premium beverage packaging design close-up. detail-oriented execution. ✦",
      date: "5 DAYS AGO",
    },
    {
      id: "post-5",
      imageUrl: "https://res.cloudinary.com/dmj0smemf/image/upload/v178288961/WhatsApp_Image_2026-07-01_at_12.22.03_PM_fds0ok.jpg", // Wait, in the user's prompt the URL was https://res.cloudinary.com/dmj0smemf/image/upload/v1782888961/WhatsApp_Image_2026-07-01_at_12.22.03_PM_fds0ok.jpg - note 1782888961 instead of 1782888960. Yes, let's keep the exact URL.
      likes: 1109,
      comments: 72,
      hashtag: "#strategy",
      caption: "digital grids structured for high-performance organic reach. ✦",
      date: "1 WEEK AGO",
    },
    {
      id: "post-6",
      imageUrl: "https://res.cloudinary.com/dmj0smemf/image/upload/v1782889563/WhatsApp_Image_2026-07-01_at_12.33.30_PM_pyfik0.jpg",
      likes: 2108,
      comments: 204,
      hashtag: "#identity",
      caption: "bold typography and visual identity guides that elevate digital presence. ✦",
      date: "2 WEEKS AGO",
    },
  ]);

  const [activePost, setActivePost] = useState<SocialPost | null>(null);
  const [likeAnimateId, setLikeAnimateId] = useState<string | null>(null);
  const [hasLiked, setHasLiked] = useState<{ [key: string]: boolean }>({});

  const handleDoubleTap = (id: string) => {
    // Only trigger if not already liked recently in this click
    setLikeAnimateId(id);
    
    // Set liked state
    if (!hasLiked[id]) {
      setHasLiked(prev => ({ ...prev, [id]: true }));
      setPosts(prev => prev.map(post => {
        if (post.id === id) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      }));
    }

    // Clear animation after 800ms
    setTimeout(() => {
      setLikeAnimateId(null);
    }, 800);
  };

  const handleHeartClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasLiked[id]) {
      setHasLiked(prev => ({ ...prev, [id]: false }));
      setPosts(prev => prev.map(post => {
        if (post.id === id) {
          return { ...post, likes: post.likes - 1 };
        }
        return post;
      }));
    } else {
      setHasLiked(prev => ({ ...prev, [id]: true }));
      setPosts(prev => prev.map(post => {
        if (post.id === id) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      }));
      setLikeAnimateId(id);
      setTimeout(() => setLikeAnimateId(null), 800);
    }
  };

  return (
    <section id="social-work" className="py-24 md:py-36 bg-cream-soft relative overflow-hidden">
      {/* Background radial soft aura glow */}
      <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] bg-purple-soft/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Elements */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-purple-primary bg-cream-deep/60 px-5 py-2 rounded-full border border-cream-deep inline-block mb-4">
            our work: social media grid
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            social grids that hook. <br />
            <span className="text-purple-primary">curated to stand out.</span>
          </h2>
          <p className="font-body text-sm md:text-base text-ink/70 mt-4 max-w-xl mx-auto font-normal leading-relaxed">
            We structure aesthetic Instagram feeds, direct organic capture, and run content systems that convert passive scrollers into hyper-loyal brand fans.
          </p>
        </div>

        {/* Curation Hint */}
        <div className="flex items-center justify-center space-x-2 text-xs text-purple-soft font-body italic mb-6 animate-pulse">
          <Award size={14} className="text-[#2ec4b6]" />
          <span>Double-click any post to like & drop a heart</span>
        </div>

        {/* Instagrid 3x2 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto pb-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 15 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-cream-deep bg-cream-deep/40 group shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer select-none w-full"
              onDoubleClick={() => handleDoubleTap(post.id)}
              onClick={() => setActivePost(post)}
            >
              {/* Image element */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Hover Dark Glass Overlay with Metrics */}
              <div className="absolute inset-0 bg-ink/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 backdrop-blur-[2px] z-10">
                <div className="flex justify-between items-start">
                  <span className="font-body text-xs font-bold text-[#2ec4b6] uppercase tracking-wider bg-[#2ec4b6]/10 px-3 py-1 rounded-full border border-[#2ec4b6]/25">
                    {post.hashtag}
                  </span>
                  <Instagram size={18} className="text-cream-deep/50" />
                </div>

                <div className="flex items-center justify-center space-x-8 text-cream-base py-8">
                  <div className="flex items-center space-x-2">
                    <Heart 
                      size={24} 
                      className={`transition-colors duration-200 cursor-pointer ${
                        hasLiked[post.id] ? "fill-rose-500 text-rose-500" : "text-cream-base hover:text-rose-400"
                      }`} 
                      onClick={(e) => handleHeartClick(post.id, e)}
                    />
                    <span className="font-display font-semibold text-lg">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle size={24} className="text-cream-base hover:text-cyan-400 cursor-pointer" />
                    <span className="font-display font-semibold text-lg">{post.comments}</span>
                  </div>
                </div>

                <p className="font-body text-xs text-cream-deep/80 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>

              {/* Double Click Heart Overlay Animation */}
              <AnimatePresence>
                {likeAnimateId === post.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: [0.3, 1.2, 1] }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                  >
                    <Heart size={80} className="fill-rose-500 text-rose-500 filter drop-shadow-lg" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Brand Social Connections */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 max-w-lg mx-auto">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.instagram.com/purplesamosaaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-body font-bold text-sm bg-purple-primary text-cream-base px-8 py-4 rounded-full hover:bg-purple-deep hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group"
          >
            <Instagram size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Follow us on Instagram</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.facebook.com/share/1CxT1qz98n/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-body font-bold text-sm border-2 border-purple-primary/30 text-purple-primary bg-transparent px-8 py-4 rounded-full hover:border-purple-primary hover:bg-purple-primary hover:text-cream-base hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group"
          >
            <Facebook size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Connect on Facebook</span>
          </motion.a>
        </div>

      </div>

      {/* Social Zoom Box Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative bg-cream-soft rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-4xl border border-cream-deep max-h-[85vh] grid grid-cols-1 md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button absolute inside modal */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-ink/10 border border-ink/5 text-ink flex items-center justify-center hover:bg-ink hover:text-cream-base transition-colors cursor-pointer z-50"
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              {/* Left Column: Image with double tap to like */}
              <div 
                className="relative aspect-square w-full h-full bg-[#000] cursor-pointer"
                onDoubleClick={() => handleDoubleTap(activePost.id)}
              >
                <Image
                  src={activePost.imageUrl}
                  alt={activePost.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Double click heart animation inside modal */}
                <AnimatePresence>
                  {likeAnimateId === activePost.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.3 }}
                      animate={{ opacity: 1, scale: [0.3, 1.2, 1] }}
                      exit={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                    >
                      <Heart size={100} className="fill-rose-500 text-rose-500 filter drop-shadow-2xl" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column: Feed Style Info */}
              <div className="p-8 md:p-10 flex flex-col justify-between h-full bg-cream-soft">
                <div className="space-y-6">
                  {/* Account Header */}
                  <a 
                    href="https://www.instagram.com/purplesamosaaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 pb-4 border-b border-cream-deep group/header cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-primary text-cream-base flex items-center justify-center font-display font-bold text-sm tracking-tighter transition-transform group-hover/header:scale-105">
                      PS
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-ink lowercase flex items-center space-x-1.5 group-hover/header:text-purple-primary transition-colors">
                        <span>purplesamosa.co</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-primary" />
                      </h4>
                      <p className="font-body text-[10px] text-purple-soft font-semibold uppercase tracking-wider">
                        creative content engine
                      </p>
                    </div>
                  </a>

                  {/* Caption */}
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2">
                    <p className="font-body text-sm text-ink/85 leading-relaxed font-normal">
                      <a 
                        href="https://www.instagram.com/purplesamosaaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-bold lowercase mr-1.5 hover:text-purple-primary transition-colors cursor-pointer"
                      >
                        purplesamosa.co
                      </a>
                      {activePost.caption}
                    </p>
                    <p className="font-body text-xs text-purple-primary font-bold">
                      {activePost.hashtag} #creativeagency #foodstyling #branddesign
                    </p>
                  </div>
                </div>

                {/* Like / Comment Panel */}
                <div className="pt-6 border-t border-cream-deep space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-5 text-ink">
                      <button 
                        onClick={(e) => handleHeartClick(activePost.id, e)}
                        className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer flex items-center"
                        aria-label="Like Post"
                      >
                        <Heart 
                          size={24} 
                          className={hasLiked[activePost.id] ? "fill-rose-500 text-rose-500" : "text-ink"} 
                        />
                      </button>
                      <button 
                        className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                        aria-label="Comment on Post"
                      >
                        <MessageCircle size={24} />
                      </button>
                      <button 
                        className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                        aria-label="Share Post"
                      >
                        <Share2 size={24} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-display font-extrabold text-sm text-ink lowercase">
                      {posts.find(p => p.id === activePost.id)?.likes} likes
                    </h5>
                    <p className="font-body text-[9px] text-ink/40 tracking-wider font-semibold mt-1">
                      {activePost.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
