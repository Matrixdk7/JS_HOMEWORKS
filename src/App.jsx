import MarkdownEditor from "./components/MarkdownEditor";

function App() {

  const handleChange = (value) => {
    console.log(value)
  }

  return (
    <MarkdownEditor onContentChange={handleChange} />
  )
}

export default App
