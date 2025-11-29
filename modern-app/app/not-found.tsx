import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h2 className="text-6xl font-bold text-[#193470] mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-8">Aradığınız sayfa bulunamadı.</p>
      <Link href="/" className="px-6 py-3 bg-[#193470] text-white rounded-xl font-bold hover:bg-[#19366f] transition-colors">
        Ana Sayfaya Dön
      </Link>
    </div>
  )
}
