import React from 'react';
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";

import logo from "./assets/images/react.png";
import { listoftodos } from "./assets/data";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(listoftodos);

  const completeTodo = (id) => {
    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex((todo) => todo.id === id);
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  };

  const editTodo = (id, text) => {
    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex((todo) => todo.id === id);
    temporaryTodos[index].text = text;
    setTodos(temporaryTodos);
  };

  const addTodo = (msg) => {
    const newTodo = [
      ...todos,
      {
        id: uuidv4(),
        text: msg,
        isCompleted: false
      }
    ];
    setTodos(newTodo);
  };

  const deleteTodo = (id) => {
    const temporaryTodos = [...todos];
    const newTodos = temporaryTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <header><img src = {logo}/></header>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;