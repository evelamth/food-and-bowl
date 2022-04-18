import React from "react";
import { useNavigate } from "react-router";
import DropdownFood from "../components/DropdownFood";

function Path5ChooseFood() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/summary");
  }
  return (
    <div>
      <h1>ChooseFood</h1>
      <DropdownFood></DropdownFood>
      <DropdownFood></DropdownFood>
      <DropdownFood></DropdownFood>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default Path5ChooseFood;
