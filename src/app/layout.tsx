import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://64thsquare.com"),
  title: "64thSquare | Senior Technology Advisory",
  description:
    "Fractional CIO, CISO, cybersecurity, technology transformation, and program recovery advisory services.",
  openGraph: {
    title: "64thSquare | Senior Technology Advisory",
    description:
      "Fractional CIO, CISO, cybersecurity, technology transformation, and program recovery advisory services.",
    url: "https://64thsquare.com",
    siteName: "64thSquare",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "64thSquare senior technology advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "64thSquare | Senior Technology Advisory",
    description:
      "Fractional CIO, CISO, cybersecurity, technology transformation, and program recovery advisory services.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
