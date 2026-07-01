"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full pt-[76px] sm:pt-[92px] md:pt-0 bg-[#362348]">
      <Image
        src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782826993/Untitled_design_45_muwr2f.png"
        alt="Purple Samosa Hero"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto block"
        style={{ display: "block" }}
      />
    </section>
  );
}
