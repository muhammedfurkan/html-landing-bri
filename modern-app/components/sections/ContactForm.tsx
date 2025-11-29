"use client";

export default function ContactForm() {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#181D27]">Bize Yazın</h2>
            <form className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Adınız</label>
                        <input type="text" placeholder="Adınızı girin" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Soyadınız</label>
                        <input type="text" placeholder="Soyadınızı girin" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
                    <input type="email" placeholder="E-posta adresinizi girin" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Mesaj</label>
                    <textarea rows={5} placeholder="Mesajınızı yazın" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[#193470] text-white font-bold rounded-lg hover:bg-[#19366f] transition-colors shadow-lg shadow-blue-900/10">
                    Gönder
                </button>
            </form>
        </div>
    </section>
  )
}
