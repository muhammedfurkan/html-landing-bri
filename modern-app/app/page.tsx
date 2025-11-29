import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Brands from "../components/sections/Brands";
import Integrations from "../components/sections/Integrations";
import HowItWorks from "../components/sections/HowItWorks";
import Features from "../components/sections/Features";
import SlidingCards from "../components/sections/SlidingCards";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Integrations />
        <HowItWorks />
        <Features />
        <SlidingCards />
        <Testimonials />
        <Pricing />
        {/* Blog section omitted as requested in initial plan to focus on core structure, but can be added similarly */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
