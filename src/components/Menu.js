import React, { useState } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu(props) {
  return (
    <div className="menu">
      <ul className="menu__list">
        {props.items.map((foodData) => {
          return (
            <li className="menu__list-item">
              <MenuItem
                id={foodData.id}
                name={foodData.name}
                price={foodData.price}
                quantity={foodData.quantity}
                addQuantity={props.addQuantity}
                removeQuantity={props.removeQuantity}
              ></MenuItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
