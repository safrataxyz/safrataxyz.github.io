import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import React from "react";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Jakub Safrata",
  description: "jakub safrata | developer, builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
