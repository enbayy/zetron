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
      <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Ürün Kategorilerimiz
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Ürünlerimiz
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-red-600"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>
            <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
              Geniş ürün yelpazemiz ile endüstriyel ihtiyaçlarınıza profesyonel
              çözümler sunuyoruz. Yüksek kalite standartlarımız ve uzman ekibimizle
              size en iyi hizmeti sağlıyoruz.
            </p>
          </motion.div>

          {/* Category Buttons - Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 overflow-hidden group ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl shadow-red-500/30`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-red-300"
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Product Cards - Professional Design */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
            >
              {products[activeCategory]?.map((product, index) => (
                <Link
                  key={index}
                  href={`/urunler/${activeCategory}/${product.slug}`}
                  className="block h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100 h-full flex flex-col relative"
                  >
                    {/* Card Header with Gradient */}
                    <div
                      className={`relative h-56 bg-gradient-to-br ${categories.find((c) => c.id === activeCategory)?.color} overflow-hidden flex-shrink-0`}
                    >
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                      </div>
                      
                      {/* Icon Container */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                          <svg
                            className="w-24 h-24 text-white relative z-10 drop-shadow-lg"
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
                        </div>
                      </motion.div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                          {categories.find((c) => c.id === activeCategory)?.name}
                        </span>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col relative">
                      {/* Hover effect indicator */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-3 leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                        {product.description}
                      </p>
                      
                      {/* Read More Link */}
                      <div className="flex items-center text-red-600 font-semibold text-sm mt-auto pt-4 border-t border-gray-100 group-hover:border-red-200 transition-colors">
                        <span>Detaylı İncele</span>
                        <motion.svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href={`/urunler/${activeCategory}`}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
            >
              <span>Tüm Ürünleri Görüntüle</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Hizmet Alanlarımız
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Hizmetlerimiz
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-red-600"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>
            <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
              Endüstriyel ihtiyaçlarınıza yönelik kapsamlı hizmet yelpazemiz ile
              projelerinize değer katıyoruz. Uzman ekibimiz ve modern teknolojimizle
              size en iyi çözümleri sunuyoruz.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="relative group h-full"
              >
                <Link href={service.href} className="block h-full">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col relative overflow-hidden border border-gray-100">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/50 group-hover:to-transparent transition-all duration-300"></div>
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    
                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col relative z-10">
                      {/* Icon Container - Enhanced */}
                      <motion.div
                        className="relative w-20 h-20 mb-6 flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Icon background with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg group-hover:shadow-xl"></div>
                        
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl group-hover:bg-red-600/30 transition-all duration-300"></div>
                        
                        {/* Icon */}
                        <div className="relative w-full h-full flex items-center justify-center text-red-600 group-hover:text-white transition-colors duration-300">
                          {service.icon}
                        </div>
                      </motion.div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed flex-1 text-sm mb-6">
                        {service.description}
                      </p>
                      
                      {/* Learn More Link */}
                      <div className="flex items-center text-red-600 font-semibold text-sm mt-auto pt-4 border-t border-gray-100 group-hover:border-red-200 transition-colors">
                        <span>Daha Fazla Bilgi</span>
                        <motion.svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </div>
                    </div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-full"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              href="/urunler"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
            >
              <span>Tüm Hizmetlerimizi Keşfedin</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Şirketimiz Hakkında
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Hakkımızda
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-red-600"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>
          </motion.div>

          {/* Main Content - Two Column Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Endüstriyel Çözümlerde
                    <span className="text-red-600 block">Lider Firma</span>
                  </h3>
                  <div className="w-20 h-1 bg-red-600"></div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Zetron Döküm, Hidrolik-Pnömatik, Değirmen Yedek Parçaları,
                  Alüminyum Döküm ve Metal Kalıp sistemlerin proje tasarımlarına
                  uyum, performans ve verimlilik yönünden en ideal uygulamaları
                  sahasında lider olarak yerine getirmektedir.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Yılların deneyimi ve uzman ekibimizle, endüstriyel ihtiyaçlarınıza
                  en kaliteli çözümleri sunarak sektörde öncü konumumuzu sürdürüyoruz.
                </p>
              </motion.div>

              {/* Right Column - Features Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Yüksek Kalite",
                    description: "ISO standartlarında üretim"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    title: "Hızlı Çözüm",
                    description: "Zamanında teslimat garantisi"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Uzman Ekip",
                    description: "Alanında deneyimli profesyoneller"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Rekabetçi Fiyat",
                    description: "Uygun fiyat garantisi"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-4 text-red-600 group-hover:from-red-600 group-hover:to-red-700 group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Değerlerimiz
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Kalite",
                      description: "Her ürünümüzde en yüksek kalite standartlarını uyguluyoruz."
                    },
                    {
                      title: "Güvenilirlik",
                      description: "Müşterilerimize karşı sözümüzü tutmak bizim için önceliktir."
                    },
                    {
                      title: "İnovasyon",
                      description: "Sürekli gelişim ve yenilikçi çözümlerle sektöre öncülük ediyoruz."
                    }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        {value.title}
                      </h4>
                      <p className="text-red-100 leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link
                href="/kurumsal/hakkimizda"
                className="group inline-flex items-center gap-3 bg-white text-red-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 border-2 border-red-600"
              >
                <span>Daha Fazla Bilgi</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </div>
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


