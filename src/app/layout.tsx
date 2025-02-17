import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./_components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./providers";
import { AlertProvider } from "./_components/AlertProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casper Salminen Andreassen",
  description: "Portfolio site for Casper Salminen Andreassen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-light.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-dark.ico"
          sizes="any"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-gray-200 antialiased m-auto w-full px-5 lg:px-0 lg:max-w-3xl pt-10`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
