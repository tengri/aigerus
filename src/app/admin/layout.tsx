"use client";

import "../globals.css";
import Footer from "../components/Footer";
import AdminNav from "../components/AdminNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminNav />
      {children}
      <Footer />
    </>
  );
}
