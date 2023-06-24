import "./App.css";
// import AppRoute from "./pages/Route";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Login from "./common/login/Login";
import Contactroute from "./common/contactroute";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactroute" element={<Contactroute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
