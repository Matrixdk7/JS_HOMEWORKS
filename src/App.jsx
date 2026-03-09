import { useState } from 'react'
import './App.css'
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {

    const [todos, setTodos] = useState([
        { id: 1, text: "Task example", completed: false }
    ]);

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { id: todos.length + 1, text, completed: false }
        ]);
    };

  return (
      <>
          <h1>TodoList</h1>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <TodoForm addTodo={addTodo} />
      </>
  )
}

export default App
