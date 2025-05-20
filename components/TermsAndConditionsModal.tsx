"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TermsAndConditionsModalProps {
  triggerClassName?: string
}

export function TermsAndConditionsModal({ triggerClassName }: TermsAndConditionsModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className={triggerClassName || "text-sm text-prussian-blue hover:text-blue-green"}>
          Terms and Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-prussian-blue mb-4">Terms and Conditions</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-muted-foreground mb-4">Last updated January 08, 2025</p>

          <h2 className="text-xl font-bold mt-6 mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            We are Lao construction Bank ("Company," "we," "us," "our"). Lao construction Bank has designed a
            comprehensive digital banking platform designed to facilitate secure, efficient, and user-friendly financial
            transactions. Built with scalability and security in mind. and Headquarters in Vientiane, Lao.
          </p>
          <p>
            We operate the website # (the "Site"), the mobile application lcb (the "App"), as well as any other related
            products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the
            "Services").
          </p>
          <p>You can contact us by email at info@example.com.</p>
          <p>
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf
            of an entity ("you"), and Lao construction Bank, concerning your access to and use of the Services. You
            agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these
            Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING
            THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>

          {/* Add more sections of the Terms and Conditions here */}

          <h2 className="text-xl font-bold mt-6 mb-4">CONTACT US</h2>
          <p>
            In order to resolve a complaint regarding the Services or to receive further information regarding use of
            the Services, please contact us at:
          </p>
          <p>
            Lao construction Bank
            <br />
            Headquarters in Vientiane, Lao
            <br />
            info@example.com
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
