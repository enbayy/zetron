"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isKurumsalMobileOpen, setIsKurumsalMobileOpen] = useState(false);
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduced animation config for mobile
  const animationConfig = isMobile ? { duration: 0.1 } : { duration: 0.5 };
  const motionProps = isMobile ? {} : { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: animationConfig };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      {/* Contact Information Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-between py-2.5 text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-300">
              <a
                href="tel:+903322513016"
                className="flex items-center gap-2 hover:text-white transition-all duration-200 group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden sm:inline font-medium">+90 332 251 30 16</span>
                <span className="sm:hidden font-medium">0555 123 45 67</span>
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a
                href="mailto:info@zetron.com"
                className="flex items-center gap-2 hover:text-white transition-all duration-200 group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hidden md:inline font-medium">info@zetron.com</span>
                <span className="md:hidden font-medium">E-posta</span>
              </a>
              <span className="hidden lg:inline text-gray-600">|</span>
              <div className="hidden lg:flex items-center gap-2 text-gray-300">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                </svg>
                <span className="font-medium">Konya, Türkiye</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/zetron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 p-1.5 hover:bg-gray-700 rounded"
                aria-label="LinkedIn"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/zetron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 p-1.5 hover:bg-gray-700 rounded"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/zetron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 p-1.5 hover:bg-gray-700 rounded"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/zetronLogo.png"
                  alt="Zetron Logo"
                  width={180}
                  height={60}
                  className="object-contain group-hover:opacity-90 transition-opacity duration-200"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div>
              <Link
                href="/"
                className="relative px-4 py-2 text-gray-700 hover:text-red-600 font-semibold text-sm transition-colors duration-200 group"
              >
                Anasayfa
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-200 group-hover:w-3/4"></span>
              </Link>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsKurumsalOpen(true)}
              onMouseLeave={() => setIsKurumsalOpen(false)}
            >
              <button className="relative px-4 py-2 text-gray-700 hover:text-red-600 font-semibold text-sm transition-all duration-200 flex items-center group">
                Kurumsal
                <svg
                  className={`w-4 h-4 ml-1.5 text-gray-500 group-hover:text-red-600 transition-transform duration-200 ${isKurumsalOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              {isKurumsalOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-2xl py-2 border border-gray-100 overflow-hidden">
                    <Link
                      href="/kurumsal/hakkimizda"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Hakkımızda
                    </Link>
                    <Link
                      href="/kurumsal/vizyon"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Vizyon
                    </Link>
                    <Link
                      href="/kurumsal/misyon"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Misyon
                    </Link>
                    <Link
                      href="/kurumsal/kalite-politikasi"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Kalite Politikası
                    </Link>
                    <Link
                      href="/kurumsal/belgeler"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Belgeler
                    </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="relative px-4 py-2 text-gray-700 hover:text-red-600 font-semibold text-sm transition-all duration-200 flex items-center group">
                Ürünler
                <svg
                  className={`w-4 h-4 ml-1.5 text-gray-500 group-hover:text-red-600 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-2xl py-2 border border-gray-100 overflow-hidden">
                    <Link
                      href="/urunler/hidrolik"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Hidrolik
                    </Link>
                    <Link
                      href="/urunler/pnomatik"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Pnömatik
                    </Link>
                    <Link
                      href="/urunler/degirmen"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Değirmen
                    </Link>
                    <Link
                      href="/urunler/metal-kalip"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Metal Kalıp
                    </Link>
                    <Link
                      href="/urunler/enjeksiyon-dokum"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-red-600"
                    >
                      Enjeksiyon Döküm
                    </Link>
                </div>
              )}
            </div>
            <div>
              <Link
                href="/iletisim"
                className="relative px-4 py-2 text-gray-700 hover:text-red-600 font-semibold text-sm transition-colors duration-200 group"
              >
                İletişim
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-200 group-hover:w-3/4"></span>
              </Link>
            </div>
            <div className="ml-4">
              <Link
                href="/iletisim"
                className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Teklif Al
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 overflow-hidden bg-white">
              <div className="space-y-1">
                <Link
                  href="/"
                  className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Anasayfa
                </Link>
                <div className="px-4 py-2">
                  <button
                    onClick={() => setIsKurumsalMobileOpen(!isKurumsalMobileOpen)}
                    className="w-full flex items-center justify-between px-2 py-2 text-gray-900 font-bold text-sm hover:text-red-600 transition-all duration-200"
                  >
                    <span>Kurumsal</span>
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isKurumsalMobileOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isKurumsalMobileOpen && (
                    <div className="overflow-hidden">
                        <div className="space-y-1 pt-2">
                          <Link
                            href="/kurumsal/hakkimizda"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Hakkımızda
                          </Link>
                          <Link
                            href="/kurumsal/vizyon"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Vizyon
                          </Link>
                          <Link
                            href="/kurumsal/misyon"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Misyon
                          </Link>
                          <Link
                            href="/kurumsal/kalite-politikasi"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Kalite Politikası
                          </Link>
                          <Link
                            href="/kurumsal/belgeler"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Belgeler
                          </Link>
                        </div>
                    </div>
                  )}
                </div>
                <div className="px-4 py-2">
                  <button
                    onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)}
                    className="w-full flex items-center justify-between px-2 py-2 text-gray-900 font-bold text-sm hover:text-red-600 transition-colors duration-200"
                  >
                    <span>Ürünler</span>
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isProductsMobileOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isProductsMobileOpen && (
                    <div className="overflow-hidden">
                        <div className="space-y-1 pt-2">
                          <Link
                            href="/urunler/hidrolik"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Hidrolik
                          </Link>
                          <Link
                            href="/urunler/pnomatik"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Pnömatik
                          </Link>
                          <Link
                            href="/urunler/degirmen"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Değirmen
                          </Link>
                          <Link
                            href="/urunler/metal-kalip"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Metal Kalıp
                          </Link>
                          <Link
                            href="/urunler/enjeksiyon-dokum"
                            className="block px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium text-sm rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Enjeksiyon Döküm
                          </Link>
                        </div>
                    </div>
                  )}
                </div>
                <Link
                  href="/iletisim"
                  className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 font-semibold rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </Link>
                <div className="px-4 pt-2">
                  <Link
                    href="/iletisim"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm rounded-lg hover:from-red-700 hover:to-red-800 transition-colors duration-200 shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
          </div>
        )}
      </div>
    </header>
  );
}


