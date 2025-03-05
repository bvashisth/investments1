import * as React from "react"
import Link from "next/link"
import { Button, type ButtonProps } from "./button"

interface LinkedButtonProps extends ButtonProps {
  href: string
}

export const LinkedButton = React.forwardRef<HTMLAnchorElement, LinkedButtonProps>(
  ({ href, children, ...props }, ref) => {
    return (
      <Button asChild {...props}>
        <Link href={href} ref={ref}>
          {children}
        </Link>
      </Button>
    )
  },
)

LinkedButton.displayName = "LinkedButton"

