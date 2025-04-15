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

interface ServiceLaunchPopupProps {
  title: string
  description: string
  triggerText: string
}

export function ServiceLaunchPopup({ title, description, triggerText }: ServiceLaunchPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-[#6b6570] text-white hover:bg-[#565158]">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
