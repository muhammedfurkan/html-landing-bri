"use client";
import { Badge, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    { name: "Justin Bayboro", role: "Position at Acme Innovations", text: "Bri.com.tr sayesinde stok tutmadan satış yapıyorum. Lojistik ve entegrasyon desteği harika!", img: "/assets/img/testimonials/testimonial-1.png" },
    { name: "Abraham Linking", role: "Senior Developer at Tech Solutions Co.", text: "XML entegrasyonu çok kolay. Binlerce ürünü dakikalar içinde sitemize aktardık.", img: "/assets/img/testimonials/testimonial-2.png" },
    { name: "Muhammad Abir", role: "Product Manager at Global Enterprises", text: "Müşteri desteği çok hızlı ve çözüm odaklı. İşimizi büyütmemize yardımcı oldular.", img: "/assets/img/testimonials/testimonial-3.png" }
];

export default function Testimonials() {
  return (
    <section id="ub-testimonial" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6"
                >
                    <Badge size={16} />
                    <span className="text-sm font-medium">Müşteri Yorumları</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-[#181D27]"
                >
                    Müşterilerimiz Ne Diyor
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600"
                >
                    Bri.com.tr ile işlerini büyüten müşterilerimizin deneyimlerini okuyun.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="bg-[#f0f5f9] p-8 rounded-2xl relative"
                    >
                         <div className="flex gap-1 text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />)}
                         </div>
                         <p className="text-gray-700 mb-6 italic">"{item.text}"</p>
                         <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image src={item.img} alt={item.name} fill className="object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#181D27]">{item.name}</h4>
                                <p className="text-xs text-gray-500">{item.role}</p>
                            </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
