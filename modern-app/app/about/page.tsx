import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Stats from "../../components/sections/Stats";
import TeamDetails from "../../components/sections/TeamDetails";
import Integrations from "../../components/sections/Integrations";
import Testimonials from "../../components/sections/Testimonials";
import FAQ from "../../components/sections/FAQ";
import CTA from "../../components/sections/CTA";
import { BadgeInfo } from 'lucide-react';
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        {/* About Hero */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
             {/* Background Image Logic */}
            <div className="absolute inset-0 z-0">
                <Image src="/assets/img/hero/heroBg1.png" alt="" fill className="object-cover opacity-20" priority />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6">
                    <BadgeInfo size={16} />
                    <span className="text-sm font-medium">Bri.com.tr'nin Felsefesi</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#181D27]">Stok Yok, Risk Yok, Kazanç Çok!</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                    Bri.com.tr, tüccarların ve girişimcilerin riskten uzak, stok yükünden kurtulmuş bir şekilde yüksek kazanç elde etmelerini sağlayan modern bir e-ticaret çözümüdür.
                </p>
                <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-8 border-white/50">
                    <Image src="/assets/img/about/about-hero.jpg" alt="About Hero" width={1000} height={600} className="w-full h-auto" />
                </div>
            </div>
        </section>

        <Stats />
        <TeamDetails />
        <Integrations />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
