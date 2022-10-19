import { ButtonHTMLAttributes, ReactNode } from "react"

import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={clsx(
        "bg-cyan-500 font-sans font-semibold text-black px-4 py-3 rounded text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
