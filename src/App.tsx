
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SAPUI5Components from "./pages/SAPUI5Components";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sapui5" element={<SAPUI5Components />} />
      </Routes>
    </Router>
  );
}

export default App;
