import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  let navigate = useNavigate();

  function handleClickExisting() {
    navigate("/existing");
  }

  function handleClickNew() {
    navigate("/new");
  }

  return (
    <div className="app">
      <button className="app__button" onClick={handleClickExisting}>
        Existing Customer
      </button>
      <button className="app__button" onClick={handleClickNew}>
        New Customer
      </button>
    </div>
  );
}

export default App;
