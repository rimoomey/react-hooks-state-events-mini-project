import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const nextID = (
    (id) => () =>
      id++
  )(0);

  const buttonSelection = CATEGORIES.map((currCategory) => {
    return {
      category: currCategory,
      isSelected: false,
    };
  });

  const myTodos = TASKS.map((todo) => {
    return {
      id: nextID(),
      text: todo.text,
      category: todo.category,
    };
  });

  const [currentCategories, changeCategories] = useState(buttonSelection);
  const [taskList, updateTaskList] = useState(myTodos);

  const handleSelection = (e) => {
    let newArray = [...currentCategories];
    const index = newArray.findIndex(el => el.category === e.target.textContent)
    newArray[index] = {
      category: newArray[index].category,
      isSelected: !newArray[index].isSelected
    }

    changeCategories(newArray);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={currentCategories} callBack={handleSelection}/>
      <NewTaskForm todos={taskList} categories={CATEGORIES} callBack={updateTaskList} nextID={nextID}/>
      <TaskList todos={taskList} displayedCategories={currentCategories} callBack={updateTaskList}/>
    </div>
  );
}

export default App;
