import React from "react";
import { useNavigate } from "react-router";
import "./Path2Existing.css";

function Path2Existing() {
  let navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/lane");
  }
  return (
    <div className="existing">
      <h1 className="existing__header">What's your email?</h1>
      <form className="existing__form">
        <label className="existing__label">EMAIL</label>
        <input className="existing__input" type="email"></input>
        <button
          className="existing__button"
          placeholder="username@mail.com"
          onClick={handleClick}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Path2Existing;
