import { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaDotCircle,
  FaClock,
  FaCheckCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-5 text-center border-b border-gray-700 flex items-center justify-center">
        <img
          src="/Color version.svg"
          alt="efiletax Logo"
          className="h-10 w-auto"
        />
        <h1 className="text-lg font-bold ml-2"></h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          <li
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
            onClick={() => setActiveSection("dashboard")}
          >
            <FaTachometerAlt className="mr-3" />
            Dashboard
          </li>
          <li
            className="flex items-center p-2 bg-teal-600 hover:bg-gray-700 rounded-lg cursor-pointer"
            onClick={() => setActiveSection("users")}
          >
            <FaUsers className="mr-3" />
            Users List
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
            onClick={() => setActiveSection("status")}
          >
            <FaDotCircle className="mr-3" />
            Status
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
            onClick={() => setActiveSection("pending")}
          >
            <FaClock className="mr-3" />
            Pending
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
            onClick={() => setActiveSection("successful")}
          >
            <FaCheckCircle className="mr-3" />
            Successful
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center w-full p-2 hover:bg-gray-700 rounded-lg">
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
