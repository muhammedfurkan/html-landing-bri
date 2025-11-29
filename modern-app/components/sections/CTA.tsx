"use client";
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="ub-cta" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-[#193470] rounded-3xl p-12 text-center overflow-hidden"
            >
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Hemen Başlayın, İşinizi Büyütün!</h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Stoksuz satış modeliyle e-ticaret dünyasında yerinizi alın.</p>
                    <a href="https://briportal.com/register" className="inline-block bg-white text-[#193470] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                        Hemen Kayıt Ol
                    </a>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </motion.div>
        </div>
    </section>
  )
}
