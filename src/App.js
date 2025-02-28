import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactPage from "./components/ContactPage";
import SignUp from "./components/SignUp";
import Services from "./components/Services";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import UserCotent from "./components/Dashboard/UserCotent";
import { useState } from "react";
import Sidebar from "./components/Dashboard/Sidebar";
import Navbar from "./components/Dashboard/Navbar";
import ContactUs from "./components/Dashboard/ContactUs";
import { ToastContainer } from "react-toastify";

function AdminLayout() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex">
      {/* Sidebar - Only Visible in Admin Pages */}
      <Sidebar setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        {/* Navbar - Only Visible in Admin Pages */}
        <Navbar />

        {/* Main Content - Changes Based on Active Tab */}
        <div className="p-4">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "users" && <UserCotent />}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />} />

          {/* 404 Page (Optional) */}
          {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
