import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Users, Wallet, BookOpen, Building } from "lucide-react"
import { InitiativePopup } from "@/components/InitiativePopup"

export default function InitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e0dce3] pt-20">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#2d2a2e]">Our Initiatives</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Users className="h-8 w-8 text-[#6b6570] mb-2" />
              <CardTitle className="text-[#2d2a2e]">Financial Inclusion</CardTitle>
              <CardDescription className="text-[#4a4749]">
                Bridging the gap for underbanked and unbanked communities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#4a4749] mb-4">
                We offer low-cost, no-frills banking solutions and digital access to financial services, making banking
                accessible to all.
              </p>
              <InitiativePopup
                title="Financial Inclusion: Empowering the Underserved"
                description="At SparcoDB, our Financial Inclusion initiative is at the heart of our mission to create a more equitable financial landscape. We recognize that traditional banking systems often overlook millions of individuals and small businesses, leaving them vulnerable and limiting their economic potential. Our approach is multifaceted, combining innovative technology with deep community engagement to break down barriers to financial services.

We've developed a range of low-cost, user-friendly banking solutions tailored to the needs of underbanked populations. These include mobile banking apps with intuitive interfaces, allowing users to manage their finances with just a smartphone. We've also introduced micro-savings accounts with no minimum balance requirements, encouraging a culture of saving even among those with limited incomes.

Our micro-lending programs are designed to support small entrepreneurs who lack credit history, providing them with the capital they need to grow their businesses. We've partnered with local organizations to offer financial literacy workshops, empowering individuals with the knowledge to make informed financial decisions.

By leveraging technology and grassroots partnerships, we're not just providing banking services; we're fostering economic resilience and opening doors to new opportunities for millions. Our goal is to create a ripple effect of prosperity, where access to financial services leads to increased savings, investment in education, and the growth of small businesses, ultimately contributing to the overall economic development of communities."
              />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Wallet className="h-8 w-8 text-[#6b6570] mb-2" />
              <CardTitle className="text-[#2d2a2e]">Tailored Financial Products</CardTitle>
              <CardDescription className="text-[#4a4749]">
                Customized solutions for individuals and small businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#4a4749] mb-4">
                From microloans to flexible savings accounts, we provide financial products designed to meet unique
                needs.
              </p>
              <InitiativePopup
                title="Tailored Financial Products: Solutions as Unique as Our Customers"
                description="At SparcoDB, we understand that one size doesn't fit all when it comes to financial services. Our Tailored Financial Products initiative is built on the principle that every individual and business has unique financial needs and aspirations. We've moved beyond the traditional banking model to create a suite of customizable products that adapt to the diverse requirements of our global customer base.

For individuals, we offer flexible savings accounts that can be adjusted based on income patterns, allowing for irregular deposits without penalties - perfect for freelancers or seasonal workers. Our micro-investment products enable customers to start building wealth with small amounts, democratizing access to investment opportunities previously reserved for high-net-worth individuals.

For small businesses, we've developed revolving credit lines that grow with the business, providing the flexibility needed in dynamic market conditions. Our invoice financing solution helps manage cash flow challenges, a common hurdle for small enterprises. We've also introduced specialized loan products for green businesses, supporting sustainable development while offering preferential rates.

What sets our approach apart is the use of advanced data analytics and AI to continuously refine and personalize these products. By analyzing transaction patterns and financial behaviors, we can proactively offer solutions that best fit each customer's evolving needs. This not only improves financial outcomes for our customers but also strengthens their relationship with us, fostering long-term financial well-being and success."
              />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-[#6b6570] mb-2" />
              <CardTitle className="text-[#2d2a2e]">Financial Education</CardTitle>
              <CardDescription className="text-[#4a4749]">Empowering communities through knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#4a4749] mb-4">
                We offer workshops, online resources, and mentorship programs to improve financial literacy and business
                skills.
              </p>
              <InitiativePopup
                title="Financial Education: Knowledge is Power"
                description="SparcoDB's Financial Education initiative is founded on the belief that knowledge is the most powerful tool for financial empowerment. We're committed to breaking down the complexities of finance and making this knowledge accessible to all, regardless of their background or current financial status.

Our comprehensive program includes a variety of educational formats to cater to different learning styles and needs. We conduct in-person workshops in communities, covering topics from basic budgeting to advanced investment strategies. These sessions are interactive, using real-life scenarios to make financial concepts relatable and applicable.

Understanding the power of digital reach, we've developed an extensive online learning platform. This includes video tutorials, interactive courses, and webinars led by financial experts. The platform is accessible 24/7, allowing users to learn at their own pace and convenience. We've also created a mobile app that gamifies financial learning, making education engaging and fun.

For entrepreneurs and small business owners, we offer specialized business financial management courses. These cover areas like cash flow management, pricing strategies, and accessing capital. Our mentorship program pairs experienced financial professionals with individuals or small business owners, providing personalized guidance and support.

By equipping people with financial knowledge and skills, we're not just helping individuals - we're building stronger, more resilient communities. Our goal is to create a ripple effect where improved financial literacy leads to better financial decisions, increased economic stability, and ultimately, a more prosperous society for all."
              />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Building className="h-8 w-8 text-[#6b6570] mb-2" />
              <CardTitle className="text-[#2d2a2e]">Community Partnerships</CardTitle>
              <CardDescription className="text-[#4a4749]">Collaborating for greater impact</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#4a4749] mb-4">
                We work with local organizations, governments, and non-profits to extend our reach and create lasting
                change.
              </p>
              <InitiativePopup
                title="Community Partnerships: Amplifying Our Impact Together"
                description="At SparcoDB, we firmly believe that the most effective and sustainable change happens through collaboration. Our Community Partnerships initiative is the cornerstone of our approach to creating meaningful impact in the communities we serve. We recognize that local organizations, governments, and non-profits often have deep insights into community needs and established trust with residents. By partnering with these entities, we can leverage their expertise and reach while bringing our financial resources and global perspective to the table.

Our partnerships take many forms, each tailored to address specific community needs. We work with local microfinance institutions to expand access to credit in underserved areas, combining their on-the-ground knowledge with our financial backing and risk management expertise. Collaborations with educational institutions allow us to integrate financial literacy programs into school curricula, ensuring that young people are equipped with essential money management skills from an early age.

We've also formed strategic alliances with technology startups to develop innovative solutions for financial inclusion. These partnerships have resulted in mobile banking apps and digital payment systems that work even in areas with limited internet connectivity, bringing modern financial services to remote regions.

Our commitment to community development extends to environmental sustainability. We partner with local environmental organizations to fund and implement green initiatives, from renewable energy projects to sustainable agriculture programs. These efforts not only contribute to environmental preservation but also create new economic opportunities in green sectors.

Through these diverse and dynamic partnerships, we're able to create a multiplier effect, amplifying our impact and fostering holistic community development. Our goal is not just to provide financial services, but to be a catalyst for positive change, working hand in hand with communities to build a more equitable and prosperous future for all."
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
