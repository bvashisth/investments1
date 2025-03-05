import Hero from "./components/hero"
import Features from "./components/features"
import Benefits from "./components/benefits"
import Pricing from "./components/pricing"
import Testimonials from "./components/testimonials"
import Footer from "./components/footer"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./components/theme-toggle"
import { Logo } from "./components/logo"

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm hover:text-primary">
              Pricing
            </a>
            <a href="#contact" className="text-sm hover:text-primary">
              Contact
            </a>
            <ThemeToggle />
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

