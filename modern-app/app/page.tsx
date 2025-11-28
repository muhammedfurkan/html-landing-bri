import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Brands from "../components/sections/Brands";
import Pricing from "../components/sections/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Brands />

        {/* Integrations Placeholder - To be implemented fully */}
        <section className="py-20 text-center bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Dropshipping Çözümleri</h2>
                <p className="text-gray-600 mb-8">Binlerce ürünü stok tutmadan satış yapın. Ürünleri siz satarsınız, biz gönderelim.</p>
                <div className="p-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 text-gray-400">
                    [Integrations Marquee Component will be here]
                </div>
            </div>
        </section>

        {/* How It Works Placeholder */}
        <section className="py-20 text-center bg-gray-50" id="how-it-works">
             <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Nasıl Çalışır</h2>
                <div className="grid md:grid-cols-4 gap-8 mt-12">
                     {/* Simplified placeholder content */}
                     <div className="p-6 bg-white rounded-xl shadow-sm"><h3 className="font-bold mb-2">1. Kayıt Olun</h3><p className="text-sm text-gray-500">Hızlıca hesap oluşturun.</p></div>
                     <div className="p-6 bg-white rounded-xl shadow-sm"><h3 className="font-bold mb-2">2. Ürünleri Ekleyin</h3><p className="text-sm text-gray-500">XML entegrasyonu ile aktarın.</p></div>
                     <div className="p-6 bg-white rounded-xl shadow-sm"><h3 className="font-bold mb-2">3. Satış Yapın</h3><p className="text-sm text-gray-500">Stok tutmadan satın.</p></div>
                     <div className="p-6 bg-white rounded-xl shadow-sm"><h3 className="font-bold mb-2">4. 7/24 Destek</h3><p className="text-sm text-gray-500">Her zaman yanınızdayız.</p></div>
                </div>
            </div>
        </section>

        {/* Features Placeholder */}
        <section className="py-20 text-center bg-white">
             <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-12">E-Ticareti Kolaylaştırın</h2>
                 <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="font-bold mb-2">💰 Bugün Ne Kadar Kâr Ettim?</h3>
                        <p className="text-sm text-gray-600">Net kârınızı anında görün.</p>
                    </div>
                     <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="font-bold mb-2">🤖 BRI AI Asistan</h3>
                        <p className="text-sm text-gray-600">Akıllı önerilerle satışlarınızı artırın.</p>
                    </div>
                     <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="font-bold mb-2">🛍️ Ürünleri Yayınla</h3>
                        <p className="text-sm text-gray-600">Tek panelden tüm pazaryerlerine aktarın.</p>
                    </div>
                 </div>
            </div>
        </section>

        <Pricing />

        {/* FAQ Placeholder */}
        <section className="py-20 text-center bg-white border-t border-gray-100">
            <div className="container mx-auto">
                 <h2 className="text-2xl font-bold mb-8">Merak Ettikleriniz</h2>
                 <div className="max-w-2xl mx-auto space-y-4">
                     <div className="text-left p-4 bg-gray-50 rounded-lg"><p className="font-medium">Bri.com.tr nasıl çalışır?</p></div>
                     <div className="text-left p-4 bg-gray-50 rounded-lg"><p className="font-medium">XML entegrasyonu nedir?</p></div>
                     <div className="text-left p-4 bg-gray-50 rounded-lg"><p className="font-medium">Kargo işlemleri nasıl yapılıyor?</p></div>
                 </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
