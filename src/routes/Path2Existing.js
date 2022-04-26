import React from "react";
import { useNavigate } from "react-router";
import "./Path2Existing.css";

function Path2Existing() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/lane");
  }
  return (
    <div className="existing">
      <form classNae="existing__form">
        <label className="existing__label">Email:</label>
        <input className="existing__input" type="text"></input>
      </form>
      <button className="existing__button" onClick={handleClick}>
        Next
      </button>
    </div>
  );
}

export default Path2Existing;
