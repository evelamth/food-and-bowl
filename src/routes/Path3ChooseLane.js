import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Path3ChooseLane.css";

function Path3ChooseLane() {
  const [clickedLane, setClickedLane] = useState({
    lane1: "unclicked",
    lane2: "unclicked",
    lane3: "unclicked",
    lane4: "unclicked",
  });
  let navigate = useNavigate();

  function toggleLaneClicked(id) {
    if (id === 1) {
      setClickedLane({
        lane1: "clicked",
        lane2: "unclicked",
        lane3: "unclicked",
        lane4: "unclicked",
      });
    } else if (id === 2) {
      setClickedLane({
        lane1: "unclicked",
        lane2: "clicked",
        lane3: "unclicked",
        lane4: "unclicked",
      });
    } else if (id === 3) {
      setClickedLane({
        lane1: "unclicked",
        lane2: "unclicked",
        lane3: "clicked",
        lane4: "unclicked",
      });
    } else if (id === 4) {
      setClickedLane({
        lane1: "unclicked",
        lane2: "unclicked",
        lane3: "unclicked",
        lane4: "clicked",
      });
    }
  }

  function handleClick(e) {
    e.preventDefault();
    localStorage.setItem("laneData", JSON.stringify(clickedLane));
    navigate("/shoes");
  }
  return (
    <div className="lane">
      <h1 className="lane__header">Choose Your Lane.</h1>
      <div className="lane__btnGroup">
        <button
          id={0}
          onClick={() => {
            toggleLaneClicked(1);
          }}
          className={`lane__${clickedLane.lane1}`}
        >
          Lane: {1} Free
        </button>
        <button
          id={1}
          onClick={() => {
            toggleLaneClicked(2);
          }}
          className={`lane__${clickedLane.lane2}`}
        >
          Lane: {2} Free
        </button>
        <button
          id={2}
          onClick={() => {
            toggleLaneClicked(3);
          }}
          className={`lane__${clickedLane.lane3}`}
        >
          Lane: {3} Free
        </button>
        <button
          id={3}
          onClick={() => {
            toggleLaneClicked(4);
          }}
          className={`lane__${clickedLane.lane4}`}
        >
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
