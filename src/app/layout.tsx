import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../app/components/header"; // Import Header
import Footer from "../app/components/footer"; // Import Footer
import "./globals.css";

// Define font styles
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Server-side metadata export (no "use client" directive here)
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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
