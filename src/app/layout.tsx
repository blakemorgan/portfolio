import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blake Morgan | Performer & Music Director",
  description: "Professional performer, music director, and musician. Member AEA with extensive experience in theatre, percussion, and musical direction.",
  keywords: ["Blake Morgan", "performer", "music director", "theatre", "percussion", "AEA", "pianist", "vocalist", "tenor"],
  authors: [{ name: "Blake Morgan" }],
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Blake Morgan | Performer & Music Director",
    description: "Professional performer, music director, and musician. Member AEA with extensive experience in theatre, percussion, and musical direction.",
    url: "https://blakemorgan.me",
    siteName: "Blake Morgan Portfolio",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
