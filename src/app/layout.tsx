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
    default: "Safety Experts | Industrial Safety Equipment Supplier Delhi",
    template: "%s | Safety Experts",
  },
  description:
    "Supplier & authorised dealer of PPE kits, safety helmets, industrial gloves, fire safety equipment & fall protection systems in Delhi NCR.",
  keywords: ["safety equipment", "PPE", "industrial safety", "hard hats", "safety gloves", "quote", "Delhi OEM", "safety experts"],
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
