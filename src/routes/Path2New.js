import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Path2New() {
  const [data, setData] = useState([]);
  const [card, setCard] = useState([
    {
      cardNumber: "1234567899999",
      cardNumberType: "Visa",
    },
  ]);
  let navigate = useNavigate();

  function handleClickLane() {
    navigate("/lane");
  }

  function handleClickTest() {
    console.log(card);
    fetch("http://localhost:8080/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    }).then(() => {
      console.log("new student added");
    });
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
      <button onClick={handleClickLane} />
      <button onClick={handleClickTest}>test</button>
    </div>
  );
}

export default Path2New;
