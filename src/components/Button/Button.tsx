import { ButtonHTMLAttributes, ReactNode } from "react"

import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
  color?: "primary" | "error"
  variant?: "contained" | "outlined"
}

export function Button({
  asChild,
  children,
  className,
  color = "primary",
  variant = "contained",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  const buttonStyle = () => {
    let defaultStyle =
      "font-sans font-semibold px-4 py-3 rounded text-sm w-full transition-colors focus:ring-2 ring-white"

    if (props?.disabled) {
      return `${defaultStyle} text-black bg-gray-400 opacity-75`
    } else if (color === "error") {
      return variant === "contained"
        ? `${defaultStyle} text-white bg-red-600 hover:bg-red-500`
        : `${defaultStyle} text-red-500 bg-transparent ring-2 ring-red-500`
    } else {
      return variant === "contained"
        ? `${defaultStyle} text-black bg-cyan-500 hover:bg-cyan-300`
        : `${defaultStyle} text-cyan-300 bg-transparent ring-2 ring-cyan-500`
    }
  }

  return (
    <Comp className={clsx(buttonStyle(), className)} {...props}>
      {children}
    </Comp>
  )
}
