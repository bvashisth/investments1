import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-prussian-blue">About Us</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-prussian-blue">Who We Are</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Lao construction Bank is a forward-thinking financial institution. Lao construction Bank has designed a
            comprehensive digital banking platform designed to facilitate secure, efficient, and user-friendly financial
            transactions. Built with scalability and security in mind. and Headquarters in Vientiane, Lao. Our mission
            is to empower underbanked and unbanked communities by offering innovative, affordable, and accessible
            financial solutions. Through our tailored services, strategic investments, and partnerships, we aim to
            foster economic growth, uplift local economies, and create sustainable opportunities for individuals and
            businesses globally.
          </p>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>
            To build a financially inclusive world where everyone, regardless of their circumstances, has access to the
            tools, resources, and opportunities they need to thrive.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-3xl font-bold mb-6 text-prussian-blue">What We Do</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Simplifying Financial Access</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We provide low-cost banking options, simplified account opening processes, and accessible digital banking
              platforms. Our goal is to make managing finances easy and secure for everyone, from urban centers to
              remote areas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tailored Financial Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lao construction Bank develops customized solutions such as microloans, savings programs, and affordable
              remittance services. These products empower small businesses, entrepreneurs, and families to build
              financial security and achieve their goals.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Education</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We believe knowledge is power. Through workshops, seminars, and online resources, we equip individuals and
              businesses with the financial literacy needed to make informed decisions and achieve long-term success.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Partnerships</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Collaboration is at the heart of our work. By partnering with local governments, non-profits, and
              microfinance institutions, we ensure that our solutions are impactful and deeply rooted in the needs of
              the communities we serve.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Investing in Communities</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Beyond financial services, we invest in community development by supporting infrastructure projects like
              vocational training centers, schools, and community hubs. These initiatives empower individuals with
              skills and resources for a better future.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Our Commitment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At Lao construction Bank, we are driven by a passion for creating meaningful impact. We aim to achieve the
            United Nations Sustainable Development Goals (SDGs) by promoting financial inclusion, fostering
            entrepreneurship, and supporting sustainable community growth.
          </p>
          <p className="mb-4">
            Through technology, innovation, and collaboration, Lao construction Bank is shaping a future where financial
            services are accessible to all, empowering individuals and businesses to reach their full potential.
          </p>
          <p className="font-semibold">Lao construction Bank: Expanding Opportunities, Transforming Lives.</p>
        </CardContent>
      </Card>
    </div>
  )
}
