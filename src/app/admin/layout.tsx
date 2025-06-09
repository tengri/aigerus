"use client";

import "../globals.css";
import Footer from "../components/Footer";
import AdminNav from "../components/AdminNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminNav />
      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto">
        {children}
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
