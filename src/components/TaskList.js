import React, { useState } from "react";
import Task from './Task';

function TaskList(props) {
  const { todos } = props;

  const nextID = (
    (id) => () =>
      id++
  )(0);

  const myTodos = todos.map((todo) => {
    return {
      id: nextID(),
      text: todo.text,
      category: todo.category,
    };
  });

  const [ todoList, updateTodoList ] = useState(myTodos);

  const deleteTodo = (id) => {
    const newTodos = todoList.filter((todo) => {
      return todo.id !== id;
    });

    updateTodoList(newTodos);
  };

  const makeList = () => {
    return todoList.map((todo) => {
      return <Task key={todo.id} callBack={deleteTodo} task={todo} />;
    });
  };

  return <div className="tasks">{makeList()}</div>;
}

export default TaskList;
