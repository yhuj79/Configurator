import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import styled from "styled-components";
import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
