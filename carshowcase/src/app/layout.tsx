import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { fetchFooter, fetchHeader } from "./lib/cms";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carshowcase",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-gray-900 flex flex-col items-center ${font.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
