import React, { useState } from "react";

function NewTaskForm(props) {
  const { todos, categories, callBack, nextID } = props;

  const [option, changeOption] = useState("All");
  const [details, changeDetails] = useState("");

  const renderOptions = () => {
    return categories.map((category) => {
      return <option key={category}>{category}</option>;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { id: nextID(), text: details, category: option }];
    console.log(newTodos)

    callBack(newTodos);
  };

  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={details}
          onChange={(e) => changeDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={option}
          onChange={(e) => changeOption(e.target.value)}
        >
          {renderOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
