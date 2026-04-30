import type { Metadata } from "next";
import { Montserrat, Pacifico, Kalam } from "next/font/google";
import { headers } from "next/headers";
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

const kalam = Kalam({
  weight: "400",
  variable: "--font-kalam",
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

// Routes that render without the global header/footer/marquee.
const CHROMELESS_PATHS = ['/prelaunch', '/prelaunch-v1', '/prelaunch-v2', '/prelaunch-v3', '/prelaunch-v4', '/confirmed'];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const heads = await headers();
  const pathname = heads.get('x-pathname') ?? '';
  const chromeless = CHROMELESS_PATHS.includes(pathname);

  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body
        className={`${montserrat.variable} ${pacifico.variable} ${kalam.variable} antialiased`}
      >
        <CartProvider>
          {!chromeless && <Header />}
          <main className="min-h-screen">{children}</main>
          {!chromeless && <Footer />}
        </CartProvider>
      </body>
    </html>
  );
}
