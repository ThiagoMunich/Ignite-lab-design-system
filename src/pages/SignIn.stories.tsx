import { Meta, StoryObj } from "@storybook/react"

import { rest } from "msw"
import { expect } from "@storybook/jest"
import { userEvent, within, waitFor } from "@storybook/testing-library"

import { SignIn } from "../pages/SignIn"

export default {
  title: "Pages/Signin",
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login successful",
            })
          )
        }),
      ],
    },
  },
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(
      canvas.getByPlaceholderText("Type your e-mail address"),
      "thiagomunich@gmail.com"
    )

    userEvent.type(canvas.getByPlaceholderText("Type your password"), "123456")

    userEvent.click(canvas.getByRole("button"))

    await waitFor(() => {
      expect(canvas.getByText("You logged in!")).toBeInTheDocument()
    })
  },
}
