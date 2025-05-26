"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function InitiativesModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-[#1e3a5f] hover:text-[#3b82f6]">
          Initiatives
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d2a2e] mb-2">
            SparcoDB: Bridging the Gap for the Underbanked and Unbanked
          </DialogTitle>
          <DialogDescription className="text-[#4a4749]">
            At SparcoDB, we believe financial inclusion is not just a necessity but a right. Our initiatives are
            designed to address disparities through innovative, affordable, and accessible solutions that uplift
            communities and foster sustainable growth.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div>
            <h3 className="text-xl font-semibold text-[#2d2a2e] mb-2">Simplifying Access to Banking Services</h3>
            <p className="text-sm text-[#4a4749] mb-2">
              We offer low-cost, no-frills banking solutions tailored to meet the needs of the underbanked:
            </p>
            <ul className="list-disc list-inside text-sm text-[#4a4749] space-y-1">
              <li>Digital Banking Access through mobile apps and digital wallets</li>
              <li>Streamlined Account Opening with alternative forms of identification</li>
              <li>Fee Transparency with low or zero fees</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#2d2a2e] mb-2">Tailored Financial Products</h3>
            <p className="text-sm text-[#4a4749] mb-2">
              We develop customized solutions to empower individuals and small businesses:
            </p>
            <ul className="list-disc list-inside text-sm text-[#4a4749] space-y-1">
              <li>Microloans for small businesses and entrepreneurs</li>
              <li>Flexible savings accounts with no minimum balance requirements</li>
              <li>Affordable remittance services for international money transfers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#2d2a2e] mb-2">Financial Education and Empowerment</h3>
            <p className="text-sm text-[#4a4749] mb-2">We prioritize education through targeted programs:</p>
            <ul className="list-disc list-inside text-sm text-[#4a4749] space-y-1">
              <li>Workshops and seminars on budgeting, saving, and financial planning</li>
              <li>Online learning resources with guides and tutorials</li>
              <li>Business mentorship for entrepreneurs and small business owners</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#2d2a2e] mb-2">Collaborating for Greater Impact</h3>
            <p className="text-sm text-[#4a4749] mb-2">
              We partner with local organizations, governments, and non-profits to maximize our reach:
            </p>
            <ul className="list-disc list-inside text-sm text-[#4a4749] space-y-1">
              <li>Community outreach to understand local challenges</li>
              <li>Partnerships with microfinance institutions</li>
              <li>Investment in local facilities and infrastructure</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-[#2d2a2e] text-xl mb-2">
            SparcoDB: Expanding Opportunities, One Community at a Time
          </h3>
          <p className="text-[#4a4749]">
            Through these comprehensive initiatives, we're building a future where financial services are accessible to
            all, empowering individuals and businesses, and driving economic development worldwide.
          </p>
        </div>
        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
