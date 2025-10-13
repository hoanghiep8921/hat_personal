import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StarsBackground } from "./components/backgrounds/stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trinh Ha Anh",
  description: "Personal website for Trinh Ha Anh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true} className={`${inter.className}  text-white`}>
        <StarsBackground className="min-h-screen">
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </StarsBackground>
      </body>
    </html>
  );
}
