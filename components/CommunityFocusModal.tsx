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
import { Users, Heart, TrendingUp, School, MessageCircle } from "lucide-react"

export function CommunityFocusModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-white text-[#2d2a2e] hover:bg-[#f0ecf3]">
          Learn More About Our Community Focus
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d2a2e] mb-2">
            Community Focus: Empowering Local Solutions for Lasting Impact
          </DialogTitle>
          <DialogDescription className="text-[#4a4749]">
            At SparcoDB, we recognize that true progress begins at the community level. That's why our commitment to
            financial inclusion is deeply rooted in understanding the unique challenges and opportunities within the
            regions we serve. By collaborating closely with local organizations, governments, and community leaders, we
            ensure our solutions are not only innovative but also meaningful and impactful.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-start gap-4">
            <Users className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Understanding Local Needs</h4>
              <p className="text-sm text-[#4a4749]">
                Every community is different, with its own cultural, economic, and social dynamics. We work hand-in-hand
                with local partners to gain a deep understanding of these nuances. This approach allows us to design
                tailored financial services that address specific challenges, from providing affordable microloans for
                small businesses to creating accessible digital banking platforms for underserved populations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Heart className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Building Strategic Partnerships</h4>
              <p className="text-sm text-[#4a4749]">
                Our partnerships with local non-profits, microfinance institutions, and grassroots organizations help us
                extend our reach to those who need it most. By combining our financial expertise with their local
                knowledge, we create initiatives that foster entrepreneurship, enhance economic opportunities, and drive
                community development.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <TrendingUp className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Fostering Entrepreneurship and Growth</h4>
              <p className="text-sm text-[#4a4749]">
                Small businesses are the backbone of local economies, and we are dedicated to supporting their growth.
                Through targeted programs, we offer grants, low-interest loans, and mentorship to empower entrepreneurs
                to build sustainable businesses. By doing so, we contribute to job creation and the overall prosperity
                of the communities we serve.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <School className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Investing in Community Development</h4>
              <p className="text-sm text-[#4a4749]">
                Our impact goes beyond financial services. We invest in initiatives that uplift communities, such as
                funding for schools, vocational training centers, and community hubs. By supporting education and
                skill-building programs, we help individuals unlock their potential and drive long-term economic growth.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircle className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">A Collaborative Approach to Change</h4>
              <p className="text-sm text-[#4a4749]">
                We believe that lasting change is a shared effort. Engaging with local stakeholders allows us to create
                solutions that resonate deeply with the community. By listening, learning, and co-creating with those on
                the ground, we ensure that our initiatives are both effective and sustainable.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-[#2d2a2e] text-xl mb-2">
            SparcoDB: Rooted in Communities, Building a Better Tomorrow
          </h3>
          <p className="text-[#4a4749]">
            Through collaboration, understanding, and a shared commitment to growth, we are transforming lives and
            uplifting communities, one partnership at a time.
          </p>
        </div>
        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
