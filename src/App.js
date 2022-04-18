import React from "react";
import { Link, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  function handleClickExisting() {
    navigate("/existing");
  }

  function handleClickNew() {
    navigate("/new");
  }

  return (
    <div className="App">
      <button onClick={handleClickExisting}>Existing Customer</button>
      <button onClick={handleClickNew}>New Customer</button>
    </div>
  );
}

export default App;
