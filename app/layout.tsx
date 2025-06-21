import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Bebas_Neue, Grandstander, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const grandstander = Grandstander({ subsets: ['latin'], weight: ['400'] });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: "Hannes portfolio",
  description: "portfolio website for web-dev student Hannes Alexandersson",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: ["web-dev", "portfolio", "Hannes Alexandersson", "next.js", "react", "typescript", "css", "html", "javascript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebasNeue.className} ${grandstander.className} ${ibmPlexSans.className}`}>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
