"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/ui/sidebar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ArrowUpRight } from "lucide-react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/navbar/ThemeToggle";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DateSelector from "@/components/navbar/DateSelector";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  console.log(!isDarkMode);

  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* <body
        className={cn("min-h-screen w-full flex", inter.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      > */}
        <body className={cn("min-h-screen flex flex-col", inter.className)}>
          {/* Sidebar */}
          <div className="fixed top-1/2 left-0 transform -translate-y-1/2 p-2">
            <Sidebar />
          </div>

          <Navbar />

          {/* Main page */}
          <div
            className="flex-grow p-8 pl-20 w-full"
            style={{ paddingTop: "72px" }}
          >
            {children}
          </div>

          {/* Footer */}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
