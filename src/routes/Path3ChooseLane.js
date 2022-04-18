import React from "react";
import { useNavigate } from "react-router";

function Path3ChooseLane() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/shoes");
  }
  return (
    <div className="lane">
      <h1>Choose Lane</h1>
      <div className="lane__btnGroup">
        <button id={0} className="lane__specificLane">
          Free
        </button>
        <button id={1} className="lane__specificLane">
          Free
        </button>
        <button id={2} className="lane__specificLane">
          Free
        </button>
        <button id={3} className="lane__specificLane">
          Free
        </button>
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default Path3ChooseLane;
