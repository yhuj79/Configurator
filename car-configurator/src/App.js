import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";

import CClass from "./components/car/CClass";
import Amg from "./components/car/Amg";
import ClaClass from "./components/car/ClaClass";
import SClass from "./components/car/SClass";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Configure */}
          <Route path="/cclass" element={<CClass />} />
          <Route path="/amg" element={<Amg />} />
          <Route path="/claclass" element={<ClaClass />} />
          <Route path="/sclass" element={<SClass />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
