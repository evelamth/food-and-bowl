import React from "react";
import { useNavigate } from "react-router";
import "./Path4ChooseShoes.css";

function Path4ChooseShoes() {
  let navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/food");
  }
  return (
    <div className="shoes">
      <h1 className="shoes__header">What's your shoe size?</h1>
      <form className="shoes__form">
        <label>Size Number</label>
        <input type="number"></input>
        <select className="shoes__select">
          <option>Male</option>
          <option>Female</option>
        </select>
        <button className="shoes__button" onClick={handleClick}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Path4ChooseShoes;
