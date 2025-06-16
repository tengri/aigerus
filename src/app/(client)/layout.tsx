import "../globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
