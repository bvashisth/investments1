import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2d2a2e]">Our Leadership Team</h1>
      <p className="text-center text-lg mb-12 text-[#4a5d7a] max-w-3xl mx-auto">
        Meet the visionaries behind FremionEMP who are dedicated to revolutionizing financial inclusion and making
        banking accessible to all.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dirk Coetzer */}
        <Card className="bg-white">
          <CardHeader className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fKADE448buwtC0ujIUg74IpSYcjaO4.png"
                alt="Dirk Coetzer"
                fill
                className="object-cover"
              />
            </div>
            <CardTitle>Dirk Theunis Coetzer</CardTitle>
            <CardDescription>
              Visionary Leader in Core Banking, Digital Investments & Blockchain Innovations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-[#4a5d7a]">
                Dirk Theunis Coetzer is a distinguished leader in core banking, finance, and investment banking, with
                extensive experience in structured finance, asset management, and compliance. As a South African
                national fluent in English, Afrikaans, and Zulu, Dirk brings a rich multicultural perspective to
                financial innovation and structured solutions.
              </p>
              <p className="text-sm text-[#4a5d7a]">
                Currently serving as Managing Director for Fermion Capital Management AG (Switzerland), Fermion Capital
                Sari (Luxembourg), and Fermion Administration Sari (Geneva), Dirk has been instrumental in driving
                growth and industry leadership.
              </p>
              <p className="text-sm text-[#4a5d7a]">
                With over two decades of experience, Dirk has honed his expertise in core banking operations and
                investment banking. His strategic oversight in structured finance has been pivotal in driving compliance
                and risk management initiatives.
              </p>
              <p className="text-sm text-[#4a5d7a]">
                Embracing the digital revolution, Dirk has been at the forefront of integrating blockchain technology
                into traditional financial frameworks, developing digital investment strategies and blockchain-based
                banking solutions.
              </p>
              <div className="pt-4">
                <Link href="#" className="text-[#3b82f6] hover:text-[#2563eb] inline-flex items-center">
                  <LinkedinIcon className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Robert Vashisth */}
        <Card className="bg-white">
          <CardHeader className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bob-xSQct8Ey2ONLj5E6PfBhUkNLWqHT7U.png"
                alt="Robert Vashisth"
                fill
                className="object-cover"
              />
            </div>
            <CardTitle>Robert Vashisth</CardTitle>
            <CardDescription>Chief Strategy Officer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-[#4a5d7a]">
                Robert Vashisth brings a wealth of experience and innovative thinking to the financial industry. With a
                background in strategic management and global finance, Robert has been instrumental in identifying
                underbanked communities and developing tailored financial products and services to meet their needs.
              </p>
              <p className="text-sm text-[#4a5d7a]">
                His vision and leadership are pivotal in driving Bank's mission of financial inclusion, ensuring that
                our services reach those who need them most while maintaining sustainable growth and impact.
              </p>
              <div className="pt-4">
                <Link href="#" className="text-[#3b82f6] hover:text-[#2563eb] inline-flex items-center">
                  <LinkedinIcon className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Albert Daliposki */}
        <Card className="bg-white">
          <CardHeader className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/albert-oRL0XkUYn9U5h7yEm9EIMBkuEeATci.png"
                alt="Albert Daliposki"
                fill
                className="object-cover"
              />
            </div>
            <CardTitle>Albert Daliposki</CardTitle>
            <CardDescription>Chief Trading Officer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-[#4a5d7a]">
                Daliposki's expertise in international trade and credit brokerage has significantly contributed to the
                expansion capabilities of Banks. His innovative approaches to trading, especially in crude oil and
                metals, have opened new avenues for the company's growth.
              </p>
              <p className="text-sm text-[#4a5d7a]">
                Albert's strategic insights ensure that our financial services are both comprehensive and accessible,
                while maintaining the highest standards of trading excellence and risk management.
              </p>
              <div className="pt-4">
                <Link href="#" className="text-[#3b82f6] hover:text-[#2563eb] inline-flex items-center">
                  <LinkedinIcon className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
