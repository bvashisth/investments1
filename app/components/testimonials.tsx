import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The easiest way to stay connected while traveling. Activated my eSIM in minutes!",
      author: "Travel Enthusiast",
      location: "United States",
      rating: 5,
    },
    {
      quote: "Great rates and instant top-up for my family back home. Highly recommended!",
      author: "Regular User",
      location: "Canada",
      rating: 5,
    },
    {
      quote: "Perfect solution for business trips. Reliable connection everywhere I go.",
      author: "Business Traveler",
      location: "United Kingdom",
      rating: 5,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient dark:text-gradient-dark">What Our Customers Say</h2>
          <p className="text-gradient dark:text-gradient-dark">Join thousands of satisfied customers worldwide</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mb-4 text-gradient dark:text-gradient-dark">"{testimonial.quote}"</blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-gradient dark:text-gradient-dark">{testimonial.author}</div>
                  <div className="text-gradient dark:text-gradient-dark">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

