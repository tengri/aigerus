import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StrictMode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Aigerus.com Квартиры посуточно в Алматы",
  description: "Квартиры посуточно в Алматы",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aigerus.com Квартиры посуточно в Алматы</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100`}
      >
        <ToastContainer />
        <StrictMode>
          {/* <Nav /> */}
          {children}
          {/* <Footer /> */}
        </StrictMode>
      </body>
      <GoogleAnalytics gaId="G-YLRQLF24M7" />
    </html>
  );
}
