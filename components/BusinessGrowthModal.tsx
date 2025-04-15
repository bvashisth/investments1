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
import { TrendingUp, DollarSign, Gift, Users } from "lucide-react"

export function BusinessGrowthModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-white text-[#2d2a2e] hover:bg-[#f0ecf3]">
          Learn More About Business Growth
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d2a2e] mb-2">
            Business Growth: Empowering Small Businesses for Success
          </DialogTitle>
          <DialogDescription className="text-[#4a4749]">
            At FermionEMP, we are dedicated to driving economic growth by empowering small businesses—the backbone of
            thriving communities. Our tailored financial services provide the tools and resources entrepreneurs need to
            succeed.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-start gap-4">
            <DollarSign className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Affordable Loans</h4>
              <p className="text-sm text-[#4a4749]">
                We offer affordable loans to help businesses expand operations, invest in new equipment, or hire
                additional staff.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Gift className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Grant Programs</h4>
              <p className="text-sm text-[#4a4749]">
                Through grant programs, we provide funding for innovative ideas and startups, enabling them to bring
                their visions to life.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Mentorship Programs</h4>
              <p className="text-sm text-[#4a4749]">
                Our mentorship programs connect business owners with experienced professionals who offer guidance, share
                industry insights, and help navigate challenges. This holistic approach ensures businesses are not only
                funded but also equipped for long-term sustainability and growth.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <TrendingUp className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Comprehensive Support</h4>
              <p className="text-sm text-[#4a4749]">
                Whether it's helping a local shop scale operations or supporting a tech startup launch, FermionEMP is
                committed to fostering innovation, creating jobs, and uplifting communities through small business
                success.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-[#2d2a2e] text-xl mb-2">FermionEMP: Building Better Businesses, Together</h3>
          <p className="text-[#4a4749]">
            Join us in our mission to empower small businesses and drive economic growth in communities worldwide.
          </p>
        </div>
        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
