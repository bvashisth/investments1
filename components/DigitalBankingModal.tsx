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
import { Smartphone, Lock, Bell, BarChart, Wallet, Globe } from "lucide-react"

export function DigitalBankingModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-white text-[#2d2a2e] hover:bg-[#f0ecf3]">
          Learn More About Digital Banking
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#2d2a2e] mb-2">
            Digital Banking: Modern Solutions for a Connected World
          </DialogTitle>
          <DialogDescription className="text-[#4a4749]">
            At FermionEMP, we redefine convenience with our cutting-edge digital banking services, designed to make
            managing your finances simple, secure, and accessible. Whether you're at home, at work, or on the go, our
            mobile and web platforms empower you to take control of your financial journey anytime, anywhere.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-start gap-4">
            <Smartphone className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Seamless Access Across Devices</h4>
              <p className="text-sm text-[#4a4749]">
                Our digital banking solutions offer a seamless experience across smartphones, tablets, and computers.
                With an intuitive interface, you can effortlessly perform everyday tasks like checking account balances,
                transferring funds, or paying bills—all at your fingertips.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#2d2a2e] text-lg mb-2">Key Features of Our Digital Banking Services</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-[#6b6570] mt-1" />
                <span className="text-sm text-[#4a4749]">
                  <strong>24/7 Access</strong>: Bank when it's convenient for you, with round-the-clock access to your
                  accounts.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-5 w-5 text-[#6b6570] mt-1" />
                <span className="text-sm text-[#4a4749]">
                  <strong>Secure Transactions</strong>: State-of-the-art encryption and authentication ensure your data
                  and funds are always protected.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Bell className="h-5 w-5 text-[#6b6570] mt-1" />
                <span className="text-sm text-[#4a4749]">
                  <strong>Real-Time Notifications</strong>: Stay updated with instant alerts on account activity and
                  transactions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart className="h-5 w-5 text-[#6b6570] mt-1" />
                <span className="text-sm text-[#4a4749]">
                  <strong>Customizable Tools</strong>: Budgeting, financial planning, and analytics tools to help you
                  achieve your financial goals.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Wallet className="h-5 w-5 text-[#6b6570] mt-1" />
                <span className="text-sm text-[#4a4749]">
                  <strong>Digital Wallets</strong>: Manage your payments, rewards, and loyalty cards in one place.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-start gap-4">
            <Globe className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Empowering Financial Inclusion</h4>
              <p className="text-sm text-[#4a4749]">
                Our mobile and web platforms are designed to bring modern banking to everyone, including underbanked
                communities. With features like simplified account opening and low-cost options, we make it easy for
                individuals and businesses to participate in the financial ecosystem.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Smartphone className="h-6 w-6 text-[#6b6570] mt-1" />
            <div>
              <h4 className="font-semibold text-[#2d2a2e] text-lg">Banking Without Boundaries</h4>
              <p className="text-sm text-[#4a4749]">
                Say goodbye to long lines and rigid schedules. FermionEMP's digital banking solutions let you handle
                your finances with speed and flexibility, so you can focus on what truly matters.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-[#2d2a2e] text-xl mb-2">FermionEMP: Banking Made Effortless</h3>
          <p className="text-[#4a4749]">
            Discover the freedom of modern banking tailored to your needs. Join us and experience the future of finance
            today.
          </p>
        </div>
        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
