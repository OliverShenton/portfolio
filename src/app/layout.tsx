import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/FooterSection";
import Header from "@/components/header/Header";
import { Inter } from "next/font/google";
import Hr from "@/components/global/Hr";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oliver Shenton | Frontend Developer Portfolio",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Hr />
        <Footer />
      </body>
    </html>
  );
}
