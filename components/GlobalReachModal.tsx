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
import { Globe, Users, Smartphone, TrendingUp, Building } from "lucide-react"

export function GlobalReachModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-white text-prussian-blue hover:bg-sky-blue/20">
          Learn More About Our Global Reach
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-prussian-blue mb-2">
            Global Reach: Empowering Communities Across Continents
          </DialogTitle>
          <DialogDescription className="text-prussian-blue/70">
            At Lao construction Bank, our mission transcends borders. We are dedicated to serving diverse communities
            across continents, offering tailored financial solutions that empower individuals, businesses, and economies
            to thrive in a globalized world.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-start gap-4">
            <Users className="h-6 w-6 text-blue-green mt-1" />
            <div>
              <h4 className="font-semibold text-prussian-blue text-lg">Connecting the Underbanked to Opportunities</h4>
              <p className="text-sm text-prussian-blue/70">
                Millions around the globe remain underserved by traditional financial institutions. We bridge this gap
                by designing innovative, inclusive financial products that meet the unique needs of each community we
                serve. Whether it's through microfinance services, accessible digital wallets, or cross-border payment
                solutions, we ensure that no one is left behind.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Globe className="h-6 w-6 text-blue-green mt-1" />
            <div>
              <h4 className="font-semibold text-prussian-blue text-lg">Customized Solutions for Local Impact</h4>
              <p className="text-sm text-prussian-blue/70">
                Our global presence allows us to adapt our offerings to the specific economic and cultural landscapes of
                the regions we serve. By collaborating with local governments, non-profits, and financial institutions,
                we develop solutions that foster sustainable growth and financial independence.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Smartphone className="h-6 w-6 text-blue-green mt-1" />
            <div>
              <h4 className="font-semibold text-prussian-blue text-lg">Harnessing Technology to Empower</h4>
              <p className="text-sm text-prussian-blue/70">
                We leverage cutting-edge technologies, such as mobile banking, blockchain, and AI, to provide secure,
                seamless financial services. Our platforms are designed to ensure accessibility and efficiency, enabling
                our clients to manage their finances anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <TrendingUp className="h-6 w-6 text-blue-green mt-1" />
            <div>
              <h4 className="font-semibold text-prussian-blue text-lg">Driving Economic Growth Worldwide</h4>
              <p className="text-sm text-prussian-blue/70">
                From rural villages to bustling urban centers, FermionEMP is committed to uplifting local economies. By
                investing in small businesses, supporting infrastructure development, and fostering entrepreneurship, we
                contribute to the long-term prosperity of the communities we serve.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Building className="h-6 w-6 text-blue-green mt-1" />
            <div>
              <h4 className="font-semibold text-prussian-blue text-lg">Your Partner in a Connected World</h4>
              <p className="text-sm text-prussian-blue/70">
                As your trusted financial partner, we understand the importance of global connections. Our cross-border
                solutions enable businesses to expand internationally, families to stay connected through remittances,
                and individuals to access the global economy with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-prussian-blue text-xl mb-2">FermionEMP: Financial Solutions Beyond Borders</h3>
          <p className="text-prussian-blue/70">
            Together, we're building a more inclusive, connected, and prosperous world. Explore how we can help you
            achieve your financial goals, no matter where you are.
          </p>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          className="w-full mt-4 bg-blue-green text-white hover:bg-prussian-blue"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
