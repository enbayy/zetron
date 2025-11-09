"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-red-500">ZETRON</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Hidrolik-Pnömatik, Değirmen Yedek Parçaları, Alüminyum Döküm ve
              Metal Kalıp sistemlerin proje tasarımlarına uyum, performans ve
              verimlilik yönünden en ideal uygulamaları sahasında lider olarak
              yerine getirmektedir.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-red-500">Hızlı Linkler</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-red-400 transition-colors inline-block group"
                >
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all mr-0 group-hover:mr-2"></span>
                    Anasayfa
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kurumsal/hakkimizda"
                  className="hover:text-red-400 transition-colors inline-block group"
                >
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all mr-0 group-hover:mr-2"></span>
                    Hakkımızda
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler"
                  className="hover:text-red-400 transition-colors inline-block group"
                >
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all mr-0 group-hover:mr-2"></span>
                    Ürünler
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="hover:text-red-400 transition-colors inline-block group"
                >
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all mr-0 group-hover:mr-2"></span>
                    İletişim
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-red-500">İletişim</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start group">
                <motion.svg
                  className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </motion.svg>
                <span className="group-hover:text-white transition-colors">
                  Fevzi Çakmak Mah. Büsan Org. San. Sit. 10644 Sok. No:30
                  Karatay/KONYA
                </span>
              </li>
              <li className="flex items-center group">
                <motion.svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </motion.svg>
                <a
                  href="tel:+903322513016"
                  className="hover:text-red-400 transition-colors"
                >
                  +9 0.332 251 30 16
                </a>
              </li>
              <li className="flex items-center group">
                <motion.svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
                <a
                  href="mailto:info@zetron.com.tr"
                  className="hover:text-red-400 transition-colors"
                >
                  info@zetron.com.tr
                </a>
              </li>
              <li className="flex items-center">
                <motion.svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </motion.svg>
                <span>+9 0.505 520 47 42</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Zetron. Tüm hakları saklıdır.</p>
        </motion.div>
      </div>
    </footer>
  );
}


