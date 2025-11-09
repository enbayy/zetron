"use client";

export default function KalitePolitikasi() {
  const principles = [
    {
      title: "Kalite Standartları",
      description:
        "Tüm ürün ve hizmetlerimizde en yüksek kalite standartlarını uygulamak",
    },
    {
      title: "Müşteri Odaklılık",
      description:
        "Müşteri ihtiyaçlarını tam olarak karşılayan çözümler sunmak",
    },
    {
      title: "Sürekli İyileştirme",
      description:
        "Sürekli iyileştirme ve gelişim anlayışını benimsemek",
    },
    {
      title: "ISO Uyumluluğu",
      description:
        "ISO standartlarına uygun üretim süreçleri yürütmek",
    },
    {
      title: "Eğitim ve Gelişim",
      description:
        "Çalışanlarımızın eğitimi ve gelişimine önem vermek",
    },
    {
      title: "Kalite Kontrol",
      description:
        "Her aşamada kalite kontrolü yaparak müşterilerimize en iyi ürün ve hizmeti sunmak",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div}}}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Kalite Politikamız
          </h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div}}}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Zetron Döküm olarak, kalite politikamızın temelini müşteri
                memnuniyeti ve sürekli gelişim oluşturmaktadır.
              </p>
            </div>
          </div>

          <div}}}}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Kalite İlkelerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <div
                  key={index}}}}}}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border-l-4 border-red-600"
                >
                  <div className="text-3xl mb-3 text-red-600">✓</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div}}}}
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Kalite Yönetimi</h2>
            <p className="text-lg leading-relaxed mb-6">
              Kalite yönetim sistemimiz, tüm üretim süreçlerimizde standartları
              korumak ve sürekli iyileştirme sağlamak için tasarlanmıştır. Her
              aşamada kalite kontrolü yapılarak, müşterilerimize en iyi ürün ve
              hizmeti sunmayı hedefliyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Süreç Kontrolü</h3>
                <p className="text-red-100">
                  Tüm üretim süreçlerimizde detaylı kalite kontrolü yapılmaktadır.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Test ve Doğrulama</h3>
                <p className="text-red-100">
                  Ürünlerimiz test edilerek müşterilerimize sunulmaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

