import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";

export default function Root () {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          {/* <Route path="/login" element={<Log />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

// export default Root;
