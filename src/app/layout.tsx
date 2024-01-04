import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

export const metadata: Metadata = {
  title: "Jakub Safrata",
  description: "a fullstack developer, builder - jakub safrata",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-full bg-stone-200 dark:bg-stone-900 text-stone-900 dark:text-stone-200 ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DarkModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
