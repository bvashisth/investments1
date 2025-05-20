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
import { Globe, Smartphone, Wifi } from "lucide-react"

export function InfoModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white text-prussian-blue hover:bg-sky-blue/20">
          Learn About Our Services
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Our Global Services</DialogTitle>
          <DialogDescription>
            Discover our range of international services designed to keep you connected worldwide.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Smartphone className="h-10 w-10 text-blue-green" />
            <div>
              <h4 className="font-semibold text-prussian-blue">Mobile Top-up</h4>
              <p className="text-sm text-prussian-blue/70">
                International mobile top-up for over 150+ countries, and more than 850 mobile operators.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Wifi className="h-10 w-10 text-[#6b6570]" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e]">eSIM</h4>
              <p className="text-sm text-[#4a4749]">Powering your IoT and roaming devices with global data.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Globe className="h-10 w-10 text-[#6b6570]" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e]">Global Coverage</h4>
              <p className="text-sm text-[#4a4749]">Seamless connectivity across borders for all your devices.</p>
            </div>
          </div>
        </div>
        <Button onClick={() => setIsOpen(false)} className="w-full">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
