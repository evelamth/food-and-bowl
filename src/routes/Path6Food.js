import React, { useState } from "react";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import "./Path6Food.css";

function FoodChoice() {
  const [food, setFood] = useState([
    {
      id: 1,
      name: "Burger",
      price: 5.99,
      quantity: 0,
    },
    {
      id: 2,
      name: "Pizza",
      price: 6.99,
      quantity: 0,
    },
    {
      id: 3,
      name: "Sushi",
      price: 57.99,
      quantity: 0,
    },
  ]);

  let navigate = useNavigate();

  function handleClickContinue() {
    localStorage.setItem("foodData", JSON.stringify(food));
    navigate("/food");
  }

  function handleClickDone() {
    localStorage.setItem("foodData", JSON.stringify(food));
    navigate("/summary");
  }

  function handleAddQuantity(id) {
    setFood(
      food.map((specificFood) => {
        if (specificFood.id === id) {
          specificFood.quantity = specificFood.quantity + 1;
        }
        return specificFood;
      })
    );
  }

  function handleRemoveQuantity(id) {
    setFood(
      food.map((specificFood) => {
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
    <div className="food">
      <h1 className="food__header">Food Menu</h1>
      <Menu
        items={food}
        removeQuantity={handleRemoveQuantity}
        addQuantity={handleAddQuantity}
      />
      <button className="food__button" onClick={handleClickContinue}>
        Continue Ordering
      </button>
      <button className="food__button" onClick={handleClickDone}>
        Done
      </button>
    </div>
  );
}

export default FoodChoice;
