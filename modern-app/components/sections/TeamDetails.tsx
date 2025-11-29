"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function TeamDetails() {
  return (
    <section id="ub-team-details" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#181D27]">Ahmet Kara - Kurucu & CEO</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        15 yılı aşkın e-ticaret ve lojistik deneyimiyle, Ahmet Kara Bri.com.tr'yi kurarak türk girişimcilere stok yönetimi sorunlarından kurtulmalarını sağlamıştır. Dropshipping ve tedarikçi ağlarında uzmanlaşan Ahmet, binlerce satıcıyı başarıya ulaştırmıştır.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Stok yönetimi ve lojistik ağı konusunda 15+ yıl deneyim",
                            "5000+ satıcının başarı hikayesine ışık tutmuş",
                            "Türk e-ticareti için yenilikçi çözümler geliştirmişti",
                            "Müşteri odaklı hizmet felsefesi ile işini büyütmüştür"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 text-gray-700"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#193470]"></div>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto">
                        <Image src="/assets/img/team-member/team-member-1.png" alt="Ahmet Kara" fill className="object-cover" />

                        <div className="absolute bottom-6 right-6">
                            <a href="https://linkedin.com" target="_blank" className="bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors block text-[#0077b5]">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-[#181D27]">Ahmet Kara</h3>
                        <p className="text-[#193470] font-medium">Kurucu & CEO</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
