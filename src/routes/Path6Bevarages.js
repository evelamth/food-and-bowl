import React, { useState } from "react";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import "./Path6Beverage.css";

function BeverageChoice() {
  const [beverages, setBeverages] = useState([
    {
      id: 1,
      name: "Cola",
      price: 5.99,
      quantity: 0,
    },
    {
      id: 2,
      name: "Coktail",
      price: 6.99,
      quantity: 0,
    },
    {
      id: 3,
      name: "Beer",
      price: 57.99,
      quantity: 0,
    },
  ]);
  let navigate = useNavigate();

  function handleClickContinue() {
    localStorage.setItem("beveragesData", JSON.stringify(beverages));
    navigate("/food");
  }

  function handleClickDone() {
    localStorage.setItem("bevergesData", JSON.stringify(beverages));
    navigate("/summary");
  }

  function handleAddQuantity(id) {
    setBeverages(
      beverages.map((specificFood) => {
        if (specificFood.id === id) {
          specificFood.quantity = specificFood.quantity + 1;
        }
        return specificFood;
      })
    );
  }

  function handleRemoveQuantity(id) {
    setBeverages(
      beverages.map((specificFood) => {
        if (specificFood.id === id) {
          if (specificFood.quantity === 0) {
            specificFood.quantity = 0;
          } else {
            specificFood.quantity = specificFood.quantity - 1;
          }
        }
        return specificFood;
      })
    );
  }

  return (
    <div className="beverage">
      <h1 className="beverage__header">Beverage Menu</h1>
      <div>
        <Menu
          removeQuantity={handleRemoveQuantity}
          addQuantity={handleAddQuantity}
          items={beverages}
        />
      </div>
      <button className="beverage__button" onClick={handleClickContinue}>
        Continue Ordering
      </button>
      <button className="beverage__button" onClick={handleClickDone}>
        Done
      </button>
    </div>
  );
}

export default BeverageChoice;
