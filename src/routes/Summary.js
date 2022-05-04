import React from "react";
import { useNavigate } from "react-router";

function Summary() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <h1>Summary</h1>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Summary;
