"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { jsPDF } from "jspdf"

const personalSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  nationality: z.string().min(1, "Nationality is required"),
  idType: z.enum(["Passport", "Driver's License", "National ID"]),
  idNumber: z.string().min(1, "ID Number is required"),
  residentialAddress: z.string().min(1, "Residential Address is required"),
  mailingAddress: z.string().optional(),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  emailAddress: z.string().email("Invalid email address"),
  occupation: z.string().min(1, "Occupation is required"),
  employerName: z.string().optional(),
  annualIncome: z.string().min(1, "Annual Income is required"),
  sourceOfFunds: z.string().min(1, "Source of Funds is required"),
  accountType: z.enum(["Savings", "Checking", "Fixed Deposit"]),
  currency: z.enum(["USD", "EUR", "GBP", "Other"]),
  otherCurrency: z.string().optional(),
  purposeOfAccount: z.string().min(1, "Purpose of Account is required"),
  expectedMonthlyTransactionVolume: z.string().min(1, "Expected Monthly Transaction Volume is required"),
  onlineBankingRequired: z.boolean(),
  debitCardRequired: z.boolean(),
  checkbookRequired: z.boolean(),
  documentationChecklist: z.object({
    proofOfIdentity: z.boolean(),
    proofOfAddress: z.boolean(),
    proofOfIncome: z.boolean(),
  }),
  termsAndConditions: z.boolean(),
  signature: z.string().min(1, "Signature is required"),
  date: z.string().min(1, "Date is required"),
})

type PersonalFormData = z.infer<typeof personalSchema>

export default function PersonalAccountForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const form = useForm<PersonalFormData>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      documentationChecklist: {},
    },
  })

  const onSubmit = (data: PersonalFormData) => {
    console.log(data)
    generatePDF(data)

    // Show success message
    alert(`Your personal account application has been generated as a PDF. 

Please email the following to accounts@sparco.db:
1. The downloaded PDF application form
2. Valid Government-issued ID (Passport/Driver's License/National ID)
3. Proof of Address (utility bill/bank statement, less than 3 months old)
4. Proof of Income (payslips/tax returns)
5. Recent Photo (passport-sized)

Our team will review your application and contact you within 2-3 business days.`)
  }

  const generatePDF = (data: PersonalFormData) => {
    const doc = new jsPDF()

    // Add header
    doc.setFontSize(20)
    doc.text("Personal Account Opening Form", 20, 20)

    // Add personal information
    doc.setFontSize(12)
    doc.text("Personal Information:", 20, 40)
    doc.text(`Full Name: ${data.fullName}`, 30, 50)
    doc.text(`Date of Birth: ${data.dateOfBirth}`, 30, 60)
    doc.text(`Nationality: ${data.nationality}`, 30, 70)
    doc.text(`ID Type: ${data.idType}`, 30, 80)
    doc.text(`ID Number: ${data.idNumber}`, 30, 90)

    // Add contact information
    doc.text("Contact Information:", 20, 110)
    doc.text(`Residential Address: ${data.residentialAddress}`, 30, 120)
    doc.text(`Phone Number: ${data.phoneNumber}`, 30, 130)
    doc.text(`Email: ${data.emailAddress}`, 30, 140)

    // Add employment information
    doc.text("Employment Information:", 20, 160)
    doc.text(`Occupation: ${data.occupation}`, 30, 170)
    doc.text(`Employer: ${data.employerName || "N/A"}`, 30, 180)
    doc.text(`Annual Income: ${data.annualIncome}`, 30, 190)

    // Add account information
    doc.text("Account Information:", 20, 210)
    doc.text(`Account Type: ${data.accountType}`, 30, 220)
    doc.text(`Currency: ${data.currency}`, 30, 230)
    doc.text(`Purpose of Account: ${data.purposeOfAccount}`, 30, 240)

    // Add services requested
    doc.addPage()
    doc.text("Services Requested:", 20, 20)
    doc.text(`Online Banking: ${data.onlineBankingRequired ? "Yes" : "No"}`, 30, 30)
    doc.text(`Debit Card: ${data.debitCardRequired ? "Yes" : "No"}`, 30, 40)
    doc.text(`Checkbook: ${data.checkbookRequired ? "Yes" : "No"}`, 30, 50)

    // Add declaration
    doc.text("Declaration:", 20, 70)
    doc.text(`Signature: ${data.signature}`, 30, 80)
    doc.text(`Date: ${data.date}`, 30, 90)

    // Save the PDF
    doc.save("PersonalAccountApplication.pdf")
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Please provide your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nationality</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ID type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Passport">Passport</SelectItem>
                        <SelectItem value="Driver's License">Driver's License</SelectItem>
                        <SelectItem value="National ID">National ID</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Please provide your contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="residentialAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Residential Address</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mailingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mailing Address (if different from Residential Address)</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="button" onClick={prevStep} className="mr-2">
                Previous
              </Button>
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Employment and Financial Information</CardTitle>
              <CardDescription>Please provide your employment and financial details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occupation</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employer Name (if applicable)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annualIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Income</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sourceOfFunds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Source of Funds</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="button" onClick={prevStep} className="mr-2">
                Previous
              </Button>
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Please provide details about the requested account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Savings">Savings</SelectItem>
                        <SelectItem value="Checking">Checking</SelectItem>
                        <SelectItem value="Fixed Deposit">Fixed Deposit</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("currency") === "Other" && (
                <FormField
                  control={form.control}
                  name="otherCurrency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other Currency</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="purposeOfAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose of Account</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectedMonthlyTransactionVolume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected Monthly Transaction Volume</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="button" onClick={prevStep} className="mr-2">
                Previous
              </Button>
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {currentStep === 5 && (
          <Card>
            <CardHeader>
              <CardTitle>Additional Services</CardTitle>
              <CardDescription>Please select the additional services you require</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="onlineBankingRequired"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Online Banking Required</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="debitCardRequired"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Debit Card Required</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checkbookRequired"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Checkbook Required</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="button" onClick={prevStep} className="mr-2">
                Previous
              </Button>
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {currentStep === 6 && (
          <Card>
            <CardHeader>
              <CardTitle>Documentation and Declaration</CardTitle>
              <CardDescription>Please confirm the required documentation and agree to the terms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Required Documentation</h3>
                <FormField
                  control={form.control}
                  name="documentationChecklist.proofOfIdentity"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Proof of Identity</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.proofOfAddress"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Proof of Address</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.proofOfIncome"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Proof of Income</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="termsAndConditions"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I agree to the terms and conditions</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="signature"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Signature</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="button" onClick={prevStep} className="mr-2">
                Previous
              </Button>
              <Button type="submit">Submit Application</Button>
            </CardFooter>
          </Card>
        )}
      </form>
    </Form>
  )
}
