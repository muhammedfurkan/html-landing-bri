"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { Check, Badge } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary mb-4">
             <Badge className="w-4 h-4" />
             <span className="text-sm font-medium">Fiyatlandırma</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Her Bütçeye Uygun Paketler</h2>
          <p className="text-gray-600">Küçük işletmelerden büyük şirketlere kadar herkes için uygun fiyatlı çözümler!</p>

          <div className="flex justify-center items-center gap-4 mt-8">
             <button
               onClick={() => setIsAnnual(false)}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!isAnnual ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-200'}`}
             >
               Aylık
             </button>
             <button
               onClick={() => setIsAnnual(true)}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isAnnual ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-200'}`}
             >
               Yıllık (%10 İndirim)
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <PricingCard
             title="Başlangıç Paketi"
             desc="Yeni başlayanlar için ideal."
             price={isAnnual ? "₺8,299.00" : "₺699.00"}
             period={isAnnual ? "/ yıl" : "/ ay"}
             features={["Sınırsız Ürün Listesi", "Temel Stok Yönetimi", "Aylık 500 İşlem", "Email Destek"]}
          />
           <PricingCard
             title="Standart Paket"
             desc="Büyüyen işletmeler için."
             price={isAnnual ? "₺11,999.00" : "₺999.00"}
             period={isAnnual ? "/ yıl" : "/ ay"}
             features={["10+ Platform Entegrasyonu", "5 Kullanıcı Hesabı", "Aylık 5000 İşlem", "Gelişmiş Analitikler"]}
             highlight
          />
           <PricingCard
             title="Enterprise Paket"
             desc="Büyük hacimli satışlar için."
             price={isAnnual ? "₺15,499.00" : "₺1,299.00"}
             period={isAnnual ? "/ yıl" : "/ ay"}
             features={["Tüm Platform Entegrasyonları", "Sınırsız Kullanıcı Hesabı", "Sınırsız İşlem", "Öncelikli 24/7 Destek"]}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, desc, price, period, features, highlight = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-8 rounded-2xl bg-white border ${highlight ? 'border-primary ring-2 ring-primary/20 shadow-xl relative' : 'border-gray-200 shadow-sm hover:shadow-md transition-shadow'}`}
    >
      {highlight && <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPÜLER</div>}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{desc}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-500 text-sm ml-1">TL {period}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Button as="a" href="https://briportal.com/register" color={highlight ? "primary" : "default"} variant={highlight ? "solid" : "bordered"} className="w-full">
        Hemen Üye Ol
      </Button>
    </motion.div>
  )
}
