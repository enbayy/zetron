"use client";

import Link from "next/link";

export default function AluminyumYagDeposu() {
  const yagDeposuSeries = [
    {
      name: "1 LT Yağ Deposu",
      category: "Alüminyum Yağ Deposu",
      slug: "1-lt-yag-deposu",
    },
    {
      name: "2, 3, 4, 5 LT Yağ Deposu ve Gövdesi",
      category: "Alüminyum Yağ Deposu",
      slug: "2-3-4-5-lt-yag-deposu-ve-govdesi",
    },
  ];

  const relatedProducts = [
    {
      name: "Kampanalar",
      description: "Yüksek kaliteli hidrolik kampana sistemleri",
      href: "/urunler/hidrolik/kampanalar",
    },
    {
      name: "DK Kaplin Serisi",
      description: "Güvenilir ve dayanıklı kaplin çözümleri",
      href: "/urunler/hidrolik/dk-kaplin-serisi",
    },
    {
      name: "Bakım Kapağı ve Flanş",
      description: "Kolay bakım ve erişim için özel tasarım kapaklar",
      href: "/urunler/hidrolik/bakim-kapagi-ve-flans",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Teknik Bilgi ve Fiyatlandırma
            </h2>
            <p className="text-lg mb-6 text-red-100">
              Alüminyum Yağ Deposu hakkında detaylı teknik bilgi ve fiyatlandırma
              için lütfen bizimle iletişime geçin.
            </p>
            <div>
              <Link
                href="/iletisim"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all shadow-lg"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>

          {/* Alüminyum Yağ Deposu Series Cards */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Alüminyum Yağ Deposu Serileri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {yagDeposuSeries.map((depo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group overflow-hidden border border-gray-100"
                >
                  <Link href={`/urunler/hidrolik/aluminyum-yag-deposu/${depo.slug}`}>
                    <div className="relative h-48 bg-gradient-to-br from-red-500 to-red-700 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-20 h-20 text-white opacity-90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors mb-2">
                        {depo.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {depo.category}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Diğer Hidrolik Ürünlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product, index) => (
                <div key={index}>
                  <Link href={product.href}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border-l-4 border-red-600 h-full">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

