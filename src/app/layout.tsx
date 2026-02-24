import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QuoteModal } from "@/components/quote-modal";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SafetyPro | Industrial Safety Equipment & PPE Supplier",
    template: "%s | SafetyPro",
  },
  description:
    "B2B supplier of industrial safety equipment and PPE. Request a quote for hard hats, gloves, respirators, fall protection, and more. ISI, CE, ANSI certified.",
  keywords: ["safety equipment", "PPE", "industrial safety", "hard hats", "safety gloves", "quote"],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuoteModal />
      </body>
    </html>
  );
}
