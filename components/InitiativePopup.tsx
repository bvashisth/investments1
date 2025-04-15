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

interface InitiativePopupProps {
  title: string
  description: string
}

export function InitiativePopup({ title, description }: InitiativePopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d2a2e] mb-2">{title}</DialogTitle>
          <DialogDescription className="text-[#4a4749]">{description}</DialogDescription>
        </DialogHeader>
        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
