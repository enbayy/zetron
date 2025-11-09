"use client";

export default function Misyon() {
  const missionValues = [
    {
      title: "Yüksek Kalite",
      description: "Tüm ürün ve hizmetlerimizde en yüksek kalite standartlarını uygulamak",
    },
    {
      title: "Müşteri Memnuniyeti",
      description: "Müşteri ihtiyaçlarını tam olarak karşılayan çözümler sunmak",
    },
    {
      title: "Sürekli İyileştirme",
      description: "Sürekli iyileştirme ve gelişim anlayışını benimsemek",
    },
    {
      title: "Standartlara Uyum",
      description: "ISO standartlarına uygun üretim süreçleri yürütmek",
    },
    {
      title: "Ekip Gelişimi",
      description: "Çalışanlarımızın eğitimi ve gelişimine önem vermek",
    },
    {
      title: "Güvenilirlik",
      description: "Güvenilir ve şeffaf iş süreçleri ile hizmet vermek",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div}}}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Misyonumuz
          </h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div}}}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Zetron Döküm her zaman en kaliteli ürünü en uygun koşullarda
                müşterilerine sunmayı hedeflemektedir. Gelecek vizyonunu siz
                değerli müşterileri için sürekli geliştirmektedir.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Misyonumuz, müşterilerimizin ihtiyaçlarını en iyi şekilde
                karşılamak, projelerine değer katmak ve uzun vadeli iş
                ortaklıkları kurmaktır.
              </p>
            </div>
          </div>

          <div}}}}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Değerlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionValues.map((value, index) => (
                <div
                  key={index}}}}}}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border-t-4 border-red-600"
                >
                  <div className="text-3xl mb-3">✓</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div}}}}
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Hedeflerimiz</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-red-200 mr-3 text-2xl">•</span>
                <span>
                  Müşteri memnuniyetini ön planda tutmak
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-3 text-2xl">•</span>
                <span>
                  Sürekli gelişim ve yenilikçilik
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-3 text-2xl">•</span>
                <span>
                  Çevreye duyarlı üretim
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-200 mr-3 text-2xl">•</span>
                <span>
                  Sektörde öncü konumumuzu korumak
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

