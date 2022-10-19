import { Heading } from "./components/Heading/Heading"
import { Text } from "./components/Text/Text"
import "./styles/global.css"

export function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-gray-800">
      <Heading>Teste</Heading>

      <Text size="lg">teste</Text>
    </div>
  )
}
