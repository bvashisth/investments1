import type React from "react"
import { cn } from "@/lib/utils"

interface GradientIconProps {
  icon: React.ElementType
  className?: string
}

export function GradientIcon({ icon: Icon, className }: GradientIconProps) {
  return (
    <div className={cn("relative w-16 h-16", className)}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-800 dark:from-gray-700 dark:to-gray-900" />
      <div className="absolute inset-[1px] rounded-full bg-background" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary" />
      </div>
    </div>
  )
}

