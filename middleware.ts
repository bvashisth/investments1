import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64")

  const cspHeader = `
    default-src 'self';
    script-src 'self' https://fermionemp.com 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://*.vercel-storage.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    connect-src 'self' https://business.fermionemp.com https://support.fermionemp.com;
  `
    .replace(/\s{2,}/g, " ")
    .trim()

  const requestHeaders = new Headers()
  requestHeaders.set("x-nonce", nonce)
  requestHeaders.set("Content-Security-Policy", cspHeader)
  requestHeaders.set("X-Content-Type-Options", "nosniff")
  requestHeaders.set("X-Frame-Options", "DENY")
  requestHeaders.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
  requestHeaders.set("X-XSS-Protection", "1; mode=block")
  requestHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin")
  requestHeaders.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()")

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Also add the headers to the response
  response.headers.set("Content-Security-Policy", cspHeader)
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()")

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
