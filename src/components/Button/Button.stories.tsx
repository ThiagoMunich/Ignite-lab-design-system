import { Meta, StoryObj } from "@storybook/react"

import { Button, ButtonProps } from "./Button"

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Default Button",
    color: "primary",
  },
  argTypes: {
    color: {
      options: ["primary", "error"],
      control: {
        type: "inline-radio",
      },
    },
    variant: {
      options: ["contained", "outlined"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
