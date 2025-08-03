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
      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
}
