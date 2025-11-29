"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { title: "Aktif Satıcı", value: "5,200", suffix: "+" },
    { title: "Stok Yönetimi Yapılan Ürün", value: "480,000", suffix: "+" },
    { title: "Aylık Satış Hacmi", value: "15,400", suffix: "+" },
    { title: "Müşteri Memnuniyet Oranı", value: "96", suffix: "%" },
];

export default function Stats() {
    return (
        <section id="ub-stats" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
                        >
                            <h3 className="text-gray-600 font-medium mb-2">{stat.title}</h3>
                            <p className="text-4xl font-bold text-[#193470]">
                                {stat.value}<span className="text-2xl">{stat.suffix}</span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
