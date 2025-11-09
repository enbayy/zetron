"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      {/* Contact Information Bar */}
      <div className="bg-red-800 border-b border-red-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm">
            <div className="flex flex-wrap items-center gap-4 text-red-100">
              <a
                href="tel:+905551234567"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden sm:inline">+90 555 123 45 67</span>
                <span className="sm:hidden">0555 123 45 67</span>
              </a>
              <a
                href="mailto:info@zetron.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hidden md:inline">info@zetron.com</span>
                <span className="md:hidden">E-posta</span>
              </a>
              <div className="hidden lg:flex items-center gap-2 text-red-100">
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
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/zetron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/zetron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/zetron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/zetron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-2xl font-bold text-white group-hover:text-red-100 transition-colors">
                ZETRON
              </div>
              <div className="text-xs text-red-100 hidden md:block">
                Hidrolik Pnömatik Döküm Kalıp
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-white hover:text-red-100 font-medium transition-colors relative group"
              >
                Anasayfa
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
              onMouseEnter={() => setIsKurumsalOpen(true)}
              onMouseLeave={() => setIsKurumsalOpen(false)}
            >
              <button className="text-white hover:text-red-100 font-medium transition-colors flex items-center relative group">
                Kurumsal
                <motion.svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isKurumsalOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
              <AnimatePresence>
                {isKurumsalOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-red-100"
                  >
                    <Link
                      href="/kurumsal/hakkimizda"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Hakkımızda
                    </Link>
                    <Link
                      href="/kurumsal/vizyon"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Vizyon
                    </Link>
                    <Link
                      href="/kurumsal/misyon"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Misyon
                    </Link>
                    <Link
                      href="/kurumsal/kalite-politikasi"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Kalite Politikası
                    </Link>
                    <Link
                      href="/kurumsal/belgeler"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Belgeler
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-white hover:text-red-100 font-medium transition-colors flex items-center relative group">
                Ürünler
                <motion.svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-red-100"
                  >
                    <Link
                      href="/urunler/hidrolik"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Hidrolik
                    </Link>
                    <Link
                      href="/urunler/pnomatik"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Pnömatik
                    </Link>
                    <Link
                      href="/urunler/degirmen"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Değirmen
                    </Link>
                    <Link
                      href="/urunler/metal-kalip"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Metal Kalıp
                    </Link>
                    <Link
                      href="/urunler/enjeksiyon-dokum"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Enjeksiyon Döküm
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/iletisim"
                className="text-white hover:text-red-100 font-medium transition-colors relative group"
              >
                İletişim
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden text-white hover:text-red-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
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
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4 border-t border-red-500 overflow-hidden bg-red-700"
            >
              <Link
                href="/"
                className="block py-2 text-white hover:text-red-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Anasayfa
              </Link>
              <div className="py-2">
                <div className="text-white font-medium mb-2">Kurumsal</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/kurumsal/hakkimizda"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    href="/kurumsal/vizyon"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vizyon
                  </Link>
                  <Link
                    href="/kurumsal/misyon"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Misyon
                  </Link>
                  <Link
                    href="/kurumsal/kalite-politikasi"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kalite Politikası
                  </Link>
                  <Link
                    href="/kurumsal/belgeler"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Belgeler
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <div className="text-white font-medium mb-2">Ürünler</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/urunler/hidrolik"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hidrolik
                  </Link>
                  <Link
                    href="/urunler/pnomatik"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pnömatik
                  </Link>
                  <Link
                    href="/urunler/degirmen"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Değirmen
                  </Link>
                  <Link
                    href="/urunler/metal-kalip"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Metal Kalıp
                  </Link>
                  <Link
                    href="/urunler/enjeksiyon-dokum"
                    className="block py-1 text-red-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Enjeksiyon Döküm
                  </Link>
                </div>
              </div>
              <Link
                href="/iletisim"
                className="block py-2 text-white hover:text-red-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}


