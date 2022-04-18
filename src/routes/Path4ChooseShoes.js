import React from "react";
import { useNavigate } from "react-router";

function Path4ChooseShoes() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/food");
  }
  return (
    <div>
      <h1>Choose Shoes</h1>
      <label>Size Number</label>
      <input type="number"></input>
      <select>
        <option>Male</option>
        <option>Female</option>
      </select>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default Path4ChooseShoes;
