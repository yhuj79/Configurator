import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // font
import Header from "./components/commons/Header";
// import Footer from "./components/commons/Footer";
import Home from "./pages/Home";
import Amg from "./pages/Amg";
import SClass from "./pages/SClass";
import ClaClass from "./pages/ClaClass";
import CClass from "./pages/CClass";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Configure */}
          <Route path="/amg" element={<Amg />} />
          <Route path="/sclass" element={<SClass />} />
          <Route path="/claclass" element={<ClaClass />} />
          <Route path="/cclass" element={<CClass />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
export default App;
