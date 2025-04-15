import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Building2, BarChart3, Shield } from "lucide-react"

export default function CommercialLoanPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2d2a2e]">Commercial Loan</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Commercial Financing Solutions</CardTitle>
          <CardDescription>Empowering your business growth</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            At FermionEMP, we understand that businesses need flexible financing solutions to thrive and expand. Our
            Commercial Loan program is designed to provide comprehensive funding solutions for established businesses
            and growing enterprises.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start gap-3">
              <Building2 className="h-6 w-6 text-[#3b82f6] mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Business Expansion</h3>
                <p className="text-sm text-[#4a4749]">
                  Finance your business growth, expand operations, or open new locations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BarChart3 className="h-6 w-6 text-[#3b82f6] mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Working Capital</h3>
                <p className="text-sm text-[#4a4749]">Access funds for inventory, equipment, or operational expenses</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Key Benefits:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-[#3b82f6] mt-1" />
              <span>Competitive interest rates tailored to your business profile</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-[#3b82f6] mt-1" />
              <span>Flexible repayment terms up to 10 years</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-[#3b82f6] mt-1" />
              <span>No prepayment penalties</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-[#3b82f6] mt-1" />
              <span>Dedicated relationship manager for personalized service</span>
            </li>
          </ul>

          <div className="bg-[#f8fafc] p-4 rounded-lg border">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-[#3b82f6] mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Loan Security</h3>
                <p className="text-sm text-[#4a4749]">
                  Our commercial loans can be secured against business assets, property, or other suitable collateral.
                  We work with you to find the most appropriate security arrangement for your situation.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to Apply</CardTitle>
          <CardDescription>Simple steps to secure your commercial loan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              To apply for a Commercial Loan, you'll need to have a Business Account with FermionEMP. This allows us to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Better understand your business operations and cash flow</li>
              <li>Provide more accurate and competitive loan terms</li>
              <li>Streamline the application and approval process</li>
              <li>Offer integrated banking and lending solutions</li>
            </ul>
            <p className="mt-4">
              If you don't have a Business Account yet, please open one first. Once your account is set up, you can
              proceed with your loan application.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/open-account/business">Open a Business Account</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="https://business.fermionemp.com">Login to Your Business Account</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
