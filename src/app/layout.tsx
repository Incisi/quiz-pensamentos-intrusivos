import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <div className="flex flex-col min-h-screen">

            <Header />

            <main className="flex-grow flex flex-col items-center justify-center">
              {children}
            </main>

            <Footer />

          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
