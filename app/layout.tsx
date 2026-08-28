import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${baloo2.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
