import React, { useState } from "react";

function CategoryFilter(props) {
  const { categories, callBack } = props;

  // const buttonSelection = categories.map((currCategory) => {
  //   return {
  //     category: currCategory,
  //     isSelected: false,
  //   };
  // });

  // const [currentCategories, changeCategories] = useState(buttonSelection);

  // const handleSelection = (e) => {
  //   let newArray = [...currentCategories];
  //   const index = newArray.findIndex(el => el.category === e.target.textContent)
  //   newArray[index] = {
  //     category: newArray[index].category,
  //     isSelected: !newArray[index].isSelected
  //   }

  //   changeCategories(newArray);
  // };

  const makeButtons = () => {
    const buttonList = categories.map((currCategory) => {
      return (
        <button className={currCategory.isSelected ? "selected" : ""} key={currCategory.category} onClick={callBack}>
          {currCategory.category}
        </button>
      );
    });

    return buttonList;
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {makeButtons()}
    </div>
  );
}

export default CategoryFilter;
