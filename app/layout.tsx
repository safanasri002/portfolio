import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safa Nasri — Portfolio",
  description:
    "Safa Nasri, software engineering student passionate about Machine Learning, AI, and full-stack development. Explore projects in fraud detection, art auctions, OCR pipelines, and more.",
  openGraph: {
    title: "Safa Nasri — Portfolio",
    description:
      "Software engineering student passionate about Machine Learning, AI, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
