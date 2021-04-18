import React from 'react';

import { useState } from "react";

function Todo({ todo, completeTodo, deleteTodo, editTodo }) {

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleEdit = (evt) => {
    setText(evt.target.value);
  };

  const handleUpdate = (id, text) => {
    editTodo(id, text);
    toggleEdit();
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />
      {!edit ? (
        <>
          <span
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
            {" "}
            {todo.text}{" "}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>X</button>
          <button onClick={() => toggleEdit()} disabled={todo.isCompleted}>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="input"
            value={text}
            onChange={(evt) => handleEdit(evt)}
          />
          <button onClick={() => handleUpdate(todo.id, text)}>Update</button>
          <button onClick={() => toggleEdit()}> Cancel </button>
        </>
      )}
    </li>
  );
}

export default Todo;
