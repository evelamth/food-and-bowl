import React, { useState } from "react";
import { useNavigate } from "react-router";
import Menu from "../components/Menu";
import "./Path6Desserts.css";

function DessertsChoice() {
  const [desserts, setDesserts] = useState([
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
    localStorage.setItem("dessertsData", JSON.stringify(desserts));
    navigate("/food");
  }

  function handleClickDone() {
    localStorage.setItem("dessertsData", JSON.stringify(desserts));
    navigate("/summary");
  }

  function handleAddQuantity(id) {
    setDesserts(
      desserts.map((specificFood) => {
        if (specificFood.id === id) {
          specificFood.quantity = specificFood.quantity + 1;
        }
        return specificFood;
      })
    );
  }

  function handleRemoveQuantity(id) {
    setDesserts(
      desserts.map((specificFood) => {
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
    <div className="desserts">
      <h1 className="desserts__header">Desserts Menu</h1>
      <div>
        <Menu
          removeQuantity={handleRemoveQuantity}
          addQuantity={handleAddQuantity}
          items={desserts}
        />
      </div>
      <button className="desserts__button" onClick={handleClickContinue}>
        Continue Ordering
      </button>
      <button className="desserts__button" onClick={handleClickDone}>
        Done
      </button>
    </div>
  );
}

export default DessertsChoice;
