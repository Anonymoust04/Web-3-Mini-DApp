"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Shield, Wallet } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import SolanaImg from "./solana.png"
import BitcoinImg from "./bitcoin.png"
import EthereumImg from "./ethereum.png"
import { Label } from "@/components/ui/label"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white">
      {/* Warning Banner */}
      <div className="bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 text-sm text-center">
        <p>
          Currently supporting donations in SOL.
        </p>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-rose-500" />
          <span className="font-bold text-xl">CharityBlock</span>
        </div>
        <WalletMultiButton     
          style={{
              backgroundColor: "white",
              color: "black",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: "lighter",
              height: "2.5rem",
            }}
          />
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Decentralized Donations
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
            for Global Impact
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          with{" "}
          <span className="text-rose-500">self-custodial</span> &{" "}
          <span className="text-purple-600">transparent giving</span> 
        </p>
        <Link href="/donate">
          <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
            Donate Now
          </Button>
        </Link>
      </main>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-gray-900/50 border-gray-800">
            <Shield className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure & Transparent</h3>
            <p className="text-gray-400">
              All transactions are recorded on-chain, ensuring complete transparency and accountability.
            </p>
          </Card>
          <Card className="p-6 bg-gray-900/50 border-gray-800">
            <Wallet className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Multiple Tokens</h3>
            <p className="text-gray-400">
              Donate using various Solana tokens, including SOL, BitCoin, and popular meme tokens.
            </p>
          </Card>
          <Card className="p-6 bg-gray-900/50 border-gray-800">
            <Heart className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Direct Impact</h3>
            <p className="text-gray-400">
              Your donations go directly to verified charitable organizations with minimal fees.
            </p>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-gray-800">
        <p className="text-sm text-gray-500 mb-9">BACKED BY</p>
        <div className="flex justify-center items-center gap-12 opacity-75">
          <div>
            <Image
              src= {SolanaImg}
              alt="Solana Logo"
              width={95}
              height={30}
              className="opacity-1000 hover:opacity-100 transition-opacity mt-0"
            />
            <Label>Solana</Label>
          </div>
          <div>
            <Image
              src={BitcoinImg}
              alt="Bitcoin Logo"
              width={50}
              height={70}
              className="opacity-500 brightness-100 hover:opacity-500 transition-opacity ml-12 pb-1"
            />
            <Label>Bitcoin (Coming Soon) </Label>
          </div>
          <div>
            <Image
              src= {EthereumImg}
              alt="Ethereum Logo"
              width={55}
              height={70}
              className="opacity-500 hover:opacity-500 transition-opacity ml-12"
              />
            <Label>Ethereum (Coming Soon) </Label>
          </div>
        </div>
      </footer>
      <footer className="relative z-10 border-t border-gray-800 mt-20 py-8 text-center text-gray-400">
        <p>&copy; 2025 CharityBlock. All rights reserved.</p>
      </footer>
    </div>
  )
}

