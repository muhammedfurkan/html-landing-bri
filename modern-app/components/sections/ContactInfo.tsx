"use client";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#181D27]">İletişim Bilgilerimiz</h2>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="grid sm:grid-cols-2 gap-8">
                    <div className="p-6 bg-[#f0f5f9] rounded-xl text-center sm:text-left">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#193470] mb-4 shadow-sm mx-auto sm:mx-0">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-bold mb-2 text-[#181D27]">Adres</h3>
                        <p className="text-sm text-gray-600">YAHYAKAPTAN MAH. YENİ KANDIRA YOLU CAD NO: 24<br/>İZMİT/ KOCAELİ</p>
                    </div>
                    <div className="p-6 bg-[#f0f5f9] rounded-xl text-center sm:text-left">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#193470] mb-4 shadow-sm mx-auto sm:mx-0">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-bold mb-2 text-[#181D27]">Telefon</h3>
                        <p className="text-sm text-gray-600"><a href="tel:+901234567890">+90 (123) 456-7890</a></p>
                    </div>
                    <div className="p-6 bg-[#f0f5f9] rounded-xl text-center sm:text-left">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#193470] mb-4 shadow-sm mx-auto sm:mx-0">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold mb-2 text-[#181D27]">E-posta</h3>
                        <p className="text-sm text-gray-600"><a href="mailto:info@bri.com.tr">bilgi@bri.com.tr</a></p>
                    </div>
                    <div className="p-6 bg-[#f0f5f9] rounded-xl text-center sm:text-left">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#193470] mb-4 shadow-sm mx-auto sm:mx-0">
                            <Clock size={24} />
                        </div>
                        <h3 className="font-bold mb-2 text-[#181D27]">Çalışma Saatleri</h3>
                        <p className="text-sm text-gray-600">Pazartesi - Cuma: 09:00 - 18:00<br/>Cumartesi: 10:00 - 16:00</p>
                    </div>
                </div>

                <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2707.177926002169!2d29.978332384249256!3d40.78842880312316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1760905733299!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}
