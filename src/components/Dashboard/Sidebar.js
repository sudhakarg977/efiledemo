import { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaDotCircle,
  FaClock,
  FaCheckCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ setActiveTab }) => {
  return (
    <aside className="w-64 bg-gray-900 text-white fixed h-full">
      {/* Logo Section */}
      <div className="p-5 text-center border-b border-gray-700 flex items-center justify-center">
        <img src="/Color version.svg" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          {[
            { name: "Dashboard", icon: <FaTachometerAlt />, id: "dashboard" },
            { name: "Users List", icon: <FaUsers />, id: "users" },
            { name: "Status", icon: <FaDotCircle />, id: "status" },
            { name: "Pending", icon: <FaClock />, id: "pending" },
            { name: "Successful", icon: <FaCheckCircle />, id: "successful" },
          ].map((item) => (
            <li
              key={item.id}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition duration-300 ${
                setActiveTab === item.id
                  ? item.id === "dashboard"
                    ? "bg-blue-600" // Default background color for Dashboard
                    : "bg-teal-600"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon} <span className="ml-3">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center w-full p-2 hover:bg-gray-700 rounded-lg">
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
