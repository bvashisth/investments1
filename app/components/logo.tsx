import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simlogonb-sdZnonylVNG38Gl4p5wDUg4BRAbU6t.png"
          alt="Simplify International Logo"
          fill
          className="object-contain bg-transparent"
          priority
        />
      </div>
      <span className="font-bold text-xl text-gradient dark:text-gradient-dark">simplifyintl</span>
    </Link>
  )
}

