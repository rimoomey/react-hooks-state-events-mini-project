import React from "react";

function Task(props) {
  const {callBack, task} = props;
  const {id, text, category} = task;

  const deleteTodo = () => {
    callBack(id);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTodo}>X</button>
    </div>
  );
}

export default Task;
