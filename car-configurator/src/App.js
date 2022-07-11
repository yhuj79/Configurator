import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";

import CClass from "./components/car/CClass";
import Amg from "./components/car/Amg";
import ClaClass from "./components/car/ClaClass";
import SClass from "./components/car/SClass";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />

          {/* Configure */}
          <Route path="/cclass" element={<CClass />} />
          <Route path="/amg" element={<Amg />} />
          <Route path="/claclass" element={<ClaClass />} />
          <Route path="/sclass" element={<SClass />} />
        </Routes>
        <h1 style={{backgroundColor: "#2b2b2b"}}>Test footer</h1>
        <h1 style={{backgroundColor: "#2b2b2b"}}>Test footer</h1>
        <h1 style={{backgroundColor: "#2b2b2b"}}>Test footer</h1>
        <h1 style={{backgroundColor: "#2b2b2b"}}>Test footer</h1>
        <h1 style={{backgroundColor: "#2b2b2b"}}>Test footer</h1>
      </Router>
    </div>
  );
}
export default App;
