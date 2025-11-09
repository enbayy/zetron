"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BakimKapagiVeFlans() {
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
      name: "Alüminyum Yağ Deposu",
      description: "Hafif ve dayanıklı alüminyum yağ depolama sistemleri",
      href: "/urunler/hidrolik/aluminyum-yag-deposu",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Teknik Bilgi ve Fiyatlandırma
            </h2>
            <p className="text-lg mb-6 text-red-100">
              Bakım Kapağı ve Flanş hakkında detaylı teknik bilgi ve fiyatlandırma
              için lütfen bizimle iletişime geçin.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/iletisim"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all shadow-lg"
              >
                İletişime Geçin
              </Link>
            </motion.div>
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Diğer Hidrolik Ürünlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

