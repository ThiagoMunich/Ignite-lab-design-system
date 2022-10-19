import { Envelope, Lock } from "phosphor-react"

import "./styles/global.css"

import { Logo } from "./Icons/Logo"
import { Text } from "./components/Text/Text"
import { Button } from "./components/Button/Button"
import { Heading } from "./components/Heading/Heading"
import { CheckBox } from "./components/Checkbox/Checkbox"
import { TextInput } from "./components/TextInput/TextInput"

export function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-gray-900 text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-2">
          Login and start using
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Your e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              type="email"
              placeholder="Type your e-mail address"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Your password</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              type="password"
              placeholder="Type your password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />

          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>

        <Button type="submit" className="mt-4" color="error" variant="outlined">
          Login to platform
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          asChild
          size="sm"
          className="text-gray-400 underline hover:text-gray-200"
        >
          <a href="#">Forgot your password?</a>
        </Text>

        <Text
          asChild
          size="sm"
          className="text-gray-400 underline hover:text-gray-200"
        >
          <a href="#">Create your account</a>
        </Text>
      </footer>
    </div>
  )
}
