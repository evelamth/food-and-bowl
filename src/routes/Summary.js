import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Summary.css";

const laneData = JSON.parse(localStorage.getItem("laneData"));
const foodData = JSON.parse(localStorage.getItem("foodData"));
const beveragesData = JSON.parse(localStorage.getItem("beveragesData"));
const dessertsData = JSON.parse(localStorage.getItem("dessertsData"));

function Summary() {
  const [food, setFood] = useState(foodData.map((elem) => {}));
  const [beverages, setBeverages] = useState(beveragesData.map((elem) => {}));
  const [desserts, setDesserts] = useState(dessertsData.map((elem) => {}));
  const [lane, setLane] = useState(laneData);
  const [laneMessage, setLaneMessage] = useState(" ");
  console.log(lane, food, beverages, desserts);

  let navigate = useNavigate();

  useEffect(() => {
    laneChecker();
  }, []);

  function handleClick() {
    localStorage.clear();
    navigate("/");
  }

  function laneChecker() {
    if (lane.lane1 === "clicked") {
      setLaneMessage("#1");
    } else if (lane.lane2 === "clicked") {
      setLaneMessage("#2");
    } else if (lane.lane3 === "clicked") {
      setLaneMessage("#3");
    } else if (lane.lane4 === "clicked") {
      setLaneMessage("#4");
    }
  }

  return (
    <div className="summary">
      <h1 className="summary__header">Summary</h1>
      <div>
        <p>Lane picked: {laneMessage}</p>
      </div>
      <div>
        <p>{food}</p>
        <p>{beverages}</p>
        <p>{desserts}</p>
      </div>
      <button className="summary__button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default Summary;
