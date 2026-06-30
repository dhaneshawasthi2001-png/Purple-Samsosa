"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-cream-deep/60 py-6 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base sm:text-lg font-medium lowercase text-ink group-hover:text-purple-primary transition-colors">
          {question}
        </span>
        <span 
          className="ml-4 text-purple-soft group-hover:text-purple-primary transition-transform duration-300 flex-shrink-0"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <Plus size={20} className="stroke-[1.5]" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-xs sm:text-sm text-ink/75 leading-relaxed pt-3 max-w-3xl font-normal">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      question: "what services does purple samosa offer?",
      answer: "We offer end-to-end creative growth services: branding and identity design, custom website and web app development, performance marketing, search engine optimization (SEO), social media strategy, and public relations (PR) positioning.",
    },
    {
      question: "who do you work with?",
      answer: "We work with ambitious businesses across all niches—from tech startups and retail brands to professional service firms and consumer product companies looking to scale their digital footprint and build a memorable brand.",
    },
    {
      question: "how does your performance marketing management work?",
      answer: "We run structured, data-first growth campaigns. We analyze market intent, optimize conversion paths, manage paid acquisition channels, run SEO campaigns, and set up advanced analytics dashboards to maximize return on ad spend (ROAS) and client acquisition.",
    },
    {
      question: "what are your average project timelines?",
      answer: "A full brand identity design and website build typically takes 4–6 weeks. Ongoing growth partnerships, content creation, and campaign management are run on a monthly basis, starting with an initial roadmap delivered in the first 2 weeks.",
    },
    {
      question: "what is your pricing approach?",
      answer: "We offer flat-rate packages for creative assets (branding, identity design, custom website development) and a monthly retainer structure for performance marketing and positioning campaigns. Reach out to get a custom proposal.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-cream-base border-b border-cream-deep">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Minimal Sidebar Header */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-4 space-y-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-purple-primary block">
              Got Questions?
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-ink tracking-tight lowercase">
              faq.
            </h2>
            <p className="font-body text-xs sm:text-sm text-ink/75 leading-relaxed font-normal">
              Answers to common inquiries about our creative workflows, development scopes, cost packages, and project milestones.
            </p>
          </motion.div>

          {/* Right Column: Clean Accordion List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-8 divide-y divide-cream-deep/60"
          >
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
