"use client";

import Link from "next/link";

export default function SklonUstuKlepeSerisi() {
  const degirmenSeries = [
    {
      name: "Sklon Üstü Klepe Serisi",
      category: "Sklon Üstü Klepe Serisi",
      slug: "sklon-ustu-klepe-serisi",
    },
    {
      name: "Hava Tahliye Sibopları",
      category: "Hava Tahliye Sibopları",
      slug: "hava-tahliye-siboplari",
    },
    {
      name: "Filtre Kapağı",
      category: "Filtre Kapağı",
      slug: "filtre-kapagi",
    },
  ];

  const relatedProducts = [
    {
      name: "Hava Tahliye Sibopları",
      description: "Güvenilir hava tahliye sistemleri",
      href: "/urunler/degirmen/hava-tahliye-siboplari",
    },
    {
      name: "Filtre Kapağı",
      description: "Dayanıklı ve kolay bakımlı filtre kapakları",
      href: "/urunler/degirmen/filtre-kapagi",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div          className="max-w-6xl mx-auto"
        >
          <div}
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Teknik Bilgi ve Fiyatlandırma
            </h2>
            <p className="text-lg mb-6 text-red-100">
              Sklon Üstü Klepe Serisi hakkında detaylı teknik bilgi ve
              fiyatlandırma için lütfen bizimle iletişime geçin.
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

          {/* Değirmen Series Cards */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Değirmen Ürünleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {degirmenSeries.map((urun, index) => (
                <div
                  key={index                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group overflow-hidden border border-gray-100"
                >
                  <Link href={`/urunler/degirmen/${urun.slug}`}>
                    <div className="relative h-48 bg-gradient-to-br from-red-500 to-red-700 overflow-hidden">
                      <div
                        className="absolute inset-0 flex items-center justify-center"}}
                      >
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
                        {urun.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {urun.category}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Diğer Değirmen Ürünlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProducts.map((product, index) => (
                <div
                  key={index                >
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

