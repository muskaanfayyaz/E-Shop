import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header"; // Import Header
import Footer from "./components/footer"; // Import Footer
import "./globals.css";

// Use Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Server-side metadata export
export const metadata: Metadata = {
  title: "E-Shop",
  description: "The best place to shop online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          {/* Include Header */}
          <Header />

          {/* Main Content */}
          <main>{children}</main>

          {/* Include Footer */}
          <Footer />
        </body>
      </html>
  );
}
