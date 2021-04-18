import React from 'react';

import Todo from "./Todo";

function TodoList({ todos, completeTodo, editTodo, deleteTodo }) {
    const listTodos = todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      );
    });
  
    return (
      <>
        <ul>{listTodos}</ul>
      </>
    );
  }
  
  export default TodoList;