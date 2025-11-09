"use client";

import { motion } from "framer-motion";

export default function Vizyon() {
  const visionPoints = [
    {
      title: "Kaliteli Hizmet",
      description:
        "Her zaman en kaliteli ürünü en uygun koşullarda müşterilerimize sunmayı hedefliyoruz.",
    },
    {
      title: "Sürekli Gelişim",
      description:
        "Gelecek vizyonunu siz değerli müşterilerimiz için sürekli geliştirmekteyiz.",
    },
    {
      title: "Sektörde Liderlik",
      description:
        "Ulusal ve uluslararası pazarlarda tanınan, güvenilir ve kaliteli hizmet sunan bir marka olmak.",
    },
    {
      title: "Yenilikçilik",
      description:
        "Teknolojik yenilikleri takip eden, sürdürülebilir büyüme sağlayan bir firma olmak.",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Vizyonumuz
          </h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Zetron Döküm her zaman en kaliteli ürünü en uygun koşullarda
                müşterilerine sunmayı hedeflemektedir. Gelecek vizyonunu siz
                değerli müşterileri için sürekli geliştirmektedir.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Sektörde öncü bir firma olarak, teknolojik yenilikleri takip
                eden, sürdürülebilir büyüme sağlayan ve müşteri odaklı hizmet
                anlayışı ile geleceğe yön vermeyi amaçlıyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Vizyonumuz, ulusal ve uluslararası pazarlarda tanınan, güvenilir
                ve kaliteli hizmet sunan bir marka olmaktır.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border-l-4 border-red-600"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


