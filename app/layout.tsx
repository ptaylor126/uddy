import type { Metadata } from "next";
import { Montserrat, Pacifico } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Uddy Skincare | Tallow-Based Skincare",
    template: "%s | Uddy Skincare",
  },
  description:
    "Simple, effective skincare. Our tallow-based face balm nourishes and protects your skin with just a few natural ingredients.",
  keywords: [
    "tallow skincare",
    "beef tallow",
    "face balm",
    "natural skincare",
    "eczema",
    "dry skin",
  ],
  authors: [{ name: "Uddy Skincare" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://uddyskincare.com",
    siteName: "Uddy Skincare",
    title: "Uddy Skincare | Tallow-Based Skincare",
    description:
      "Simple, effective skincare. Our tallow-based face balm nourishes and protects your skin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body
        className={`${montserrat.variable} ${pacifico.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
