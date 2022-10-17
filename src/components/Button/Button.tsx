import { ReactNode } from "react"

import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={clsx(
        "bg-cyan-500 font-sans font-semibold text-black px-4 py-3 rounded text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  )
}
