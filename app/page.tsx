import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Globe, Users, Wallet, LineChart, BookOpen, Building } from "lucide-react"
import Image from "next/image"
import HolographicImage from "@/components/HolographicImage"
import { InfoModal } from "@/components/InfoModal"
import { GlobalReachModal } from "@/components/GlobalReachModal"
import { CommunityFocusModal } from "@/components/CommunityFocusModal"
import { DigitalBankingModal } from "@/components/DigitalBankingModal"
import { BusinessGrowthModal } from "@/components/BusinessGrowthModal"
import { FinancialEducationModal } from "@/components/FinancialEducationModal"
import { InfrastructureDevelopmentModal } from "@/components/InfrastructureDevelopmentModal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HolographicImage />
      </div>
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="flex-grow flex items-center justify-center px-4 py-20">
          <div className="container mx-auto text-center max-w-3xl backdrop-blur-sm bg-white/30 p-8 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Banking for a Better World</h1>
            <p className="text-xl text-white mb-8">
              Empowering underbanked communities and small businesses through innovative financial solutions
            </p>
            <div className="flex justify-center">
              <InfoModal />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/90">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2d2a2e]">Our Global Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <Globe className="h-8 w-8 text-[#5a6f8c] mb-2" />
                  <CardTitle className="text-[#2d2a2e]">Global Reach</CardTitle>
                  <CardDescription className="text-[#4a5d7a]">
                    Serving communities across continents with tailored financial solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <GlobalReachModal />
                </CardContent>
              </Card>
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <Users className="h-8 w-8 text-[#5a6f8c] mb-2" />
                  <CardTitle className="text-[#2d2a2e]">Community Focus</CardTitle>
                  <CardDescription className="text-[#4a5d7a]">
                    Building partnerships with local organizations to understand and serve unique needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CommunityFocusModal />
                </CardContent>
              </Card>
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <Wallet className="h-8 w-8 text-[#5a6f8c] mb-2" />
                  <CardTitle className="text-[#2d2a2e]">Digital Banking</CardTitle>
                  <CardDescription className="text-[#4a5d7a]">
                    Modern banking solutions accessible through mobile and web platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DigitalBankingModal />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2d2a2e]">Our Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <LineChart className="h-8 w-8 text-[#5a6f8c] mb-2" />
                  <CardTitle className="text-[#2d2a2e]">Business Growth</CardTitle>
                  <CardDescription className="text-[#4a5d7a]">
                    Supporting small businesses with loans, grants, and mentorship programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BusinessGrowthModal />
                </CardContent>
              </Card>
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-[#5a6f8c] mb-2" />
                  <CardTitle className="text-[#2d2a2e]">Financial Education</CardTitle>
                  <CardDescription className="text-[#4a5d7a]">
                    Workshops and resources to improve financial literacy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FinancialEducationModal />
                </CardContent>
              </Card>
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <Building className="h-8 w-8 text-[#5a6f8c] mb-2" />
                  <CardTitle className="text-[#2d2a2e]">Infrastructure Development</CardTitle>
                  <CardDescription className="text-[#4a5d7a]">
                    Investing in community facilities and training centers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <InfrastructureDevelopmentModal />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
