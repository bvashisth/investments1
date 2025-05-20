"use client"

import { useState } from "react"
import { useForm } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { jsPDF } from "jspdf"

const businessSchema = z.object({
  legalBusinessName: z.string().min(1, "Legal Business Name is required"),
  dbaName: z.string().optional(),
  businessStructure: z.enum(["Sole Proprietorship", "Partnership", "LLC", "Corporation", "Other"]),
  otherBusinessStructure: z.string().optional(),
  dateOfIncorporation: z.string().min(1, "Date of Incorporation is required"),
  countryOfIncorporation: z.string().min(1, "Country of Incorporation is required"),
  businessRegistrationNumber: z.string().min(1, "Business Registration Number is required"),
  taxIdentificationNumber: z.string().min(1, "Tax Identification Number is required"),
  industry: z.string().min(1, "Industry is required"),
  registeredBusinessAddress: z.string().min(1, "Registered Business Address is required"),
  principalPlaceOfBusiness: z.string().optional(),
  businessPhoneNumber: z.string().min(1, "Business Phone Number is required"),
  businessEmailAddress: z.string().email("Invalid email address"),
  businessWebsite: z.string().url().optional().or(z.literal("")),
  numberOfOwners: z.number().min(1, "Number of Owners is required"),
  owners: z
    .array(
      z.object({
        fullName: z.string().min(1, "Full Name is required"),
        dateOfBirth: z.string().min(1, "Date of Birth is required"),
        nationality: z.string().min(1, "Nationality is required"),
        residentialAddress: z.string().min(1, "Residential Address is required"),
        ownershipPercentage: z.number().min(0).max(100, "Ownership Percentage must be between 0 and 100"),
        governmentIssuedIdNumber: z.string().min(1, "Government-issued ID Number is required"),
        idType: z.enum(["Passport", "Driver's License", "National ID"]),
      }),
    )
    .min(1, "At least one owner is required"),
  primaryContactPerson: z.string().min(1, "Primary Contact Person is required"),
  primaryContactPosition: z.string().min(1, "Position/Title is required"),
  primaryContactPhone: z.string().min(1, "Phone Number is required"),
  primaryContactEmail: z.string().email("Invalid email address"),
  authorizedSignatories: z
    .array(
      z.object({
        fullName: z.string().min(1, "Full Name is required"),
        position: z.string().min(1, "Position/Title is required"),
      }),
    )
    .min(1, "At least one authorized signatory is required"),
  accountType: z.enum(["Business Checking", "Business Savings", "Merchant Services", "Other"]),
  otherAccountType: z.string().optional(),
  currency: z.enum(["USD", "EUR", "Other"]),
  otherCurrency: z.string().optional(),
  purposeOfAccount: z.string().min(1, "Purpose of Account is required"),
  anticipatedMonthlyTransactionVolume: z.string().min(1, "Anticipated Monthly Transaction Volume is required"),
  sourceOfFunds: z.string().min(1, "Source of Funds is required"),
  documentationChecklist: z.object({
    certificateOfIncorporation: z.boolean(),
    articlesOfAssociation: z.boolean(),
    businessLicense: z.boolean(),
    proofOfBusinessAddress: z.boolean(),
    taxRegistrationCertificate: z.boolean(),
    financialStatements: z.boolean(),
    proofOfIdentity: z.boolean(),
    proofOfAddress: z.boolean(),
    organizationalChart: z.boolean(),
    beneficialOwnershipDeclaration: z.boolean(),
  }),
  declarationSignature: z.string().min(1, "Signature is required"),
  declarationFullName: z.string().min(1, "Full Name is required"),
  declarationPosition: z.string().min(1, "Position/Title is required"),
  declarationDate: z.string().min(1, "Date is required"),
})

type BusinessFormData = z.infer<typeof businessSchema>

export default function BusinessAccountForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const form = useForm<BusinessFormData>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      owners: [{}],
      authorizedSignatories: [{}],
      documentationChecklist: {},
    },
  })

  const onSubmit = async (data: BusinessFormData) => {
    setIsGeneratingPDF(true)
    try {
      console.log(data)
      await generatePDF(data)

      // Show success message
      alert(`Your business account application has been generated as a PDF. 

Please email the following to accounts@fermionemp.com:
1. The downloaded PDF application form
2. Certificate of Incorporation
3. Business Registration Documents
4. Proof of Business Address
5. ID Documents for all Directors/Owners
6. Bank Statements (last 6 months)

Our team will review your application and contact you within 2-3 business days.`)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("There was an error generating your PDF. Please try again.")
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const generatePDF = (data: BusinessFormData) => {
    const doc = new jsPDF()

    // Add header
    doc.setFontSize(20)
    doc.text("Business Account Opening Form", 20, 20)

    // Add form data
    doc.setFontSize(12)
    doc.text("Business Information:", 20, 40)
    doc.text(`Legal Business Name: ${data.legalBusinessName}`, 30, 50)
    doc.text(`Business Structure: ${data.businessStructure}`, 30, 60)
    doc.text(`Date of Incorporation: ${data.dateOfIncorporation}`, 30, 70)
    doc.text(`Business Registration Number: ${data.businessRegistrationNumber}`, 30, 80)
    doc.text(`Tax ID: ${data.taxIdentificationNumber}`, 30, 90)
    doc.text(`Industry: ${data.industry}`, 30, 100)

    // Add contact information
    doc.text("Contact Information:", 20, 120)
    doc.text(`Phone: ${data.businessPhoneNumber}`, 30, 130)
    doc.text(`Email: ${data.businessEmailAddress}`, 30, 140)

    // Add ownership information
    doc.text("Ownership Information:", 20, 160)
    data.owners?.forEach((owner, index) => {
      const yPos = 170 + index * 30
      doc.text(`Owner ${index + 1}: ${owner.fullName}`, 30, yPos)
      doc.text(`Ownership %: ${owner.ownershipPercentage}`, 30, yPos + 10)
    })

    // Add account information
    doc.text("Account Information:", 20, 220)
    doc.text(`Account Type: ${data.accountType}`, 30, 230)
    doc.text(`Currency: ${data.currency}`, 30, 240)

    // Add declaration
    doc.addPage()
    doc.text("Declaration:", 20, 20)
    doc.text(`Signed by: ${data.declarationFullName}`, 30, 30)
    doc.text(`Position: ${data.declarationPosition}`, 30, 40)
    doc.text(`Date: ${data.declarationDate}`, 30, 50)

    // Save the PDF
    doc.save("BusinessAccountApplication.pdf")
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
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Please provide your business details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="legalBusinessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Legal Business Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dbaName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Doing Business As (DBA) Name (if applicable)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessStructure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Structure</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business structure" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="Partnership">Partnership</SelectItem>
                        <SelectItem value="LLC">Limited Liability Company (LLC)</SelectItem>
                        <SelectItem value="Corporation">Corporation</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("businessStructure") === "Other" && (
                <FormField
                  control={form.control}
                  name="otherBusinessStructure"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other Business Structure</FormLabel>
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
                name="dateOfIncorporation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Incorporation/Formation</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="countryOfIncorporation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country of Incorporation</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessRegistrationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Registration Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="taxIdentificationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tax Identification Number (EIN/TIN)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry/Nature of Business</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="registeredBusinessAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registered Business Address</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="principalPlaceOfBusiness"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Principal Place of Business (if different)</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessPhoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessEmailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Website (if applicable)</FormLabel>
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
              <CardTitle>Ownership Information</CardTitle>
              <CardDescription>Please provide details for each owner with 25% or more ownership</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="numberOfOwners"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Owners/Shareholders</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {[...Array(form.watch("numberOfOwners") || 0)].map((_, index) => (
                <div key={index} className="space-y-4 border p-4 rounded">
                  <FormField
                    control={form.control}
                    name={`owners.${index}.fullName`}
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
                    name={`owners.${index}.dateOfBirth`}
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
                    name={`owners.${index}.nationality`}
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
                    name={`owners.${index}.residentialAddress`}
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
                    name={`owners.${index}.ownershipPercentage`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ownership Percentage</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`owners.${index}.governmentIssuedIdNumber`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Government-issued ID Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`owners.${index}.idType`}
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
                </div>
              ))}
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
              <CardTitle>Management Information</CardTitle>
              <CardDescription>Please provide details about the management and authorized signatories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="primaryContactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Contact Person</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="primaryContactPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position/Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="primaryContactPhone"
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
                name="primaryContactEmail"
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
              <div>
                <h4 className="font-medium mb-2">List of Authorized Signatories</h4>
                {form.watch("authorizedSignatories")?.map((_, index) => (
                  <div key={index} className="space-y-4 border p-4 rounded mb-4">
                    <FormField
                      control={form.control}
                      name={`authorizedSignatories.${index}.fullName`}
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
                      name={`authorizedSignatories.${index}.position`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position/Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    const currentSignatories = form.getValues("authorizedSignatories") || []
                    form.setValue("authorizedSignatories", [...currentSignatories, {}])
                  }}
                >
                  Add Another Signatory
                </Button>
              </div>
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
                    <FormLabel>Type of Account Requested</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Business Checking">Business Checking</SelectItem>
                        <SelectItem value="Business Savings">Business Savings</SelectItem>
                        <SelectItem value="Merchant Services">Merchant Services</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("accountType") === "Other" && (
                <FormField
                  control={form.control}
                  name="otherAccountType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other Account Type</FormLabel>
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
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="anticipatedMonthlyTransactionVolume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anticipated Monthly Transaction Volume</FormLabel>
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
                      <Textarea {...field} />
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
              <CardTitle>Additional Documentation</CardTitle>
              <CardDescription>Please confirm that you have the following documents ready to submit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="documentationChecklist.certificateOfIncorporation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Certificate of Incorporation/Formation</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.articlesOfAssociation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Articles of Association/Organization</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.businessLicense"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Business License/Permit</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.proofOfBusinessAddress"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Proof of Business Address</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.taxRegistrationCertificate"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Tax Registration Certificate</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.financialStatements"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Financial Statements (last 2 years, if applicable)</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.proofOfIdentity"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Proof of Identity for all owners and authorized signatories</FormLabel>
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
                        <FormLabel>Proof of Address for all owners and authorized signatories</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.organizationalChart"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Organizational Chart (for complex ownership structures)</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="documentationChecklist.beneficialOwnershipDeclaration"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Beneficial Ownership Declaration Form</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
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
              <CardTitle>Declarations</CardTitle>
              <CardDescription>Please read and sign the following declarations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p>By signing below, I/we certify that:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    All information provided in this form and accompanying documents is true, accurate, and complete.
                  </li>
                  <li>I/We have the authority to open this account on behalf of the business.</li>
                  <li>I/We agree to notify the bank promptly of any changes to the information provided.</li>
                  <li>
                    I/We consent to the bank conducting necessary checks and verifications as part of the Know Your
                    Business (KYB) process.
                  </li>
                  <li>
                    I/We have read, understood, and agree to the bank's terms and conditions for business accounts.
                  </li>
                </ul>
              </div>
              <FormField
                control={form.control}
                name="declarationSignature"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Signature of Authorized Representative</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="declarationFullName"
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
                name="declarationPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position/Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="declarationDate"
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
              <Button type="submit" disabled={isGeneratingPDF}>
                {isGeneratingPDF ? "Generating PDF..." : "Submit Application"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </form>
    </Form>
  )
}
