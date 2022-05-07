import React from "react";
import { useNavigate } from "react-router";
import "./Path5ChooseFood.css";

function Path5ChooseFood() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/summary");
  }
  function handleClickFood() {
    navigate("/eat");
  }
  function handleClickBeverages() {
    navigate("/beverages");
  }
  function handleClickDesserts() {
    navigate("/desserts");
  }
  return (
    <div className="food">
      <button className="food__btn" onClick={handleClickFood}>
        Food
      </button>
      <button className="food__btn" onClick={handleClickBeverages}>
        Bevarages
      </button>
      <button className="food__btn" onClick={handleClickDesserts}>
        Desserts
      </button>
      <button className="food__submit" onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
}

export default Path5ChooseFood;
