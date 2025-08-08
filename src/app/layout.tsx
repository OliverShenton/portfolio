import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/FooterSection";
import Header from "@/components/header/Header";

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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
