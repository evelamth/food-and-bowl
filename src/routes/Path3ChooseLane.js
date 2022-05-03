import React from "react";
import { useNavigate } from "react-router";
import "./Path3ChooseLane.css";

function Path3ChooseLane() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/shoes");
  }
  return (
    <div className="lane">
      <h1 className="lane__header">Choose Your Lane.</h1>
      <div className="lane__btnGroup">
        <button id={0} className="lane__specificLane">
          Lane: {1} Free
        </button>
        <button id={1} className="lane__specificLane">
          Lane: {2} Free
        </button>
        <button id={2} className="lane__specificLane">
          Lane: {3} Free
        </button>
        <button id={3} className="lane__specificLane">
          Lane: {4} Free
        </button>
      </div>
      <button className="lane__button" onClick={handleClick}>
        Next
      </button>
    </div>
  );
}

export default Path3ChooseLane;
