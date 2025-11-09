"use client";

import Link from "next/link";

export default function Degirmen() {
  const products = [
    {
      name: "Sklon Üstü Klepe Serisi",
      description: "Değirmen sistemleri için özel tasarım klepe serisi",
      slug: "sklon-ustu-klepe-serisi",
    },
    {
      name: "Hava Tahliye Sibopları",
      description: "Güvenilir hava tahliye sistemleri",
      slug: "hava-tahliye-siboplari",
    },
    {
      name: "Filtre Kapağı",
      description: "Dayanıklı ve kolay bakımlı filtre kapakları",
      slug: "filtre-kapagi",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div}}}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Değirmen Yedek Parçaları
          </h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
          <p className="text-xl text-gray-600 mb-12">
            Değirmen sistemleri için geniş yedek parça yelpazemiz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/urunler/degirmen/${product.slug}`}
              >
                <div}}}}}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border-l-4 border-red-600 cursor-pointer"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 hover:text-red-600 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div}}}}
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Teknik Bilgi ve Fiyatlandırma
            </h2>
            <p className="text-lg mb-6 text-red-100">
              Değirmen yedek parçalarımız hakkında detaylı teknik bilgi ve
              fiyatlandırma için lütfen bizimle iletişime geçin.
            </p>
            <div}}>
              <Link
                href="/iletisim"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all shadow-lg"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

