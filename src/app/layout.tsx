import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScreenBorderFades from "@/components/global/ScreenBorderFades";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio | Oliver Shenton",
  description: "A showcase of my work as a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>
        {/* Vercel insights */}
        <Analytics />
        <SpeedInsights />
        <Header />
        <ScreenBorderFades />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
