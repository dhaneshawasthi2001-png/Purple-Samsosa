import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandElevation from "@/components/BrandElevation";
import About from "@/components/About";
import ServicesShowcase from "@/components/ServicesShowcase";
import WorkDashboard from "@/components/WorkDashboard";
import Manifesto from "@/components/Manifesto";
import HowWeWork from "@/components/HowWeWork";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import RevealBanner from "@/components/RevealBanner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky navigation */}
      <Navbar />

      <main className="relative w-full overflow-x-clip">
        {/* Full-viewport Hero */}
        <Hero />

        {/* Brand narrative section */}
        <BrandElevation />

        {/* Origin / Partnership Details */}
        <About />

        {/* Pinned horizontal scroller services showcase */}
        <ServicesShowcase />

        {/* Client Success Dashboard Portal */}
        <WorkDashboard />

        {/* Text scroll-reveal statement banner */}
        <Manifesto />

        <RevealBanner />
        {/* Parallax cover reveal banner */}

        {/* Sticky step process narrative */}
        <HowWeWork />

        {/* Client project highlights portfolio grid */}
        <Portfolio />

        {/* F&B design and growth value propositions grid */}
        <WhyUs />


        {/* Client feedback autoplay slider */}
        <Testimonials />

        {/* Keyboard-navigable accordion questions */}
        <FAQ />

        {/* Final CTA lead generation block */}
        <FinalCTA />
      </main>

      {/* Brand footer */}
      <Footer />
    </>
  );
}
