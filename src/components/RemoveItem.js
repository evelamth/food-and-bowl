import React from "react";
import "./RemoveItem.css";

function RemoveItem(props) {
  function handleClick() {
    props.removeQuantity(props.id);
  }
  return (
    <div className="remove">
      <button onClick={handleClick} className="remove__button">
        -
      </button>
    </div>
  );
}

export default RemoveItem;
