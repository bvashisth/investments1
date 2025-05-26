'use client'

import { useEffect } from 'react'

export function TermsAndConditions() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://app.termly.io/policy-viewer/policy.html?policyUUID=19b718ce-df45-479d-be3e-620fe745de18"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <div name="termly-embed" data-id="19b718ce-df45-479d-be3e-620fe745de18"></div>
    </div>
  )
}
