import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OurMissionPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2d2a2e]">Our Mission</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Empowering Financial Inclusion</CardTitle>
          <CardDescription>Bridging gaps, creating opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At SparcoDB, our mission is to empower underbanked and unbanked communities worldwide by offering
            innovative, affordable, and accessible financial solutions. We are dedicated to fostering economic growth,
            uplifting local economies, and creating sustainable opportunities for individuals and businesses globally.
          </p>
          <p className="mb-4">Through our tailored services, strategic investments, and partnerships, we aim to:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Bridge the gap in financial inclusion</li>
            <li>Provide accessible banking solutions to all</li>
            <li>Foster entrepreneurship and economic growth</li>
            <li>Empower individuals with financial knowledge</li>
            <li>Build strong, resilient communities</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We envision a financially inclusive world where everyone, regardless of their circumstances, has access to
            the tools, resources, and opportunities they need to thrive. Our goal is to create a future where:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Financial services are accessible to all</li>
            <li>Communities are empowered to drive their own economic growth</li>
            <li>Innovation in financial technology benefits everyone</li>
            <li>Sustainable development is supported through financial inclusion</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Commitment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">SparcoDB is committed to:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Developing tailored financial products that meet the unique needs of underserved communities</li>
            <li>Investing in financial education to empower individuals and businesses</li>
            <li>Fostering partnerships that amplify our impact and reach</li>
            <li>Leveraging technology to make banking more accessible and efficient</li>
            <li>Supporting the United Nations Sustainable Development Goals through our initiatives</li>
          </ul>
          <p className="font-semibold">
            Through our dedicated efforts, we strive to expand opportunities and transform lives, creating a more
            inclusive and prosperous world for all.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
