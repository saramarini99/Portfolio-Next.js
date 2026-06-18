import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sara Marini",
  description: "My portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="fixed inset-0 -z-10 bg-gradient-to-b from-violet-500/10 to-transparent" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
