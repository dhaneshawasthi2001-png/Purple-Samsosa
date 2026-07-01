"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/919999999999", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-purple-deep text-cream-base pt-16 pb-10 border-t border-purple-soft/20 relative overflow-hidden">
      {/* Noise filter */}
      <div className="grain-overlay" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 border-b border-purple-soft/10">
        
        {/* Left Area: Logo & Tagline */}
        <div className="lg:col-span-5 space-y-6">
          <Link href="#home" className="flex items-center w-fit">
            <Image
              src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782811845/6_1_1_wweark.png"
              alt="Purple Samosa Logo"
              width={260}
              height={80}
              className="h-[38px] md:h-[46px] w-auto object-contain"
            />
          </Link>

          <p className="font-body text-sm text-purple-faint leading-relaxed max-w-sm">
            <span className="block font-semibold text-cream-base mb-1">
              Stuffed with Strategy. Served with Growth.
            </span>
            A creative growth partner combining custom development, brand positioning, and performance campaigns.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-cream-base/30 flex items-center justify-center text-cream-base hover:bg-cream-base hover:text-purple-deep transition-all duration-300 shadow-sm hover:scale-105"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-display text-sm font-medium uppercase tracking-wider text-purple-faint">
            Links
          </h4>
          <nav className="flex flex-col space-y-3 font-body text-sm text-cream-soft/80">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Column 3: Services */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-display text-sm font-medium uppercase tracking-wider text-purple-faint">
            Services
          </h4>
          <nav className="flex flex-col space-y-3 font-body text-sm text-cream-soft/80">
            <span className="block hover:text-white transition-colors">Performance Marketing</span>
            <span className="block hover:text-white transition-colors">Web Development</span>
            <span className="block hover:text-white transition-colors">Social Media</span>
            <span className="block hover:text-white transition-colors">SEO & Positioning</span>
            <span className="block hover:text-white transition-colors">Brand Identity</span>
            <span className="block hover:text-white transition-colors">Public Relations</span>
          </nav>
        </div>

        {/* Column 4: Contact Info */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-display text-sm font-medium uppercase tracking-wider text-purple-faint">
            Contact
          </h4>
          <div className="font-body text-sm text-cream-soft/80 space-y-3">
            <p className="hover:text-white transition-colors">
              <a href="mailto:contact@purplesamosa.com">contact@purplesamosa.com</a>
            </p>
            <div className="space-y-1">
              <p className="hover:text-white transition-colors">
                <a href="tel:+918448447408">+91 84484 47408</a>
              </p>
              <p className="hover:text-white transition-colors">
                <a href="tel:+916290345485">+91 62903 45485</a>
              </p>
              <p className="hover:text-white transition-colors">
                <a href="tel:+919838676097">+91 98386 76097</a>
              </p>
            </div>
            <p className="leading-relaxed text-xs">
              Felix Parking, 302, Omaxe Residency 1,<br />
              Arjunganj, Unit No-1219 12th floor,<br />
              Lucknow, 226002, UP, IN
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Panel */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs text-purple-faint">
        <p>&copy; {currentYear} Purple Samosa. All rights reserved.</p>
        <p className="text-center md:text-right">
          Building digital presence that scales.
        </p>
      </div>
    </footer>
  );
}
