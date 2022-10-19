import { Heading } from "./components/Heading/Heading"
import { Text } from "./components/Text/Text"
import { Logo } from "./Icons/Logo"
import "./styles/global.css"

export function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-gray-800 text-gray-100">
      <Logo />

      <Heading size="lg">Ignite Lab</Heading>

      <Text size="lg">Login and start using</Text>
    </div>
  )
}
