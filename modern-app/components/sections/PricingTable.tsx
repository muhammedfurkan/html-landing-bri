"use client";
import { Check, X } from 'lucide-react';

const features = [
    { name: "Email Desteği", basic: true, standard: true, enterprise: true },
    { name: "Gerçek Zamanlı Satış Analizi", basic: false, standard: true, enterprise: true },
    { name: "Otomatik Stok Senkronizasyonu", basic: true, standard: true, enterprise: true },
    { name: "Kargo Entegrasyonu", basic: true, standard: true, enterprise: true },
    { name: "Muhasebe Yazılımı Bağlantısı", basic: false, standard: true, enterprise: true },
    { name: "API Erişimi", basic: false, standard: false, enterprise: true },
    { name: "Gelişmiş Raporlar", basic: false, standard: true, enterprise: true },
    { name: "Özel Eğitim Sunumları", basic: false, standard: false, enterprise: true },
    { name: "Kar/Zarar Analizi", basic: true, standard: true, enterprise: true },
    { name: "Telefon Desteği", basic: false, standard: false, enterprise: true },
];

export default function PricingTable() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#181D27]">Paket Karşılaştırması</h2>
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="p-6 text-left text-gray-500 font-medium">Özellikler</th>
                                <th className="p-6 text-center text-[#193470] font-bold text-lg">Başlangıç</th>
                                <th className="p-6 text-center text-[#193470] font-bold text-lg">Standart</th>
                                <th className="p-6 text-center text-[#193470] font-bold text-lg">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors last:border-0">
                                    <td className="p-6 text-gray-700 font-medium">{feature.name}</td>
                                    <td className="p-6 text-center">
                                        <div className="flex justify-center">
                                            {feature.basic ? <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Check size={14} /></div> : <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-red-400"><X size={14} /></div>}
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <div className="flex justify-center">
                                            {feature.standard ? <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Check size={14} /></div> : <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-red-400"><X size={14} /></div>}
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <div className="flex justify-center">
                                            {feature.enterprise ? <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Check size={14} /></div> : <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-red-400"><X size={14} /></div>}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
