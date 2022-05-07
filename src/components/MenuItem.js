import React from "react";
import AddItem from "./AddItem";
import RemoveItem from "./RemoveItem";
import "./MenuItem.css";

function MenuItem(props) {
  return (
    <div className={"item"}>
      <p className="item__name">{props.name}</p>
      <p className="item__price">${props.price}</p>
      <div className="item__number">
        <AddItem id={props.id} addQuantity={props.addQuantity}></AddItem>
        <p className="item__quantity">{props.quantity}</p>
        <RemoveItem
          id={props.id}
          removeQuantity={props.removeQuantity}
        ></RemoveItem>
      </div>
    </div>
  );
}

export default MenuItem;
