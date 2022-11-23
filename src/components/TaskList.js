import React, { useState } from "react";
import Task from "./Task";

function TaskList(props) {
  const { todos, displayedCategories } = props;

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

  const [todoList, updateTodoList] = useState(myTodos);

  const deleteTodo = (id) => {
    const newTodos = todoList.filter((todo) => {
      return todo.id !== id;
    });

    updateTodoList(newTodos);
  };

  const displayEntireList = () => {
    return todoList.map((todo) => {
      return <Task key={todo.id} callBack={deleteTodo} task={todo} />;
    });
  };

  const checkDisplayed = (el, todo) => {
    return el.category === todo.category && el.isSelected;
  }

  const filterTasks = () => {
    if (displayedCategories[0].isSelected) {
      return displayEntireList();
    }

    return todoList.map((todo) => {
      if (
        displayedCategories.findIndex((el) => checkDisplayed(el, todo)) >= 0
      ) {
        return <Task key={todo.id} callBack={deleteTodo} task={todo} />;
      } else {
        return null;
      }
    });
  };

  return <div className="tasks">{filterTasks()}</div>;
}

export default TaskList;
