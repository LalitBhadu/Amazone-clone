import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Return from "./components/Return";
import Prime from "./components/Prime";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/return" element={<Return />} />
          <Route path="/prime" element={<Prime />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
