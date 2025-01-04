"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GlowButton } from "@/components/ui/glow-button"
import { Button } from "./ui/button"

interface DonationDialogProps {
  causeName: string
}

export function DonationDialog({ causeName }: DonationDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-gray-500 hover:bg-rose-800 hover:text-white">
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle>Donate to {causeName}</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill in the details below to make your donation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount (e.g 1.000)"
              className="col-span-3 bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="currency" className="text-right">
              Currency
            </Label>
            <Select>
              <SelectTrigger className="col-span-3 bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="sol">SOL</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Public Key Adress
            </Label>
            <Input
              id="name"
              placeholder="e.g."
              className="col-span-3 bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
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
              placeholder="Your message (optional)"
              className="col-span-3 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>
        <Button className="w-full mt-4 hover:bg-rose-800 hover:text-white" onClick={() => setIsOpen(false)}>
          Confirm Donation
        </Button>
      </DialogContent>
    </Dialog>
  )
}
