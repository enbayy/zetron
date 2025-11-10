"use client";

import Link from "next/link";

export default function MetalKalipTasarimi() {
  const relatedProducts = [
    {
      name: "Kalıp Üretimi",
      description: "Yüksek kaliteli metal kalıp üretimi",
      href: "/urunler/metal-kalip/kalip-uretimi",
    },
    {
      name: "Kalıp Bakım ve Onarım",
      description: "Uzman ekibimizle kalıp bakım ve onarım hizmetleri",
      href: "/urunler/metal-kalip/kalip-bakim-ve-onarim",
    },
    {
      name: "Teknik Danışmanlık",
      description: "Metal kalıp konusunda teknik danışmanlık hizmetleri",
      href: "/urunler/metal-kalip/teknik-danismanlik",
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
              Metal Kalıp Tasarımı hakkında detaylı teknik bilgi ve fiyatlandırma
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

          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Diğer Metal Kalıp Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

