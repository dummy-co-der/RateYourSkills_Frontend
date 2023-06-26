import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "../common/login/Login";

export default function AppRoute() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
