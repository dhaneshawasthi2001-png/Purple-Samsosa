"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <Image
        src="https://res.cloudinary.com/dmj0smemf/image/upload/v1782819428/hero_2_dyhbnh.png"
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
