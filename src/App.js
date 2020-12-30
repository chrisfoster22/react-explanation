import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <h1>Write a todo!</h1>
      <input onChange={(event) => setNewTodo(event.target.value)} />
      <button onClick={addTodo}>Add todo</button>
      { todos.map((todo) => {
        return (
        <p>{todo}</p>
        )
      })}
    </div>
  );
}

export default App;
