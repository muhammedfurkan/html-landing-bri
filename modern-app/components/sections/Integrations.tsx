"use client";
import { BadgePlus } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const row1 = [
    "/assets/img/integrations/image1.png",
    "/assets/img/integrations/image2.png",
    "/assets/img/integrations/image3.png",
    "/assets/img/integrations/image4.png",
    "/assets/img/integrations/image5.png",
    "/assets/img/integrations/image6.png",
];

const row2 = [
    "/assets/img/integrations/image13.png",
    "/assets/img/integrations/image1.png",
    "/assets/img/integrations/image12.png",
    "/assets/img/integrations/image14.png",
    "/assets/img/integrations/image13.png",
    "/assets/img/integrations/image15.png",
];

const row3 = [
    "/assets/img/integrations/image5.png",
    "/assets/img/integrations/image13.png",
    "/assets/img/integrations/image2.png",
    "/assets/img/integrations/image4.png",
    "/assets/img/integrations/image7.png",
    "/assets/img/integrations/image8.png",
];

export default function Integrations() {
  return (
    <section id="ub-integrations" className="py-20 bg-[#f0f5f9] overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
             <div className="text-center md:text-left max-w-2xl">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6"
                >
                    <BadgePlus size={16} />
                    <span className="text-sm font-medium">Bri.com.tr ile</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-[#181D27]"
                >
                    Dropshipping Çözümleri
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600"
                >
                    Binlerce ürünü stok tutmadan satış yapın. Ürünleri siz satarsınız, biz gönderelim.
                </motion.p>
             </div>
        </div>

        <div className="flex flex-col gap-8">
            <MarqueeRow images={row1} direction="left" />
            <MarqueeRow images={row2} direction="right" />
            <MarqueeRow images={row3} direction="left" />
        </div>
    </section>
  )
}

function MarqueeRow({ images, direction }: { images: string[], direction: 'left' | 'right' }) {
    return (
        <div className="flex w-full overflow-hidden relative">
            <motion.div
                className="flex gap-8 min-w-full"
                animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                    x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }
                }}
            >
                {[...images, ...images, ...images, ...images].map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-4">
                        <div className="relative w-full h-full">
                            <Image src={src} alt="" fill className="object-contain" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
