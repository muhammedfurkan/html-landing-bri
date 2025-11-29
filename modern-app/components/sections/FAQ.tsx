"use client";
import { CircleHelp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
    { question: "Bri.com.tr nasıl çalışır?", answer: "Stok tutmadan satış yapmanızı sağlayan dropshipping modeliyle çalışıyoruz. Ürünleri biz depolarız, siz satarsınız." },
    { question: "XML entegrasyonu nedir?", answer: "Binlerce ürünü otomatik olarak sitenize aktarmanızı sağlayan sistemdir. Fiyat ve stok güncellemeleri anlık yapılır." },
    { question: "Kargo işlemleri nasıl yapılıyor?", answer: "Tüm kargo işlemlerini biz hallederiz. Siparişler otomatik olarak kargoya verilir ve müşterinize ulaştırılır." },
    { question: "Hangi platformlarla entegrasyon sağlıyorsunuz?", answer: "Trendyol, Hepsiburada, N11, Çiçeksepeti ve daha birçok popüler e-ticaret platformu ile entegrasyon sağlıyoruz." },
    { question: "Destek hizmeti nasıl?", answer: "7/24 canlı destek hizmeti sunuyoruz. Telefon, e-posta ve canlı chat ile her zaman ulaşabilirsiniz." },
    { question: "Ödeme nasıl yapılıyor?", answer: "Kredi kartı, havale/EFT ve diğer güvenli ödeme yöntemleriyle kolayca ödeme yapabilirsiniz." }
];

export default function FAQ() {
  return (
    <section id="ub-faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:sticky lg:top-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#193470] mb-6">
                        <CircleHelp size={16} />
                        <span className="text-sm font-medium">Sık Sorulan Sorular</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#181D27]">Merak Ettikleriniz</h2>
                    <p className="text-gray-600 mb-8">
                        Aklınıza takılan soruların cevaplarını burada bulabilirsiniz. Başka sorularınız varsa bizimle iletişime geçmekten çekinmeyin.
                    </p>
                    <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#193470] hover:bg-[#19366f] transition-colors">
                        İletişime Geçin
                    </a>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Disclosure as="div" className="border border-gray-200 rounded-xl bg-white overflow-hidden" defaultOpen={index === 0}>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className={clsx(
                                            "flex justify-between w-full px-6 py-4 text-left text-sm font-medium focus:outline-none transition-colors",
                                            open ? "bg-gray-50 text-[#193470]" : "text-gray-900 hover:bg-gray-50"
                                        )}>
                                            <span className="text-base font-semibold">{faq.question}</span>
                                            <ChevronDown
                                                className={clsx("w-5 h-5 transition-transform duration-200", open ? "transform rotate-180" : "")}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-6 py-4 text-sm text-gray-500 bg-white border-t border-gray-100">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </motion.div>
                    ))}
                </div>
             </div>
        </div>
    </section>
  )
}
