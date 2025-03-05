import { Card, CardContent } from "@/components/ui/card"
import { Globe, Zap, Clock, Shield, Smartphone, CreditCard } from "lucide-react"
import { GradientIcon } from "@/components/ui/gradient-icon"

export default function Features() {
  const features = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Connect instantly in 190+ countries with local rates",
      longDescription:
        "Our Global Coverage feature is a game-changer for international travelers and digital nomads. With instant connectivity in over 190 countries, you'll never have to worry about staying connected, no matter where your adventures take you. Our extensive network partnerships ensure that you get local rates, saving you from exorbitant roaming charges. Whether you're exploring the bustling streets of Tokyo, relaxing on a beach in Bali, or closing deals in New York, our eSIM solution keeps you seamlessly connected. You'll enjoy high-speed data, crystal-clear voice calls, and reliable messaging services, all at rates that won't break the bank. Say goodbye to the hassle of buying local SIM cards or relying on spotty Wi-Fi. With our Global Coverage, the world is truly at your fingertips, allowing you to share your experiences, stay in touch with loved ones, or manage your business from anywhere on the globe. Experience the freedom of borderless communication with our unparalleled global network.",
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Get your eSIM activated in minutes, no physical SIM needed",
      longDescription:
        "Our Instant Activation feature revolutionizes the way you connect to mobile networks. Gone are the days of waiting in line at a store or for a physical SIM card to arrive in the mail. With our cutting-edge eSIM technology, you can get connected in a matter of minutes, anytime, anywhere. The process is simple and user-friendly: just purchase your preferred plan, scan a QR code, and you're ready to go. This seamless activation process is perfect for last-minute trips, sudden business travel, or when you simply want to switch to a better plan without any delay. Our eSIM technology is compatible with a wide range of modern smartphones and tablets, ensuring that you can take advantage of this convenient feature regardless of your device. The absence of a physical SIM card also means you can switch between multiple profiles or plans on a single device, giving you unprecedented flexibility in managing your mobile connectivity. Experience the future of mobile activation with our Instant Activation feature – it's fast, it's easy, and it puts you in control of your mobile experience.",
    },
    {
      icon: Clock,
      title: "Quick Top-up",
      description: "Recharge any mobile number worldwide in seconds",
      longDescription:
        "Our Quick Top-up feature is designed to keep you connected without interruption, no matter where you are in the world. With just a few taps on your device, you can instantly recharge your own eSIM or send credit to any mobile number globally. This feature is particularly valuable for frequent travelers, expats, or anyone with international connections. Need to help a family member back home stay connected? No problem. Want to ensure you have enough data for that important video call? It's covered. Our platform supports multiple payment methods and currencies, making the process smooth and hassle-free. The Quick Top-up feature also comes with smart alerts, notifying you when your balance is running low, so you're never caught off guard. For business users, we offer the ability to manage and top up multiple lines simultaneously, streamlining operations for teams on the go. With competitive rates and transparent pricing, our Quick Top-up feature ensures that staying connected is always affordable and stress-free. Experience the convenience of managing your mobile connectivity with unprecedented ease and speed.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-grade security for all your transactions",
      longDescription:
        "In today's digital age, security is paramount, and our Secure Platform feature ensures that your data and transactions are protected with the highest level of encryption and security protocols. We employ bank-grade security measures, including end-to-end encryption, secure socket layer (SSL) technology, and two-factor authentication, to safeguard your personal and financial information. Our platform undergoes regular security audits and penetration testing by independent cybersecurity experts to identify and address potential vulnerabilities proactively. We adhere to strict data protection regulations, including GDPR and CCPA, ensuring that your privacy is respected and your data is handled with the utmost care. For added peace of mind, we offer features like secure account recovery, real-time fraud detection, and instant notifications for any account activity. Our dedicated security team monitors the platform 24/7, ready to respond to any potential threats. With our Secure Platform, you can manage your eSIM, make payments, and access your account information with confidence, knowing that your digital safety is our top priority. Experience worry-free connectivity with our state-of-the-art secure platform.",
    },
    {
      icon: Smartphone,
      title: "Easy to Use",
      description: "Simple QR code activation for all eSIM-compatible devices",
      longDescription:
        "Our Easy to Use feature is at the heart of our commitment to making global connectivity accessible to everyone. We've designed our platform with user experience in mind, ensuring that managing your eSIM is intuitive and straightforward, regardless of your technical expertise. The activation process is as simple as scanning a QR code with your eSIM-compatible device – no need for complex setup procedures or lengthy customer service calls. Our user-friendly app provides a clean, navigable interface where you can easily purchase plans, monitor your usage, and manage your account settings. We've streamlined every aspect of the user journey, from sign-up to plan selection and activation, making it possible to get connected in just a few taps. For those who prefer a web interface, our responsive website offers the same seamless experience across all devices. We also provide clear, jargon-free guides and 24/7 customer support to assist you at every step. Whether you're a tech-savvy digital nomad or a first-time eSIM user, our Easy to Use feature ensures that you can harness the power of global connectivity without any hassle. Experience the simplicity of staying connected with our user-centric platform.",
    },
    {
      icon: CreditCard,
      title: "Flexible Plans",
      description: "Choose from daily, weekly, or monthly data plans",
      longDescription:
        "Our Flexible Plans feature is designed to cater to the diverse needs of modern travelers and digital citizens. We understand that one size doesn't fit all when it comes to mobile connectivity, which is why we offer a wide range of plans to suit every usage pattern and budget. Whether you're a weekend warrior needing a quick data boost for a short trip, a vacationer looking for a week-long plan, or a long-term traveler requiring monthly coverage, we've got you covered. Our daily plans are perfect for layovers or day trips, giving you the exact amount of data you need without any waste. Weekly plans offer great value for vacations or business trips, while our monthly plans provide comprehensive coverage for extended stays or frequent travelers. All our plans come with the flexibility to upgrade, downgrade, or cancel at any time, putting you in control of your mobile expenses. We also offer specialized plans for data-heavy users, such as unlimited social media packages or high-speed data for video streaming. For business customers, we provide customizable team plans with centralized billing and management. With our Flexible Plans, you'll never have to pay for more than you need or worry about running out of data at crucial moments. Experience the freedom of tailored connectivity with our versatile plan options.",
    },
  ]

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient dark:text-gradient-dark">
            Everything You Need to Stay Connected
          </h2>
          <p className="text-gradient dark:text-gradient-dark">
            Simple solutions for all your mobile connectivity needs, whether you're traveling or staying local
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <GradientIcon icon={feature.icon} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gradient dark:text-gradient-dark">{feature.title}</h3>
                <p className="text-gradient dark:text-gradient-dark mb-4">{feature.description}</p>
                <details className="w-full">
                  <summary className="cursor-pointer text-sm font-medium text-primary hover:text-primary-dark">
                    Learn More
                  </summary>
                  <p className="mt-2 text-sm text-gradient dark:text-gradient-dark text-left">
                    {feature.longDescription}
                  </p>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

