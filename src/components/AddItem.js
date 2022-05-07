import React from "react";
import "./AddItem.css";

function AddItem(props) {
  function handleClick() {
    props.addQuantity(props.id);
  }

  return (
    <div className={"add"}>
      <button onClick={handleClick} className="add__button">
        +
      </button>
    </div>
  );
}

export default AddItem;
