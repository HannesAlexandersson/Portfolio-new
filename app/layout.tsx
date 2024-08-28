import type { Metadata } from "next";
import { Inter, Bebas_Neue, Grandstander, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const grandstander = Grandstander({ subsets: ['latin'], weight: ['400'] });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: "Hannes portfolio",
  description: "portfolio website for web-dev student Hannes Alexandersson",
  keywords: ["web-dev", "portfolio", "Hannes Alexandersson", "next.js", "react", "typescript", "css", "html", "javascript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className={`${inter.className} ${bebasNeue.className} ${grandstander.className} ${ibmPlexSans.className}`}>{children}</body>
    </html>
  );
}
