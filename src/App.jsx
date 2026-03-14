import { useState } from 'react'
import PostCatalog from "./components/PostCatalog.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <PostCatalog />
  )
}

export default App
