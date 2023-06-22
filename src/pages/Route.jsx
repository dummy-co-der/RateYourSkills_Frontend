import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "../common/login/Login";

export default function Root() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
