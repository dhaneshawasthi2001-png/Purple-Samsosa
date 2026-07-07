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
      answer: "Everything under one brand system — performance marketing, web and app development, SEO, social media strategy, brand identity, creative asset design, PR, and growth audits. Most clients start with one service and expand once they see how the pieces work together.",
    },
    {
      question: "who do you work with?",
      answer: "Primarily F&B, hospitality, and consumer brands ready to scale past word-of-mouth — though the same growth playbook applies to any brand serious about its digital presence.",
    },
    {
      question: "how does your performance marketing management work?",
      answer: "We run and optimize your ad accounts directly — Meta, Google, and platform-specific promotions like Zomato and Swiggy — with weekly reporting on spend, cost per acquisition, and what we're changing next.",
    },
    {
      question: "what are your average project timelines?",
      answer: "Brand identity and website builds typically run 4–6 weeks. Performance marketing and SEO are ongoing engagements, since real ranking and acquisition gains compound over 60–90 days, not overnight.",
    },
    {
      question: "what is your pricing approach?",
      answer: "Every quote is scoped to what you actually need — not a fixed package. Book a free audit and we'll tell you exactly where the budget should go first.",
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
              got questions?
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
