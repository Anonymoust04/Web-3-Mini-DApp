"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Wallet, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <header className="relative z-10 p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold">SolanaWallet</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/wallet">
              <Button
                variant="outline"
                className="text-gray-500 border-white hover:bg-white hover:text-black transition-colors"
              >
                Launch App
              </Button>
            </Link>
          </motion.div>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Your Gateway to Solana
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of decentralized finance with our intuitive
            Solana wallet interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <Link href="/wallet">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Wallet,
              title: "Easy Management",
              description:
                "Effortlessly manage your Solana tokens and NFTs in one place.",
            },
            {
              icon: Shield,
              title: "Secure Transactions",
              description:
                "Enjoy peace of mind with our robust security measures.",
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              description:
                "Experience the speed of Solana with near-instant transactions.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm"
            >
              <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="relative z-10 border-t border-gray-800 mt-20 py-8 text-center text-gray-400">
        <p>&copy; 2024 SolanaWallet. All rights reserved.</p>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
    </div>
  );
}
