"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface PrivacyPolicyModalProps {
  triggerClassName?: string
}

export function PrivacyPolicyModal({ triggerClassName }: PrivacyPolicyModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className={triggerClassName || "text-sm text-prussian-blue hover:text-blue-green"}>
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-prussian-blue mb-4">Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-muted-foreground mb-4">Last updated January 08, 2025</p>

          <div className="space-y-4">
            <p>
              This Privacy Notice for Lao construction Bank ("we," "us," or "our"), describes how and why we might
              access, collect, store, use, and/or share ("process") your personal information when you use our services
              ("Services"), including when you:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Visit our website at #, or any website of ours that links to this Privacy Notice</li>
              <li>
                Download and use our mobile application (lcb), or any other application of ours that links to this
                Privacy Notice
              </li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-semibold mb-2">Questions or concerns?</p>
              <p>
                Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible
                for making decisions about how your personal information is processed. If you do not agree with our
                policies and practices, please do not use our Services. If you still have any questions or concerns,
                please contact us at privacy@example.com.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold mt-6 mb-4">SUMMARY OF KEY POINTS</h2>
              <p className="italic mb-4">
                This summary provides key points from our Privacy Notice, but you can find out more details about any of
                these topics by clicking the link following each key point or by using our table of contents below to
                find the section you are looking for.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold">What personal information do we process?</p>
                  <p>
                    When you visit, use, or navigate our Services, we may process personal information depending on how
                    you interact with us and the Services, the choices you make, and the products and features you use.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Do we process any sensitive personal information?</p>
                  <p>
                    Some of the information may be considered "special" or "sensitive" in certain jurisdictions,
                    including your racial or ethnic origins, sexual orientation, and religious beliefs. We may process
                    sensitive personal information when necessary with your consent or as otherwise permitted by
                    applicable law.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Do we collect any information from third parties?</p>
                  <p>We do not collect any information from third parties.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mt-6 mb-4">HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p>
                We have implemented appropriate and reasonable technical and organizational security measures designed
                to protect the security of any personal information we process. However, despite our safeguards and
                efforts to secure your information, no electronic transmission over the Internet or information storage
                technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                cybercriminals, or other unauthorized third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information. Although we will do our best to protect
                your personal information, transmission of personal information to and from our Services is at your own
                risk. You should only access the Services within a secure environment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mt-6 mb-4">WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p>
                Depending on your state of residence in the US or in some regions, such as the European Economic Area
                (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to
                and control over your personal information. You may review, change, or terminate your account at any
                time.
              </p>
              <p className="mt-4">
                If you have questions or comments about your privacy rights, you may email us at privacy@example.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mt-6 mb-4">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p>
                If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO)
                by email at compliance@example.com, or contact us by post at:
              </p>
              <div className="mt-4">
                <p className="font-semibold">Lao construction Bank</p>
                <p>Data Protection Officer</p>
                <p>Headquarters in Vientiane, Lao</p>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
