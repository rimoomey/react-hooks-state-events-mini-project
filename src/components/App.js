import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const buttonSelection = CATEGORIES.map((currCategory) => {
    return {
      category: currCategory,
      isSelected: false,
    };
  });

  const [currentCategories, changeCategories] = useState(buttonSelection);

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
      <NewTaskForm />
      <TaskList todos={TASKS} displayedCategories={currentCategories}/>
    </div>
  );
}

export default App;
