import { Meta, StoryObj } from "@storybook/react"

import { Text, TextProps } from "./Text"

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Default text",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text as tag p</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
