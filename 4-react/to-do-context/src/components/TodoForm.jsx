import React from 'react';
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (text === "") {
      setErrorMessage("todo cannot be empty");
      return;
    } else {
      addTodo(text);
      setText("");
    }
  };

  const handleChange = (evt) => {
    if (errorMessage) setErrorMessage("");
    setText(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          New Todo:
          <input
            type="text"
            className="input"
            value={text}
            onChange={(evt) => handleChange(evt)}
          />
        </label>
        <button>Add</button>
      </form>
      <div className="error">{errorMessage}</div>
    </>
  );
}

export default TodoForm;
  