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
import { Users, Globe, TrendingUp } from "lucide-react"

export function FinancialEducationModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-white text-[#2d2a2e] hover:bg-[#f0ecf3]">
          Learn More About Financial Education
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d2a2e] mb-2">
            Financial Education: Empowering Through Knowledge
          </DialogTitle>
          <DialogDescription className="text-[#4a4749]">
            At FermionEMP, we believe financial literacy is the foundation for economic empowerment. That's why we offer
            a range of workshops and resources designed to improve financial understanding for individuals, families,
            and small business owners.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-start gap-4">
            <Users className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Interactive Workshops</h4>
              <p className="text-sm text-[#4a4749]">
                Our interactive workshops provide practical knowledge on essential topics like budgeting, saving, and
                managing debt, equipping participants with the skills they need to make informed financial decisions.
                For small businesses, we offer tailored sessions on topics such as cash flow management, accessing
                credit, and scaling operations effectively.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Globe className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Online Resources</h4>
              <p className="text-sm text-[#4a4749]">
                In addition, our online resources—including articles, guides, and tools—make financial education
                accessible anytime, anywhere. Whether you're setting personal goals or planning for your business, our
                resources are designed to support your journey.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <TrendingUp className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Empowering Communities</h4>
              <p className="text-sm text-[#4a4749]">
                By empowering communities with knowledge, we help pave the way for financial independence, stability,
                and long-term growth.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-[#2d2a2e] text-xl mb-2">
            FermionEMP: Building Financial Confidence, One Step at a Time
          </h3>
          <p className="text-[#4a4749]">
            Join us in our mission to improve financial literacy and create a more financially empowered world.
          </p>
        </div>
        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
