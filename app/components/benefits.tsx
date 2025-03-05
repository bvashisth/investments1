import { Check } from "lucide-react"

export default function Benefits() {
  const benefits = [
    "No physical SIM card needed",
    "Activate instantly on arrival",
    "Keep your existing number",
    "Local rates in 190+ countries",
    "Secure digital activation",
    "24/7 customer support",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our eSIM Solution?</h2>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 rounded-full p-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

