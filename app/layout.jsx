import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Zetron Hidrolik Pnömatik Döküm Kalıp",
  description: "Hidrolik-Pnömatik, Değirmen Yedek Parçaları, Alüminyum Döküm ve Metal Kalıp sistemlerin proje tasarımlarına uyum, performans ve verimlilik yönünden en ideal uygulamaları sahasında lider olarak yerine getirmektedir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


