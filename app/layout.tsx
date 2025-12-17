import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/Header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Rishav Mondal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a1b26] flex">
        {/* Sidebar */}
        <Header />

        {/* Main Content */}
        <div className="ml-[22%] bg-black w-[78%] min-h-screen p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
