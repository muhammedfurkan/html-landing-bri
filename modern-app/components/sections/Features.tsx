"use client";
import { BadgeInfo } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    { title: "💰 Bugün Ne Kadar Kâr Ettim?", desc: "Artık kazancını hesaplamakla uğraşma! bri.com.tr tüm pazar yerlerindeki satışlarını otomatik olarak toplar. Komisyon oranlarını, kargo ücretini ve ürün maliyetini hesaba katarak günlük net kârını anında gösterir.", img: "/assets/img/hero/1.png" },
    { title: "🤖 BRI AI Asistan", desc: "Artık satış süreçlerinde yalnız değilsin! BRI AI Asistan, tüm sipariş ve ürün verilerini analiz eder; ürün adını ve görselini geliştirmek için sana akıllı öneriler sunar.", img: "/assets/img/hero/2.png" },
    { title: "🛍️ Ürünleri Yayınla", desc: "Ürünlerini tek tek yüklemeye son! bri.com.tr ile tüm ürünlerini tek panelden Trendyol, Hepsiburada, Amazon, Pazarama, Shopify, İkas ve n11 mağazalarına kolayca aktarabilirsin.", img: "/assets/img/hero/3.png" },
    { title: "🚚 Kargo Anlaşmasına Gerek Yok", desc: "Kargo sözleşmeleriyle uğraşmana gerek kalmadı! bri.com.tr, senin yerine 400’den fazla kargo firmasıyla entegre çalışır ve gönderilerini indirimli fiyatlarla yapar.", img: "/assets/img/hero/4.png" },
    { title: "💸 Ürün Fiyatını Kendin Belirle", desc: "bri.com.tr araçlar kısmında, istediğin ürünün hangi fiyattan satışa girebileceğini kolayca belirleyebilirsin. Sistem, maliyetini ve pazar yeri komisyon oranlarını otomatik analiz eder.", img: "/assets/img/hero/5.png" },
    { title: "💡 Tavsiye Edilen Satış Fiyatı", desc: "bri.com.tr, ürün maliyetini, pazar yeri komisyonlarını ve diğer satıcıların fiyatlarını analiz ederek her ürün için Tavsiye Edilen Satış Fiyatı (TES) oluşturur.", img: "/assets/img/hero/6.png" },
];

export default function Features() {
  return (
    <section id="ub-features" className="py-20 bg-[#f0f5f9]">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6"
                >
                    <BadgeInfo size={16} />
                    <span className="text-sm font-medium">Özelliklerimiz</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-[#181D27]"
                >
                    E-Ticareti Kolaylaştırın
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600"
                >
                    Dropshipping ile işinizi büyütün.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center group"
                    >
                        <div className="mb-6 relative w-full h-48 flex justify-center items-center">
                             <Image
                                src={feature.img}
                                alt={feature.title}
                                width={200}
                                height={200}
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                             />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#181D27]">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
