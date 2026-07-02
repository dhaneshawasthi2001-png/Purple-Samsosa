"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, Sparkles, Send, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const availableServices = [
    "branding",
    "web & app dev",
    "video production",
    "social media",
    "meta ads & seo",
  ];

  const handleServiceToggle = (service: string) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Package details for WhatsApp
    const chosenServices = services.length > 0 ? services.join(", ") : "None selected";
    const textMessage = `Hi Purple Samosa,\n\nI just filled out the contact form on your website:\n\n*Name:* ${name}\n*Email:* ${email}\n*Brand:* ${brand || "N/A"}\n*Services Wanted:* ${chosenServices}\n*Project Brief:* ${message || "N/A"}`;
    
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/918448447408?text=${encodedText}`;

    // Simulate short submission transition
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setStatus("success");
    
    // Clear form
    setName("");
    setEmail("");
    setBrand("");
    setServices([]);
    setMessage("");
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section 
      id="contact" 
      className="py-24 md:py-36 bg-cream-soft text-ink border-t border-cream-deep relative overflow-hidden"
    >
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Decorative ambient glowing spotlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-soft/5 blur-[150px] pointer-events-none select-none"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Details, WhatsApp Callout */}
          <motion.div 
            className="lg:col-span-5 space-y-8 text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4">
              <motion.span 
                variants={itemVariants} 
                className="font-body text-xs font-bold uppercase tracking-[0.2em] text-purple-primary bg-cream-deep/60 px-5 py-2 rounded-full border border-cream-deep inline-block"
              >
                start your project
              </motion.span>
              
              <motion.h2 
                variants={itemVariants} 
                className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tight lowercase"
              >
                ready to build a <br />
                <span className="text-purple-primary">brand people remember?</span>
              </motion.h2>
            </div>

            <motion.p 
              variants={itemVariants} 
              className="font-body text-sm sm:text-base text-ink/75 leading-relaxed font-normal"
            >
              Let&apos;s map out your brand strategy together. Fill out the contact form to request a free creative and digital audit, or hit us up on WhatsApp directly if you want to skip the queue.
            </motion.p>

            {/* Feature Highlights */}
            <motion.ul variants={itemVariants} className="space-y-3 font-body text-xs sm:text-sm text-ink/80">
              <li className="flex items-center">
                <span className="text-[#2ec4b6] mr-3 text-sm">✦</span>
                <span>free digital audit in 48 hours</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#2ec4b6] mr-3 text-sm">✦</span>
                <span>15-minute intro scoping call</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#2ec4b6] mr-3 text-sm">✦</span>
                <span>bespoke visual proposal with zero obligations</span>
              </li>
            </motion.ul>

            {/* Direct Link to WhatsApp */}
            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="https://wa.me/918448447408?text=Hi%20Purple%20Samosa%2C%20I%20would%20like%20to%20get%20a%20free%20audit%20for%20my%20brand."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-cream-deep/50 hover:bg-cream-deep text-purple-primary border border-cream-deep font-body font-semibold text-sm px-6 py-3.5 rounded-full hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <MessageCircle size={16} className="mr-2 text-[#2ec4b6] fill-[#2ec4b6]" />
                chat on whatsapp directly
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form Box */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            <div className="relative bg-cream-soft/60 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-10 border border-cream-deep shadow-xl overflow-hidden min-h-[500px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* Success Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center space-y-6 flex flex-col items-center justify-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#2ec4b6]/10 border border-[#2ec4b6]/25 flex items-center justify-center text-[#2ec4b6] shadow-inner">
                      <Check size={28} className="stroke-[3]" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink lowercase">
                        aura upgrade requested!
                      </h3>
                      <p className="font-body text-sm sm:text-base text-ink/75 max-w-md mx-auto leading-relaxed">
                        thank you for reaching out! we&apos;ve received your brand details. our creative engine is already plotting your upgrade. expect to hear from us in 24 hours. let&apos;s cook! ✦
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setStatus("idle")}
                      className="font-body text-xs font-bold uppercase tracking-wider text-purple-primary hover:text-purple-deep underline underline-offset-4 decoration-[#2ec4b6] cursor-pointer"
                    >
                      submit another request
                    </button>
                  </motion.div>
                ) : (
                  /* The Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Header in Form */}
                    <div className="flex justify-between items-center pb-4 border-b border-cream-deep">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink lowercase">
                        tell us about your brand
                      </h3>
                      <Sparkles size={20} className="text-[#2ec4b6]" />
                    </div>

                    {/* Inputs Row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="font-body text-xs font-bold uppercase tracking-wider text-purple-soft select-none">
                          your name*
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Alexis"
                          className="bg-cream-base/40 border border-cream-deep focus:border-purple-primary focus:bg-cream-base/70 rounded-2xl px-4 py-3.5 text-sm sm:text-base text-ink placeholder-ink/30 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="font-body text-xs font-bold uppercase tracking-wider text-purple-soft select-none">
                          email address*
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. alexis@brand.co"
                          className="bg-cream-base/40 border border-cream-deep focus:border-purple-primary focus:bg-cream-base/70 rounded-2xl px-4 py-3.5 text-sm sm:text-base text-ink placeholder-ink/30 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Inputs Row 2: Brand/Instagram Handle */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="brand" className="font-body text-xs font-bold uppercase tracking-wider text-purple-soft select-none">
                        brand name / website / instagram handle
                      </label>
                      <input
                        id="brand"
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="e.g. @aurabits or aurabits.co"
                        className="bg-cream-base/40 border border-cream-deep focus:border-purple-primary focus:bg-cream-base/70 rounded-2xl px-4 py-3.5 text-sm sm:text-base text-ink placeholder-ink/30 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Input 3: Multi-Select Pill Checklist */}
                    <div className="flex flex-col space-y-3">
                      <span className="font-body text-xs font-bold uppercase tracking-wider text-purple-soft select-none">
                        what are we building? (select all that apply)
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {availableServices.map((service) => {
                          const isSelected = services.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceToggle(service)}
                              className={`font-body text-xs font-semibold px-4.5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer select-none ${
                                isSelected
                                  ? "bg-purple-primary text-cream-base border-purple-primary shadow-sm scale-102"
                                  : "bg-cream-base/30 text-ink/80 border-cream-deep hover:border-purple-soft/50 hover:bg-cream-base/50"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Input 4: Message Textarea */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="font-body text-xs font-bold uppercase tracking-wider text-purple-soft select-none">
                        project brief / what are we cooking?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="tell us your goals, target audience, or raw design inspiration..."
                        className="bg-cream-base/40 border border-cream-deep focus:border-purple-primary focus:bg-cream-base/70 rounded-2xl px-4 py-3.5 text-sm sm:text-base text-ink placeholder-ink/30 focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Validation Error Message */}
                    {status === "error" && (
                      <p className="font-body text-xs text-rose-500 font-bold">
                        ⚠️ Please fill in all required fields (name and email) to proceed.
                      </p>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full inline-flex items-center justify-center bg-purple-primary text-cream-base border border-purple-deep hover:bg-purple-deep font-body font-semibold text-base py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer disabled:opacity-50"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 size={18} className="mr-2 animate-spin text-[#2ec4b6]" />
                            submitting brand details...
                          </>
                        ) : (
                          <>
                            <Send size={16} className="mr-2 text-[#2ec4b6]" />
                            upgrade my brand aura
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
