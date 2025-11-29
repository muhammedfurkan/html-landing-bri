"use client";
import { Images } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const solutions = [
    { title: "Dropshipping Çözümleri", desc: "Stok tutmadan satış yapın, riski sıfırlayın.", img: "/assets/img/features/feature-1.png" },
    { title: "XML Entegrasyonu", desc: "Binlerce ürünü anında aktarın.", img: "/assets/img/features/feature-2.png" },
    { title: "Lojistik Yönetimi", desc: "Hızlı ve güvenilir kargo hizmeti.", img: "/assets/img/features/feature-3.png" },
    { title: "Akıllı Analitik", desc: "Satış performansınızı gerçek zamanlı takip edin.", img: "/assets/img/features/feature-4.png" },
    { title: "Mobil Uygulama", desc: "Her yerden işinizi yönetin.", img: "/assets/img/hero/application-shell.png" },
    { title: "7/24 Destek", desc: "Uzman ekibimiz her zaman yanınızda.", img: "/assets/img/features/feature-1.png" },
];

export default function SlidingCards() {
  return (
    <section id="ub-sliding-cards" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
            <div className="text-center max-w-3xl mx-auto">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6"
                >
                    <Images size={16} />
                    <span className="text-sm font-medium">Çözümlerimiz</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-[#181D27]"
                >
                    İşinizi Büyütecek Çözümler
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600"
                >
                    Modern e-ticaret dünyasının ihtiyaçlarına yönelik kapsamlı çözümlerimizi keşfedin.
                </motion.p>
            </div>
        </div>

        {/* Horizontal scroll snap container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-[max(1rem,calc((100vw-1280px)/2))] scrollbar-hide">
            {solutions.map((item, index) => (
                <div key={index} className="snap-center flex-shrink-0 w-80 md:w-96 bg-[#f0f5f9] rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100">
                    <div className="h-48 relative bg-white flex items-center justify-center p-6">
                        <div className="relative w-full h-full">
                            <Image src={item.img} alt={item.title} fill className="object-contain" />
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-[#181D27]">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
