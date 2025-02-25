import "./App.css";
import Content from "./components/Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Slidebar from "./components/Slidebar";
import ContactPage from "./components/ContactPage";
import SignUp from "./components/SignUp";
import Services from "./components/Services";
import { Home } from "lucide-react";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/admin" element={<Content />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
