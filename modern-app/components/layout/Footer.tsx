import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 bg-gray-50 p-8 rounded-2xl">
           <div className="mb-4 md:mb-0">
             <h3 className="text-xl font-bold text-gray-900">Bültenimize Katılın</h3>
             <p className="text-gray-600">E-ticaret dünyasından haberler ve özel fırsatlar için abone olun.</p>
           </div>
           <form className="flex w-full md:w-auto gap-2">
             <input type="email" placeholder="E-posta adresiniz" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64" />
             <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">Abone Ol</button>
           </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
           {/* Logo & Desc */}
           <div className="lg:col-span-1">
             <Link href="/" className="inline-block mb-4">
               <img src="/assets/img/logo/logo.svg" alt="BRI Logo" className="h-8" />
             </Link>
             <p className="text-gray-600 text-sm leading-relaxed">
               Bri.com.tr stok tutmadan satış yapmak isteyen işletmeler için dropshipping, lojistik ve XML entegrasyon çözümleri sunar.
             </p>
           </div>

           {/* Links */}
           <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Sayfalar</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/about" className="hover:text-primary">Hakkımızda</Link></li>
                  <li><Link href="/pricing" className="hover:text-primary">Fiyatlarımız</Link></li>
                  <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-primary">İletişim</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Şirket</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/about" className="hover:text-primary">Hakkımızda</Link></li>
                  <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                  <li><Link href="/pricing" className="hover:text-primary">Fiyatlarımız</Link></li>
                </ul>
              </div>
               <div>
                <h3 className="font-bold text-gray-900 mb-4">Linkler</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="https://briportal.com/" className="hover:text-primary">Bri Portal</Link></li>
                  <li><Link href="https://babynow.com.tr/" className="hover:text-primary">Babynow Shop</Link></li>
                  <li><Link href="https://babynowtoptan.com.tr/" className="hover:text-primary">Babynow Toptan</Link></li>
                  <li><Link href="https://bri.com.tr" className="hover:text-primary">Bri</Link></li>
                </ul>
              </div>
               <div>
                <h3 className="font-bold text-gray-900 mb-4">Diğer</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="#" className="hover:text-primary">Lisanslar</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-primary">Gizlilik Politikası</Link></li>
                  <li><Link href="/terms-and-condition" className="hover:text-primary">Hizmet Şartları</Link></li>
                  <li><Link href="/404" className="hover:text-primary">404</Link></li>
                </ul>
              </div>
           </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
           <p>&copy; bri.com.tr. All rights reserved. 2025 | Designed by ByAzade</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="#" className="hover:opacity-80"><img src="/assets/icons/LinkedIn.svg" alt="LinkedIn" className="w-5 h-5" /></Link>
             <Link href="#" className="hover:opacity-80"><img src="/assets/icons/X.svg" alt="X" className="w-5 h-5" /></Link>
             <Link href="#" className="hover:opacity-80"><img src="/assets/icons/instagram.svg" alt="Instagram" className="w-5 h-5" /></Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
