import { useState } from 'react'
import LogCounter from "./components/LogCounter";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <LogCounter />
    </>
  )
}

export default App
