"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hidrolik() {
  const products = [
    {
      name: "Kampanalar",
      description: "Yüksek kaliteli hidrolik kampana sistemleri",
      slug: "kampanalar",
    },
    {
      name: "DK Kaplin Serisi",
      description: "Güvenilir ve dayanıklı kaplin çözümleri",
      slug: "dk-kaplin-serisi",
    },
    {
      name: "Alüminyum Yağ Deposu",
      description: "Hafif ve dayanıklı alüminyum yağ depolama sistemleri",
      slug: "aluminyum-yag-deposu",
    },
    {
      name: "Bakım Kapağı ve Flanş",
      description: "Kolay bakım ve erişim için özel tasarım kapaklar",
      slug: "bakim-kapagi-ve-flans",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Hidrolik Ürünler
          </h1>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
          <p className="text-xl text-gray-600 mb-12">
            Geniş hidrolik ürün yelpazemiz ile projelerinize uygun çözümler
            sunuyoruz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product, index) => (
              <Link key={index} href={`/urunler/hidrolik/${product.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border-l-4 border-red-600 cursor-pointer"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 hover:text-red-600 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Teknik Bilgi ve Fiyatlandırma
            </h2>
            <p className="text-lg mb-6 text-red-100">
              Hidrolik ürünlerimiz hakkında detaylı teknik bilgi ve fiyatlandırma
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
        </motion.div>
      </div>
    </div>
  );
}


