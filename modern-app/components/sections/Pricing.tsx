"use client";
import { useState } from 'react';
import { Coins, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = {
    monthly: [
        { name: "Başlangıç Paketi", desc: "Yeni başlayanlar için ideal. Temel özelliklerle işe başlayın.", price: "₺699.00", features: ["Sınırsız Ürün Listesi", "Temel Stok Yönetimi", "Aylık 500 İşlem", "Email Destek"] },
        { name: "Standart Paket", desc: "Büyüyen işletmeler için. Gelişmiş özelliklerle daha fazlası.", price: "₺999.00", features: ["10+ Platform Entegrasyonu", "5 Kullanıcı Hesabı", "Aylık 5000 İşlem", "Gelişmiş Analitikler"] },
        { name: "Enterprise Paket", desc: "Büyük hacimli satışlar için. Sınırsız özellikler ve öncelikli destek.", price: "₺1,299.00", features: ["Tüm Platform Entegrasyonları", "Sınırsız Kullanıcı Hesabı", "Sınırsız İşlem", "Öncelikli 24/7 Destek"] }
    ],
    annual: [
        { name: "Başlangıç Paketi", desc: "Yeni başlayanlar için ideal. Temel özelliklerle işe başlayın.", price: "₺8,299.00", features: ["Sınırsız Ürün Listesi", "Temel Stok Yönetimi", "Aylık 500 İşlem", "Email Destek"] },
        { name: "Standart Paket", desc: "Büyüyen işletmeler için. Gelişmiş özelliklerle daha fazlası.", price: "₺11,999.00", features: ["10+ Platform Entegrasyonu", "5 Kullanıcı Hesabı", "Aylık 5000 İşlem", "Gelişmiş Analitikler"] },
        { name: "Enterprise Paket", desc: "Büyük hacimli satışlar için. Sınırsız özellikler ve öncelikli destek.", price: "₺15,499.00", features: ["Tüm Platform Entegrasyonları", "Sınırsız Kullanıcı Hesabı", "Sınırsız İşlem", "Öncelikli 24/7 Destek"] }
    ]
};

export default function Pricing({ showHeading = true }: { showHeading?: boolean }) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="ub-pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            {showHeading && (
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6"
                    >
                        <Coins size={16} />
                        <span className="text-sm font-medium">Fiyatlandırma</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-[#181D27]"
                    >
                        Her Bütçeye Uygun Paketler
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600"
                    >
                        Küçük işletmelerden büyük şirketlere kadar herkes için uygun fiyatlı çözümler!
                    </motion.p>
                </div>
            )}

            <div className="flex justify-center mb-12">
                <div className="bg-[#f0f5f9] p-1 rounded-xl flex">
                    <button
                        onClick={() => setBilling('monthly')}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${billing === 'monthly' ? 'bg-white shadow-sm text-[#193470]' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Aylık
                    </button>
                    <button
                        onClick={() => setBilling('annual')}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${billing === 'annual' ? 'bg-white shadow-sm text-[#193470]' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Yıllık (%10 İndirim)
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans[billing].map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-shadow flex flex-col"
                    >
                        <h3 className="text-xl font-bold mb-2 text-[#181D27]">{plan.name}</h3>
                        <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
                        <div className="text-4xl font-bold text-[#193470] mb-8">{plan.price} <span className="text-base font-normal text-gray-500">TL</span></div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                        <Check size={12} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a href="https://briportal.com/register" className="block w-full py-3 px-6 bg-[#193470] text-white text-center font-bold rounded-xl hover:bg-[#19366f] transition-colors">
                            Hemen Üye Ol
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
