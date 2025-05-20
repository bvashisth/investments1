import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-prussian-blue">Our Leadership Team</h1>
      <p className="text-center text-lg mb-12 text-prussian-blue/70 max-w-3xl mx-auto">
        Meet the visionaries behind Lao construction Bank who are dedicated to revolutionizing financial inclusion and
        making banking accessible to all.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white">
          <CardHeader className="text-center">
            <CardTitle>Leadership Team</CardTitle>
            <CardDescription>Our leadership team information is currently being updated</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-prussian-blue/70">
              Our executive leadership team brings together decades of experience in banking, finance, and technology.
              With diverse backgrounds and expertise, they guide our mission to provide innovative financial solutions
              that empower communities worldwide.
            </p>
            <p className="text-sm text-prussian-blue/70 mt-4">
              The team is committed to driving financial inclusion, fostering economic growth, and creating sustainable
              opportunities for individuals and businesses globally.
            </p>
            <p className="text-sm text-prussian-blue/70 mt-4">
              Check back soon for detailed profiles of our leadership team members.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
