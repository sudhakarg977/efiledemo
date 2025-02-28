import { useState } from "react";
import { FaBell, FaEnvelope, FaCog, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 shadow-md">
      {/* Breadcrumb */}
      <div className="text-gray-700 dark:text-gray-300">
        <span className="text-sm">Home / </span>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          Dashboard
        </span>
      </div>

      {/* Right Side Icons & Profile */}
      <div className="flex items-center space-x-6 relative pr-4">
        <FaBell className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
        <FaEnvelope className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
        <FaCog className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white" />

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="focus:outline-none"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500 cursor-pointer hover:text-yellow-600" />
            ) : (
              <FaMoon className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
            )}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md py-2">
              <button
                onClick={toggleDarkMode}
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 w-full"
              >
                {darkMode ? (
                  <FaSun className="mr-2 text-yellow-500" />
                ) : (
                  <FaMoon className="mr-2 text-gray-600 dark:text-gray-300" />
                )}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          )}
        </div>

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

        {/* Profile */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
