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
import { Building, School, TrendingUp } from "lucide-react"

export function InfrastructureDevelopmentModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-white text-[#2d2a2e] hover:bg-[#f0ecf3]">
          Learn More About Infrastructure Development
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d2a2e] mb-2">
            Infrastructure Development: Building Foundations for Growth
          </DialogTitle>
          <DialogDescription className="text-[#4a4749]">
            At SparcoDB, we understand that thriving communities require more than financial support—they need strong
            infrastructure to foster sustainable growth. That's why we invest in developing community facilities and
            training centers that empower individuals and businesses alike.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-start gap-4">
            <Building className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Vocational Training Centers</h4>
              <p className="text-sm text-[#4a4749]">
                Our initiatives focus on creating vocational training centers, where individuals can learn valuable
                skills to enhance their employability and entrepreneurship opportunities. By equipping communities with
                the tools to succeed, we help drive economic empowerment from the ground up.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <School className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Community Facilities</h4>
              <p className="text-sm text-[#4a4749]">
                In addition, we support the construction and enhancement of schools, community hubs, and other vital
                facilities, ensuring that local economies have the infrastructure needed to flourish. These investments
                create opportunities for education, collaboration, and innovation, laying the groundwork for long-term
                progress.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <TrendingUp className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Sustainable Growth</h4>
              <p className="text-sm text-[#4a4749]">
                Fiblimited is committed to building stronger, more resilient communities by focusing on the foundations
                that matter most. Our infrastructure development initiatives aim to create lasting impact and foster
                sustainable economic growth.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-[#2d2a2e] text-xl mb-2">
            SparcoDB: Empowering Communities Through Infrastructure and Opportunity
          </h3>
          <p className="text-[#4a4749]">
            Join us in our mission to build the foundations for thriving communities and sustainable economic growth.
          </p>
        </div>
        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
