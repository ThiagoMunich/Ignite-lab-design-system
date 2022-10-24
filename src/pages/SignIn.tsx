import { FormEvent, useState } from "react"

import axios from "axios"

import { Envelope, Lock } from "phosphor-react"

import { Logo } from "../Icons/Logo"
import { Text } from "../components/Text/Text"
import { Button } from "../components/Button/Button"
import { Heading } from "../components/Heading/Heading"
import { CheckBox } from "../components/Checkbox/Checkbox"
import { TextInput } from "../components/TextInput/TextInput"

interface UserProps {
  email: string
  password: string
}

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post("/sessions", {
      email: user.email,
      password: user.password,
    })

    setIsUserSignedIn(true)
  }

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

      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        {isUserSignedIn && <Text size="lg">You logged in!</Text>}

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
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />

          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>

        <Button type="submit" className="mt-4">
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
