import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar.jsx";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next.js Blog Homepage",
    template:"%s | Next.js Blog"
  },
  description: "Next.js Blog - Daily Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}