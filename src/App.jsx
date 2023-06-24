import "./App.css";
// import AppRoute from "./pages/Route";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Login from "./common/login/Login";
import Contactroute from "./common/contactroute";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactroute" element={<Contactroute />} />
        </Routes>
    </div>
  );
}

export default App;
