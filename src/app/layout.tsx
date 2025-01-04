import "./globals.css"
import { Inter } from 'next/font/google'
import { Metadata } from "next"
import AppWalletProvider from "../components/AppWalletProvider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CharityBlock - Decentralized Donations on Solana",
  description: "Make transparent and self-custodial donations using Solana tokens",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}

