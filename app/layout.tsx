import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/10 to-transparent"></div>
          <main className="container mx-auto p-4 pt-20 max-w-1200px">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
