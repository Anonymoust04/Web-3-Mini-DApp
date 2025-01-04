"use client"

import { useEffect, useState, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "./ui/button"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

interface DonationFormProps {
  causeName: string
}

export function DonationForm({ causeName }: DonationFormProps) {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [balance, setBalance] = useState<number>(0);
 
  useEffect(() => {
    if (publicKey) {
      (async function getBalanceEvery10Seconds() {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery10Seconds, 10000);
      })();
    }
  }, [publicKey, connection, balance]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const donate_amount = formData.get("amount") as string;
    const donate_amt_float = donate_amount ? parseFloat(donate_amount) : 0;
    console.log(donate_amount, publicKey, balance);
    if (publicKey && donate_amt_float <= balance) {
      alert(`Donating ${donate_amt_float} SOL to ${causeName}`);
      // Here you would typically call a function to process the donation
    } else {
      alert("Insufficient balance");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 text-white p-6 rounded-lg border border-gray-800">
      <h2 className="text-2xl font-bold mb-4">Donate to {causeName}</h2>
      <p className="text-gray-400 mb-6">
        Fill in the details below to make your donation.
      </p>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="amount" className="text-right">
          Amount
        </Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter amount (e.g 1.000)"
          className="col-span-3 bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="currency" className="text-right">
          Currency
        </Label>
        <Select name="currency">
          <SelectTrigger className="col-span-3 bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700 text-white">
            <SelectItem value="sol">SOL</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="keyAddress" className="text-right">
          Public Key Address
        </Label>
        <Input
          id="keyAddress"
          name="keyAddress"
          value={publicKey?.toString()}
          readOnly
          className="col-span-3 bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name (optional)"
          className="col-span-3 bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="message" className="text-right">
          Message
        </Label>
        <Input
          id="message"
          name="message"
          placeholder="Your message (optional)"
          className="col-span-3 bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <Button type="submit" className="w-full mt-4 hover:bg-rose-800 hover:text-white">
        Confirm Donation
      </Button>
    </form>
  )
}

