"use client";
import { BadgeCheck, UserPlus, ShoppingCart, Store, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section id="ub-how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6"
            >
                <BadgeCheck size={16} />
                <span className="text-sm font-medium">İşinizi kolaylaştırır</span>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-[#181D27]"
            >
                Nasıl Çalışır
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600"
            >
                Stoksuz satış modeliyle işletmenizi büyütmek için gereken tüm araçları sunuyoruz.
            </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
            {[
                { icon: UserPlus, title: "Kayıt Olun", desc: "Hızlıca hesap oluşturun ve sisteme entegre olun." },
                { icon: ShoppingCart, title: "Ürünleri Ekleyin", desc: "XML entegrasyonu ile binlerce ürünü sitenize aktarın." },
                { icon: Store, title: "Satış Yapın", desc: "Stok tutmadan satış yapın, biz gönderelim." },
                { icon: Clock, title: "7/24 Destek", desc: "Her zaman yanınızdayız, sorularınızı yanıtlıyoruz." }
            ].map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                    <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[#193470] mb-6 group-hover:bg-[#193470] group-hover:text-white transition-colors">
                        <item.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#181D27]">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
