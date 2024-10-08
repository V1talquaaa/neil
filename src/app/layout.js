import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HeaderMobile } from "./components/MobileHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neil Meyrick",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <HeaderMobile />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
