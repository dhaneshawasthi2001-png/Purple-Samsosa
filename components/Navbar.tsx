"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-purple-deep border-b border-purple-soft/20 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Area */}
          <Link 
            href="#home" 
            className="flex items-center transition-all duration-300"
          >
            <Image
              src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782811845/6_1_1_wweark.png"
              alt="Purple Samosa Logo"
              width={260}
              height={80}
              className={`transition-all duration-300 object-contain ${
                isScrolled ? "h-[32px] md:h-[38px]" : "h-[44px] md:h-[52px]"
              } w-auto ${isScrolled ? "" : "brightness-0 opacity-80"}`}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-body font-medium text-sm transition-colors cursor-pointer relative group py-1 ${
                  isScrolled ? "text-white/80 hover:text-white" : "text-purple-deep/80 hover:text-purple-deep"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 ease-[0.16,1,0.3,1] group-hover:w-full ${
                  isScrolled ? "bg-white" : "bg-purple-deep"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
            >
              <Link
                href="#contact"
                className={`font-body font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 ${
                  isScrolled 
                    ? "bg-cream-base text-purple-deep hover:bg-white hover:shadow-lg" 
                    : "bg-purple-primary text-cream-base hover:bg-purple-deep hover:shadow-lg"
                }`}
              >
                Start Your Growth
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 transition-colors cursor-pointer ${
              isScrolled ? "text-white hover:text-cream-soft" : "text-purple-deep hover:text-purple-soft"
            }`}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-purple-deep flex flex-col justify-between p-6 md:hidden"
          >
            <div className="grain-overlay" />
            
            {/* Header */}
            <div className="flex items-center justify-between relative z-10">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782811845/6_1_1_wweark.png"
                  alt="Purple Samosa Logo"
                  width={200}
                  height={60}
                  className="h-[36px] w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-cream-base hover:text-white transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-6 my-auto relative z-10 px-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.label}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl font-medium text-cream-base hover:text-white transition-colors block lowercase"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Panel */}
            <div className="relative z-10 space-y-6 pb-6 px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center block bg-cream-base text-purple-deep font-body font-bold py-4 rounded-full hover:bg-white transition-colors"
                >
                  Start Your Growth
                </Link>
              </motion.div>
              <p className="font-body text-xs text-purple-faint text-center tracking-wide">
                Stuffed with Strategy. Served with Growth.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
