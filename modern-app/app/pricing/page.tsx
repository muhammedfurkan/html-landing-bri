import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Pricing from "../../components/sections/Pricing";
import PricingTable from "../../components/sections/PricingTable";
import CTA from "../../components/sections/CTA";
import { Coins } from 'lucide-react';
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
         {/* Pricing Hero */}
         <section className="py-20 md:py-32 bg-white relative overflow-hidden">
             <div className="absolute inset-0 z-0">
                <Image src="/assets/img/hero/heroBg1.png" alt="" fill className="object-cover opacity-20" priority />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6">
                    <Coins size={16} />
                    <span className="text-sm font-medium">Bri.com.tr Fiyatlandırması</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#181D27]">Her Bütçeye Uygun Paketler</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                    Küçük işletmelerden büyük şirketlere kadar herkes için uygun fiyatlı çözümler!
                </p>
            </div>
        </section>

        <Pricing showHeading={false} />
        <PricingTable />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
