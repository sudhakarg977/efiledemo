import "./App.css";
import Content from "./components/Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Slidebar from "./components/Slidebar";
import ContactPage from "./components/ContactPage";
import SignUp from "./components/SignUp";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <div className="dashboard">
        {/* <Slidebar /> */}
        {/* <div className="dashboard-content"> */}
        <Routes>
          {/* <Route path="/" element={<Content />} />
            <Route path="/contactpage" element={<ContactPage />} /> */}
          <Route path="/login" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
