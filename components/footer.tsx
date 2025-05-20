import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { PrivacyPolicyModal } from "./PrivacyPolicyModal"
import { TermsAndConditionsModal } from "./TermsAndConditionsModal"

export function Footer() {
  return (
    <footer className="bg-sky-blue/10 border-t border-sky-blue/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/lcb-logo.png"
            alt="Lao construction Bank"
            width={80}
            height={80}
            className="object-contain rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-prussian-blue">Lao construction Bank</h2>
          <p className="text-sm text-prussian-blue/70 mt-2">Banking for a Better World</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-prussian-blue">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-mission" className="text-sm text-prussian-blue hover:text-blue-green">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-prussian-blue hover:text-blue-green">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-prussian-blue hover:text-blue-green">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-prussian-blue">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-prussian-blue hover:text-blue-green">
                  Business Banking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-prussian-blue hover:text-blue-green">
                  Personal Banking
                </Link>
              </li>
              <li>
                <Link href="/loans/commercial" className="text-sm text-prussian-blue hover:text-blue-green">
                  Commercial Loan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-prussian-blue">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-prussian-blue hover:text-blue-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@example.com" className="text-sm text-prussian-blue hover:text-blue-green">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-prussian-blue">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-prussian-blue hover:text-blue-green">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-prussian-blue hover:text-blue-green">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-prussian-blue hover:text-blue-green">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-prussian-blue hover:text-blue-green">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-sky-blue/20 text-center text-sm text-prussian-blue">
          <p>&copy; {new Date().getFullYear()} Lao construction Bank. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <PrivacyPolicyModal />
            <TermsAndConditionsModal />
            <Link href="/eula" className="text-sm text-prussian-blue hover:text-blue-green">
              EULA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
