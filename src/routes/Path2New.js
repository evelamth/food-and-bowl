import React from "react";
import { useNavigate } from "react-router";

function Path2New() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/lane");
  }

  return (
    <div className="new">
      <form className="new__form">
        <label>First Name:</label>
        <input type="text"></input>
        <label>Last Name:</label>
        <input type="text"></input>
        <label>Phone Number:</label>
        <input type="tel"></input>
        <label>Email:</label>
        <input type="email"></input>
        <label>Card Number:</label>
        <input type="text"></input>
      </form>
      <button onClick={handleClick} />
    </div>
  );
}

export default Path2New;
