import React from "react";
import { useNavigate } from "react-router";

function Path2Existing() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/lane");
  }
  return (
    <div>
      <h1>Existing Customer</h1>
      <form>
        <label>Email:</label>
        <input type="text"></input>
      </form>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default Path2Existing;
