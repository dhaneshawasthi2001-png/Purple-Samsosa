import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Purple Samosa — Stuffed with Strategy. Served with Growth.",
  description:
    "Purple Samosa is a premium creative growth partner for modern brands. Stuffed with Strategy. Served with Growth. We combine positioning, high-end web design and development, and digital marketing performance campaigns.",
  metadataBase: new URL("https://purplesamosa.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Purple Samosa — Stuffed with Strategy. Served with Growth.",
    description:
      "Purple Samosa is a premium creative growth partner for modern brands. Stuffed with Strategy. Served with Growth. We combine positioning, high-end web design and development, and digital marketing performance campaigns.",
    url: "https://purplesamosa.com",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "dghdCq3tW9u0sUseoI2nYEOu6VdJh4T1eUH_1yhYcuY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-cream-base text-ink antialiased overflow-x-clip selection:bg-purple-primary selection:text-cream-base">
        {children}
      </body>
    </html>
  );
}
