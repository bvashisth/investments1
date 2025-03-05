import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Traveler",
      price: "29.99",
      description: "Perfect for short trips",
      features: ["5GB Data", "7 Days Validity", "Voice Calls Enabled", "SMS Support", "Multiple Countries"],
    },
    {
      name: "Explorer",
      price: "49.99",
      description: "Ideal for longer stays",
      features: [
        "15GB Data",
        "30 Days Validity",
        "Voice Calls Enabled",
        "SMS Support",
        "Global Coverage",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Global",
      price: "99.99",
      description: "Best for frequent travelers",
      features: [
        "Unlimited Data",
        "90 Days Validity",
        "Voice Calls Enabled",
        "SMS Support",
        "Global Coverage",
        "24/7 Priority Support",
        "Multi-Device Support",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient dark:text-gradient-dark">Simple, Transparent Pricing</h2>
          <p className="text-gradient dark:text-gradient-dark">Choose the perfect plan for your connectivity needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg" : ""}>
              <CardHeader>
                {plan.popular && <div className="text-primary text-sm font-medium mb-2">Most Popular</div>}
                <h3 className="text-2xl font-bold text-gradient dark:text-gradient-dark">{plan.name}</h3>
                <p className="text-gradient dark:text-gradient-dark">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gradient dark:text-gradient-dark">${plan.price}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-gradient dark:text-gradient-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

