import React from "react";
import { Home } from "./Components";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
