"use client";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      {/* Background Image Logic - CSS or Next/Image */}
      <div className="absolute inset-0 z-0">
          <img src="/assets/img/hero/heroBg.png" alt="Hero Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm mb-6 border border-white/20"
        >
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium">Stoksuz Satışta Yeni Bir Dönem</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Stok Tutmadan Satış Yapın, <br className="hidden md:block" /> İşinizi Büyütün
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Bri.com.tr ile dropshipping, XML entegrasyonu ve lojistik desteği alarak e-ticaret operasyonlarınızı kolaylaştırın.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.5 }}
           className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button as={Link} href="https://briportal.com/register" size="lg" className="bg-white text-primary font-bold hover:bg-gray-100 px-8">
            Üye Ol
          </Button>
          <Button as={Link} href="#how-it-works" variant="bordered" size="lg" className="text-white border-white hover:bg-white/10 px-8">
            Keşfet
          </Button>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.7 }}
           className="relative mx-auto max-w-5xl"
        >
            <img src="/assets/img/hero/application-shell.png" alt="Application Interface" className="w-full h-auto rounded-xl shadow-2xl border border-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
