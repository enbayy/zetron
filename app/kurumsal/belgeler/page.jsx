"use client";

export default function Belgeler() {
  const certificates = [
    {
      title: "ISO Sertifikaları",
      description: "Uluslararası kalite standartlarına uygunluk belgelerimiz",
      icon: "📜",
    },
    {
      title: "Üretim İzinleri",
      description: "Yasal üretim izinleri ve belgelerimiz",
      icon: "📋",
    },
    {
      title: "Kalite Belgeleri",
      description: "Ürün kalite belgeleri ve test raporları",
      icon: "✅",
    },
    {
      title: "Çevre Belgeleri",
      description: "Çevreye duyarlı üretim belgelerimiz",
      icon: "🌱",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div}}}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Belgelerimiz
          </h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div}}}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Zetron Döküm olarak, kalite standartlarımızı ve iş süreçlerimizi
                belgeleyen çeşitli sertifikalar ve belgelerimiz bulunmaktadır.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {certificates.map((cert, index) => (
              <div
                key={index}}}}}}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all hover:border-red-600"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          <div}}}}
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Belgeler Hakkında</h2>
            <p className="text-lg leading-relaxed mb-6">
              Belgelerimiz hakkında daha detaylı bilgi almak için lütfen bizimle
              iletişime geçin. Tüm belgelerimiz güncel ve yasal gereklilikleri
              karşılamaktadır.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <span className="font-semibold">ISO 9001</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <span className="font-semibold">CE Belgesi</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <span className="font-semibold">TSE Belgesi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

