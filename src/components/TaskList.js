import React, { useState } from "react";
import Task from "./Task";

function TaskList(props) {
  const { todos, displayedCategories, callBack } = props;

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    callBack(newTodos);
  };

  const displayEntireList = () => {
    return todos.map((todo) => {
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

    return todos.map((todo) => {
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
