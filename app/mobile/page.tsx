import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Wifi, Smartphone, Gift, Zap } from "lucide-react"
import { ServiceLaunchPopup } from "@/components/ServiceLaunchPopup"

export default function MobilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e0dce3] pt-20">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#2d2a2e]">Mobile Services</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* eSIM Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Wifi className="h-8 w-8 text-[#6b6570] mb-2" />
              <CardTitle className="text-[#2d2a2e]">Global eSIM</CardTitle>
              <CardDescription className="text-[#4a4749]">
                Seamless, uninterrupted, global connectivity for your IoT and roaming devices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#4a4749] mb-4">
                Our eSIM technology empowers you to offer global connectivity to your customers, ensuring they stay
                connected wherever they go.
              </p>
            </CardContent>
            <CardFooter>
              <ServiceLaunchPopup
                title="Exciting Launch: Global eSIM Service"
                description="We are thrilled to announce the upcoming launch of our Global eSIM service, a game-changing solution for international connectivity. This innovative offering will revolutionize how you stay connected while traveling abroad. With our Global eSIM, you'll enjoy seamless, high-speed data access across multiple countries without the need to swap physical SIM cards. Experience the convenience of instant activation, competitive rates, and the flexibility to manage your plan directly from your device. Whether you're a frequent traveler, digital nomad, or occasional globetrotter, our Global eSIM service ensures you're always connected, productive, and in touch with what matters most. Stay tuned for more details on this exciting new service that's set to transform your international communication experience!"
                triggerText="Purchase Global eSIM"
              />
            </CardFooter>
          </Card>

          {/* Mobile Top-Up Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Smartphone className="h-8 w-8 text-[#6b6570] mb-2" />
              <CardTitle className="text-[#2d2a2e]">Mobile Top-Up</CardTitle>
              <CardDescription className="text-[#4a4749]">
                International mobile top-up for over 150+ countries and 850+ operators.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#4a4749] mb-4">
                Keep your phone charged and ready with our easy-to-use international top-up service. Available for a
                wide range of global carriers.
              </p>
            </CardContent>
            <CardFooter>
              <ServiceLaunchPopup
                title="Coming Soon: Enhanced Mobile Top-Up Service"
                description="Get ready for an upgraded mobile top-up experience! We're excited to announce the imminent launch of our enhanced Mobile Top-Up service, designed to make recharging your phone easier and more rewarding than ever. Our new platform will offer instant top-ups for over 500 mobile operators in 150+ countries, ensuring you and your loved ones stay connected wherever you are in the world. Look forward to a user-friendly interface, multiple payment options, and exclusive bonuses on selected top-ups. Plus, our new loyalty program will reward you for every recharge, helping you save more on future transactions. Whether you're topping up your own phone or sending credit to family and friends abroad, our service will provide a fast, secure, and convenient solution. Stay connected effortlessly with SparcoDB's upcoming Mobile Top-Up service – your global recharge solution!"
                triggerText="Top Up Now"
              />
            </CardFooter>
          </Card>

          {/* E-gift Cards */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Gift className="h-8 w-8 text-[#6b6570] mb-2" />
              <CardTitle className="text-[#2d2a2e]">E-gift Cards</CardTitle>
              <CardDescription className="text-[#4a4749]">
                Make gift-giving easy with our selection of e-vouchers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#4a4749] mb-4">
                Choose from a variety of e-gift cards for popular retailers, restaurants, and services. Perfect for
                last-minute gifts or showing appreciation from afar.
              </p>
            </CardContent>
            <CardFooter>
              <ServiceLaunchPopup
                title="Introducing: Fiblimited E-Gift Card Marketplace"
                description="We're delighted to unveil our upcoming E-Gift Card Marketplace, a one-stop destination for all your gifting needs. Soon, you'll have access to a vast selection of e-gift cards from hundreds of popular brands across retail, dining, entertainment, and more. Our platform will offer instant delivery, allowing you to send thoughtful gifts in seconds, perfect for last-minute presents or spontaneous gestures of appreciation. You'll enjoy the flexibility to choose from various denominations and the option to personalize your gift with custom messages. What's more, our innovative 'Gift Recommender' feature will help you find the perfect e-gift card based on the recipient's interests and your budget. As part of our launch, we're also introducing special discounts and cashback offers on selected e-gift cards, helping you maximize value with every purchase. Get ready to revolutionize your gifting experience with SparcoDB's E-Gift Card Marketplace!"
                triggerText="Browse E-gift Cards"
              />
            </CardFooter>
          </Card>

          {/* Utility Payments */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Zap className="h-8 w-8 text-[#6b6570] mb-2" />
              <CardTitle className="text-[#2d2a2e]">Utility Payments</CardTitle>
              <CardDescription className="text-[#4a4749]">
                Pay utility bills for friends and family with ease.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#4a4749] mb-4">
                Help your loved ones stay on top of their bills. Our service allows you to pay utility bills
                internationally, ensuring peace of mind for you and your family.
              </p>
            </CardContent>
            <CardFooter>
              <ServiceLaunchPopup
                title="Coming Soon: Global Utility Payment Solution"
                description="We're excited to announce the upcoming launch of our Global Utility Payment Solution, a groundbreaking service designed to simplify bill payments across borders. Soon, you'll be able to manage and pay utility bills for properties worldwide, all from the comfort of your SparcoDB account. This innovative platform will support payments for electricity, water, gas, internet, and more, covering thousands of providers across multiple countries. You'll benefit from real-time payment processing, competitive exchange rates, and the ability to schedule recurring payments, ensuring you never miss a due date. Our service will also provide detailed transaction histories and payment confirmations, making it easier to track and manage your global utility expenses. Whether you're an expat managing properties abroad, helping family overseas, or a property investor with international holdings, our Global Utility Payment Solution will streamline your bill management process, saving you time and reducing the complexity of international payments. Get ready for a more connected, efficient way to handle your global utility bills with SparcoDB!"
                triggerText="Pay Utility Bills"
              />
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
