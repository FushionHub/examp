import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exam Pilot",
  description: "Your guide to exam success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-background`}
      >
        <div className="flex">
          <div className="hidden md:flex">
            <Sidebar />
          </div>
          <main className="flex-grow">
            {children}
          </main>
        </div>
        <div className="md:hidden">
          <BottomNav />
        </div>
      </body>
    </html>
  );
}