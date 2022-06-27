import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";

import CClass from "./configure/CClass";
// import Amg from "./configure/Amg";
// import ClaClass from "./configure/ClaClass";
// import SClass from "./configure/SClass";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />

          {/* Configure */}
          <Route path="/cclass" element={<CClass />} />
          {/* <Route path="/amg" element={<Amg />} />
          <Route path="/claclass" element={<ClaClass />} />
          <Route path="/sclass" element={<SClass />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
