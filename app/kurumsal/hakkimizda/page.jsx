"use client";

import Link from "next/link";

export default function Hakkimizda() {
  const features = [
    {
      title: "Kaliteli Üretim",
      description:
        "En yüksek kalite standartlarında üretim yaparak müşterilerimize güvenilir ürünler sunuyoruz.",
      icon: "✓",
    },
    {
      title: "Uzman Ekip",
      description:
        "Alanında uzman ve deneyimli ekibimiz ile projelerinize değer katıyoruz.",
      icon: "👥",
    },
    {
      title: "Modern Teknoloji",
      description:
        "Güncel teknolojiler ve modern üretim tesislerimiz ile hizmet veriyoruz.",
      icon: "⚙️",
    },
    {
      title: "Müşteri Odaklı",
      description:
        "Müşteri memnuniyetini ön planda tutarak uzun vadeli iş ortaklıkları kuruyoruz.",
      icon: "❤️",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Hakkımızda
          </h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Zetron Döküm, Hidrolik-Pnömatik, Değirmen Yedek Parçaları,
                Alüminyum Döküm ve Metal Kalıp sistemlerin proje tasarımlarına
                uyum, performans ve verimlilik yönünden en ideal uygulamaları
                sahasında lider olarak yerine getirmektedir.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Firmamız, sektördeki deneyimi ve teknolojik altyapısı ile
                müşterilerine en kaliteli ürün ve hizmetleri sunmayı
                hedeflemektedir. Uzman ekibimiz ve modern üretim tesislerimiz ile
                projelerinize değer katıyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Kalite, güvenilirlik ve müşteri memnuniyeti ilkelerimiz
                doğrultusunda, sektörde öncü bir konumda yer almaktayız.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Neden Zetron?</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-red-200 mr-3 text-2xl">✓</span>
                <span>
                  Yılların deneyimi ve sektördeki lider konumumuz
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-3 text-2xl">✓</span>
                <span>
                  Modern teknoloji ve kaliteli üretim süreçleri
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-3 text-2xl">✓</span>
                <span>
                  Müşteri odaklı hizmet anlayışı ve hızlı çözümler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-3 text-2xl">✓</span>
                <span>
                  Geniş ürün yelpazesi ve özel tasarım çözümleri
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/iletisim"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all shadow-lg"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
