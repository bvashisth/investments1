import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { PrivacyPolicyModal } from "./PrivacyPolicyModal"
import { TermsAndConditionsModal } from "./TermsAndConditionsModal"

export function Footer() {
  return (
    <footer className="bg-[#f0ecf3] border-t border-[#3b82f6]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-[#2d2a2e]">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-mission" className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#2d2a2e]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://business.fermionemp.com/ui/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]"
                >
                  Business Banking
                </Link>
              </li>
              <li>
                <Link
                  href="https://personal.fermionemp.com/ui/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]"
                >
                  Personal Banking
                </Link>
              </li>
              <li>
                <Link href="/loans/commercial" className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]">
                  Commercial Loan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#2d2a2e]">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://support.fermionemp.com"
                  className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@fermionemp.com" className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#2d2a2e]">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#4a5d7a] hover:text-[#3b82f6]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#4a5d7a] hover:text-[#3b82f6]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#4a5d7a] hover:text-[#3b82f6]">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#4a5d7a] hover:text-[#3b82f6]">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#3b82f6]/20 text-center text-sm text-[#4a5d7a]">
          <p>&copy; {new Date().getFullYear()} FermionEMP. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <PrivacyPolicyModal />
            <TermsAndConditionsModal />
            <Link href="/eula" className="text-sm text-[#4a5d7a] hover:text-[#3b82f6]">
              EULA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
