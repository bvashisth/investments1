'use client'

import { useEffect } from 'react'

export function EULA() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://app.termly.io/policy-viewer/policy.html?policyUUID=06f6c24a-5bba-4ba6-9794-c06df5178fdd"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">End-User License Agreement (EULA)</h1>
      <div name="termly-embed" data-id="06f6c24a-5bba-4ba6-9794-c06df5178fdd"></div>
    </div>
  )
}
