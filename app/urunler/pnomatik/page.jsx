"use client";

import Link from "next/link";

export default function Pnomatik() {
  const products = [
    {
      name: "ISO Bağlantı Sistemleri",
      description: "Uluslararası standartlara uygun ISO bağlantı çözümleri",
      slug: "iso-baglanti-sistemleri",
    },
    {
      name: "CETOP Bağlantı Sistemleri",
      description: "Avrupa standartlarına uygun CETOP bağlantı sistemleri",
      slug: "cetop-baglanti-sistemleri",
    },
    {
      name: "Çatal Bağlantı",
      description: "Güvenilir ve pratik çatal bağlantı sistemleri",
      slug: "catal-baglanti",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Pnömatik Ürünler
          </h1>
          <div className="w-24 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-gray-600 mb-12">
            Geniş pnömatik ürün yelpazemiz ile projelerinize uygun çözümler
            sunuyoruz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/urunler/pnomatik/${product.slug}`}
              >
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-red-600 cursor-pointer">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 hover:text-red-600 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div            className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Teknik Bilgi ve Fiyatlandırma
            </h2>
            <p className="text-lg mb-6 text-red-100">
              Pnömatik ürünlerimiz hakkında detaylı teknik bilgi ve fiyatlandırma
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
        </div>
      </div>
    </div>
  );
}

