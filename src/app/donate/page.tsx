import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomProgress } from "@/components/ui/custom-progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlowButton } from "@/components/ui/glow-button"
import { DonationDialog } from "@/components/donation-dialog"
import { ArrowRight, Globe, Heart, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

var eduImg = require("../education.png")
var envImg = require("../environment.png")
var healthImg = require("../patient.png")

interface DonationCause {
  id: string
  title: string
  description: string
  category: string
  raised: number
  goal: number
  donors: number
  image: any
}

const causes: DonationCause[] = [
  {
    id: "education-fund",
    title: "Global Education Fund",
    description: "Support educational initiatives in developing countries. Providing resources, building schools, and enabling access to quality education for underprivileged children.",
    category: "Education",
    raised: 145000,
    goal: 500000,
    donors: 1234,
    image: eduImg
  },
  {
    id: "climate-action",
    title: "Climate Action Initiative",
    description: "Fund climate change mitigation projects including renewable energy installations, reforestation efforts, and community resilience programs.",
    category: "Environment",
    raised: 289000,
    goal: 750000,
    donors: 2156,
    image: envImg
  },
  {
    id: "healthcare-access",
    title: "Healthcare Access Program",
    description: "Improve healthcare accessibility in remote areas by supporting mobile clinics, medical supplies, and healthcare worker training programs.",
    category: "Healthcare",
    raised: 367000,
    goal: 1000000,
    donors: 3789,
    image: healthImg
  }
]

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white">
      {/* Navigation Header */}
      <nav className="border-b border-gray-800/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-500" />
              <span className="font-bold text-xl">CharityBlock</span>
            </Link>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <GlowButton 
                showArrow={false}
                className="text-sm hover:bg-rose-500"
                glowColor="rgba(220, 43, 82, 0.3)"
              >
                Connect Wallet
              </GlowButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Donation Causes</h1>
            <p className="text-gray-400">Support verified charitable initiatives with transparent on-chain donations</p>
          </div>
          <Link href="/">
            <Button variant="outline" className="border-gray-800 text-black hover:bg-gray-800/50 hover:text-white">
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="pb-12">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-gray-900/50">
              <TabsTrigger value="all">All Causes</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="environment">Environment</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {causes.map((cause) => (
                  <Card key={cause.id} className="bg-gray-900/50 border-gray-800">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-800 text-gray-300">
                          {cause.category}
                        </span>
                        <span className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {cause.donors} donors
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{cause.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {cause.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between items-end text-sm mb-2">
                          <div>
                            <span className="text-gray-400 block">Raised</span>
                            <span className="text-2xl font-bold text-white">${cause.raised.toLocaleString()}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-400 block">Goal</span>
                            <span className="text-lg font-semibold text-white">${cause.goal.toLocaleString()}</span>
                          </div>
                        </div>
                        <CustomProgress 
                          value={cause.raised} 
                          max={cause.goal}
                          className="shadow-lg shadow-rose-500/10"
                        />
                      </div>
                      <DonationDialog causeName={cause.title} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {causes.filter(cause => cause.category == "Education").map((cause) => (
                  <Card key={cause.id} className="bg-gray-900/50 border-gray-800">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-800 text-gray-300">
                          {cause.category}
                        </span>
                        <span className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {cause.donors} donors
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{cause.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {cause.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between items-end text-sm mb-2">
                          <div>
                            <span className="text-gray-400 block">Raised</span>
                            <span className="text-2xl font-bold text-white">${cause.raised.toLocaleString()}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-400 block">Goal</span>
                            <span className="text-lg font-semibold text-white">${cause.goal.toLocaleString()}</span>
                          </div>
                        </div>
                        <CustomProgress 
                          value={cause.raised} 
                          max={cause.goal}
                          className="shadow-lg shadow-rose-500/10"
                        />
                      </div>
                      <DonationDialog causeName={cause.title} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="environment" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {causes.filter(cause => cause.category == "Environment").map((cause) => (
                  <Card key={cause.id} className="bg-gray-900/50 border-gray-800">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-800 text-gray-300">
                          {cause.category}
                        </span>
                        <span className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {cause.donors} donors
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{cause.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {cause.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between items-end text-sm mb-2">
                          <div>
                            <span className="text-gray-400 block">Raised</span>
                            <span className="text-2xl font-bold text-white">${cause.raised.toLocaleString()}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-400 block">Goal</span>
                            <span className="text-lg font-semibold text-white">${cause.goal.toLocaleString()}</span>
                          </div>
                        </div>
                        <CustomProgress 
                          value={cause.raised} 
                          max={cause.goal}
                          className="shadow-lg shadow-rose-500/10"
                        />
                      </div>
                      <DonationDialog causeName={cause.title} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="healthcare" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {causes.filter(cause => cause.category == "Healthcare").map((cause) => (
                  <Card key={cause.id} className="bg-gray-900/50 border-gray-800">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-800 text-gray-300">
                          {cause.category}
                        </span>
                        <span className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {cause.donors} donors
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{cause.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {cause.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between items-end text-sm mb-2">
                          <div>
                            <span className="text-gray-400 block">Raised</span>
                            <span className="text-2xl font-bold text-white">${cause.raised.toLocaleString()}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-400 block">Goal</span>
                            <span className="text-lg font-semibold text-white">${cause.goal.toLocaleString()}</span>
                          </div>
                        </div>
                        <CustomProgress 
                          value={cause.raised} 
                          max={cause.goal}
                          className="shadow-lg shadow-rose-500/10"
                        />
                      </div>
                      <DonationDialog causeName={cause.title} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
          </Tabs>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Total Donations</p>
                    <h3 className="text-2xl font-bold text-white">$801,000</h3>
                  </div>
                  <Heart className="w-8 h-8 text-rose-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Active Donors</p>
                    <h3 className="text-2xl font-bold text-white">7,179</h3>
                  </div>
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Countries Impacted</p>
                    <h3 className="text-2xl font-bold text-white">43</h3>
                  </div>
                  <Globe className="w-8 h-8 text-rose-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <footer className="relative z-10 border-t border-gray-800 mt-20 py-8 text-center text-gray-400">
        <p>&copy; 2025 CharityBlock. All rights reserved.</p>
      </footer>
    </div>
  )
}

