"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-cream-deep py-6 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg sm:text-xl font-medium lowercase text-ink group-hover:text-purple-primary transition-colors">
          {question}
        </span>
        <div className={`ml-4 p-2 rounded-full border border-cream-deep group-hover:border-purple-primary/30 transition-colors ${
          isOpen ? "bg-purple-primary text-cream-base border-purple-primary" : "text-purple-soft"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
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
            <p className="font-body text-sm md:text-base text-ink/75 leading-relaxed pt-4 max-w-3xl">
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
    <section className="py-24 md:py-40 bg-cream-base border-b border-cream-deep">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center space-y-3">
          <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-purple-primary block">
            Got Questions?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink tracking-tight lowercase">
            frequently asked questions.
          </h2>
        </div>

        {/* Accordions List */}
        <div className="border border-cream-deep rounded-3xl bg-cream-soft p-6 sm:p-8 shadow-sm">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
