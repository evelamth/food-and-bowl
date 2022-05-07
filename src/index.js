import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Path2New from "./routes/Path2New";
import Path2Existing from "./routes/Path2Existing";
import Path3ChooseLane from "./routes/Path3ChooseLane";
import Path4ChooseShoes from "./routes/Path4ChooseShoes";
import Path5ChooseFood from "./routes/Path5ChooseFood";
import FoodChoice from "./routes/Path6Food";
import BeverageChoice from "./routes/Path6Bevarages";
import DessertsChoice from "./routes/Path7Desserts";
import Summary from "./routes/Summary";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<Path2New />} />
        <Route path="/existing" element={<Path2Existing />} />
        <Route path="/lane" element={<Path3ChooseLane />} />
        <Route path="/shoes" element={<Path4ChooseShoes />} />
        <Route path="/food" element={<Path5ChooseFood />} />
        <Route path="/eat" element={<FoodChoice />} />
        <Route path="/beverages" element={<BeverageChoice />} />
        <Route path="/desserts" element={<DessertsChoice />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
