"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react"
import { ContactModal } from "./ContactModal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-sky-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/lcb-logo.png"
              alt="Lao construction Bank"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />
            <span className="font-bold text-xl text-prussian-blue">Lao construction Bank</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="icon" onClick={toggleTheme} className="mr-2">
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="/about" className="text-sm text-prussian-blue hover:text-blue-green">
              About Us
            </Link>
            <Link href="/mobile" className="text-sm text-prussian-blue hover:text-blue-green">
              Mobile
            </Link>
            <Link href="/initiatives" className="text-sm text-prussian-blue hover:text-blue-green">
              Initiatives
            </Link>
            <ContactModal />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-prussian-blue dark:text-gray-300 border-prussian-blue dark:border-gray-300 hover:bg-prussian-blue dark:hover:bg-gray-700 hover:text-white"
                >
                  Login <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Personal Banking Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Business Banking Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-green text-white hover:bg-prussian-blue">
                  Open Account <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/open-account/personal" className="w-full">
                    Open Personal Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/open-account/business" className="w-full">
                    Open Business Account
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-prussian-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Button variant="outline" size="icon" onClick={toggleTheme} className="mb-2">
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="/about"
              className="block px-4 py-2 text-prussian-blue hover:bg-sky-blue/20 dark:hover:bg-gray-200"
            >
              About Us
            </Link>
            <Link
              href="/mobile"
              className="block px-4 py-2 text-prussian-blue hover:bg-sky-blue/20 dark:hover:bg-gray-200"
            >
              Mobile
            </Link>
            <Link
              href="/initiatives"
              className="block px-4 py-2 text-prussian-blue hover:bg-sky-blue/20 dark:hover:bg-gray-200"
            >
              Initiatives
            </Link>
            <div className="px-4 py-2">
              <ContactModal />
            </div>
            <div className="space-y-2 px-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full text-prussian-blue dark:text-gray-300 border-prussian-blue dark:border-gray-300 hover:bg-prussian-blue dark:hover:bg-gray-700 hover:text-white"
                  >
                    Login <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      Personal Banking Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      Business Banking Login
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full bg-blue-green text-white hover:bg-prussian-blue">
                    Open Account <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/open-account/personal" className="w-full">
                      Open Personal Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/open-account/business" className="w-full">
                      Open Business Account
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
