import { ArrowRight, Globe, Smartphone } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background dark:from-primary/5 dark:via-background dark:to-background -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(255,255,0,0.3))] -z-20" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px),repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px)] -z-10" />
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1 mb-6">
            <Globe className="w-4 h-4" />
            <Link href="https://simplifyintl.esimenabler.com/plans">
              <span className="text-sm font-medium hover:underline">Global Coverage, Local Rates</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gradient dark:text-gradient-dark">
            Stay Connected Worldwide with eSIM & Mobile Top-up
          </h1>
          <p className="text-xl text-gradient dark:text-gradient-dark mb-8">
            Instant digital SIM cards and mobile recharge for 190+ countries. No physical SIM needed, activate in
            minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://simplifyintl.esimenabler.com/plans"
              className="inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-base font-medium rounded-full text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Get Your eSIM <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="https://simplifyintl.esimenabler.com/plans"
              className="inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-base font-medium rounded-full text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Quick Top-up <Smartphone className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            {[
              ["190+", "Countries"],
              ["1M+", "Happy Users"],
              ["24/7", "Support"],
            ].map(([number, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-gradient dark:text-gradient-dark">{number}</div>
                <div className="text-gradient dark:text-gradient-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

