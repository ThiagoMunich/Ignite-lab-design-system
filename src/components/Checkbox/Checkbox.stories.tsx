import { Meta, StoryObj } from "@storybook/react"

import { Text } from "../Text/Text"
import { CheckBox, CheckBoxProps } from "./Checkbox"

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Remember me</Text>
        </div>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}
