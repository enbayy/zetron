"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("hidrolik");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Hidrolik Sistemler",
      description: "Yüksek kaliteli hidrolik sistem çözümleri ile endüstriyel ihtiyaçlarınıza profesyonel çözümler sunuyoruz.",
      imageUrl: null, // "/images/slider/hidrolik.jpg" - resim eklemek için buraya path yazın
      fallbackGradient: "bg-gradient-to-br from-red-600 to-red-800",
      link: "/urunler/hidrolik",
    },
    {
      id: 2,
      title: "Pnömatik Sistemler",
      description: "ISO, CETOP ve Çatal Bağlantı sistemleri ile güvenilir pnömatik çözümler.",
      imageUrl: null, // "/images/slider/pnomatik.jpg" - resim eklemek için buraya path yazın
      fallbackGradient: "bg-gradient-to-br from-red-700 to-red-900",
      link: "/urunler/pnomatik",
    },
    {
      id: 3,
      title: "Alüminyum Döküm",
      description: "Modern teknoloji ile yüksek kaliteli alüminyum döküm hizmetleri.",
      imageUrl: null, // "/images/slider/aluminyum-dokum.jpg" - resim eklemek için buraya path yazın
      fallbackGradient: "bg-gradient-to-br from-red-600 to-red-800",
      link: "/urunler",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const categories = [
    { id: "hidrolik", name: "Hidrolik", color: "from-red-500 to-red-700" },
    { id: "pnomatik", name: "Pnömatik", color: "from-red-600 to-red-800" },
    { id: "degirmen", name: "Değirmen", color: "from-red-400 to-red-600" },
  ];

  // Slug oluşturma fonksiyonu
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s")
      .replace(/ü/g, "u")
      .replace(/İ/g, "i")
      .replace(/I/g, "i")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const products = {
    hidrolik: [
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
    ],
    pnomatik: [
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
    ],
    degirmen: [
      {
        name: "Sklon Üstü Klepe Serisi",
        description: "Değirmen sistemleri için özel tasarım klepe serisi",
        slug: "sklon-ustu-klepe-serisi",
      },
      {
        name: "Hava Tahliye Sibopları",
        description: "Güvenilir hava tahliye sistemleri",
        slug: "hava-tahliye-siboplari",
      },
      {
        name: "Filtre Kapağı",
        description: "Dayanıklı ve kolay bakımlı filtre kapakları",
        slug: "filtre-kapagi",
      },
    ],
  };
  const services = [
    {
      title: "Hidrolik Sistemler",
      description:
        "Kampanalar, DK Kaplin Serisi, Alüminyum Yağ Deposu ve Bakım Kapağı gibi geniş ürün yelpazesi ile hidrolik sistem çözümleri.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      href: "/urunler/hidrolik",
    },
    {
      title: "Pnömatik Sistemler",
      description:
        "ISO, CETOP ve Çatal Bağlantı sistemleri ile profesyonel pnömatik çözümler.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      href: "/urunler/pnomatik",
    },
    {
      title: "Değirmen Yedek Parçaları",
      description:
        "Sklon Üstü Klepe Serisi, Hava Tahliye Sibopları ve Filtre Kapağı gibi değirmen yedek parçaları.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      href: "/urunler/degirmen",
    },
    {
      title: "Alüminyum Döküm",
      description:
        "Profesyonel alüminyum döküm hizmetleri ve üretim çözümleri.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      href: "/urunler",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      {/* Slider Section */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${slide.fallbackGradient} text-white`}
              >
                {/* Background Image or Gradient */}
                <div className="absolute inset-0 overflow-hidden">
                  {slide.imageUrl ? (
                    <Image
                      src={slide.imageUrl}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  ) : null}
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
                  
                  {/* Background Pattern (only if no image) */}
                  {!slide.imageUrl && (
                    <>
                      <motion.div
                        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"
                        animate={{
                          scale: [1, 1.2, 1],
                          x: [0, 50, 0],
                          y: [0, -50, 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-96 h-96 bg-red-900 rounded-full blur-3xl opacity-20"
                        animate={{
                          scale: [1, 1.3, 1],
                          x: [0, -50, 0],
                          y: [0, 50, 0],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <Link
                        href={slide.link}
                        className="inline-block bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
                      >
                        Detaylı Bilgi
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
          aria-label="Önceki slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
          aria-label="Sonraki slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              Ürünlerimiz
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Geniş ürün yelpazemiz ile endüstriyel ihtiyaçlarınıza profesyonel
              çözümler sunuyoruz
            </p>
          </motion.div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Product Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
            >
              {products[activeCategory]?.map((product, index) => (
                <Link
                  key={index}
                  href={`/urunler/${activeCategory}/${product.slug}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group overflow-hidden border border-gray-100 h-full flex flex-col"
                  >
                    <div
                      className={`relative h-48 bg-gradient-to-br ${categories.find((c) => c.id === activeCategory)?.color} overflow-hidden flex-shrink-0`}
                    >
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className="w-20 h-20 text-white opacity-90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href={`/urunler/${activeCategory}`}
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Detaylı Bilgi İçin Tıklayın
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              Hizmetlerimiz
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Geniş ürün yelpazemiz ile endüstriyel ihtiyaçlarınıza profesyonel
              çözümler sunuyoruz
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group h-full flex flex-col"
              >
                <Link href={service.href} className="block flex-1 flex flex-col">
                  <motion.div
                    className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              Hakkımızda
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Zetron Döküm, Hidrolik-Pnömatik, Değirmen Yedek Parçaları,
              Alüminyum Döküm ve Metal Kalıp sistemlerin proje tasarımlarına
              uyum, performans ve verimlilik yönünden en ideal uygulamaları
              sahasında lider olarak yerine getirmektedir.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/kurumsal/hakkimizda"
                className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                Daha Fazla Bilgi
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "25+", label: "Yıllık Deneyim" },
              { number: "500+", label: "Mutlu Müşteri" },
              { number: "1000+", label: "Tamamlanan Proje" },
              { number: "50+", label: "Uzman Ekip" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6"
              >
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-red-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projeleriniz İçin Bizimle İletişime Geçin
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
              Kaliteli hizmet ve ürünlerimiz hakkında daha fazla bilgi almak için
              bize ulaşın. Uzman ekibimiz size yardımcı olmaktan mutluluk
              duyar.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/iletisim"
                className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                İletişime Geçin
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


