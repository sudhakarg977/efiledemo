import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Modern Profile Icon

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-dark py-4 px-6 flex items-center shadow-md">
      {/* Logo (Left) */}
      <img src="Color version.svg" alt="Logo" className="h-10 w-auto" />

      {/* Nav Links & Profile Section (Right) */}
      <div className="flex items-center ml-auto space-x-8">
        <a
          href="#home"
          className="hover:text-teal-500 transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#services"
          className="hover:text-teal-500 transition-colors duration-200"
        >
          Services
        </a>
        <a
          href="#about"
          className="hover:text-teal-500 transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-teal-500 transition-colors duration-200"
        >
          Contact
        </a>

        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center hover:text-teal-500 focus:outline-none"
          >
            <UserCircleIcon className="w-10 h-10 text-gray-700 hover:text-teal-500 transition-all duration-200" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">
              <a
                href="#view-profile"
                className="block px-4 py-2 hover:bg-teal-500"
              >
                View Profile
              </a>
              <a href="#settings" className="block px-4 py-2 hover:bg-teal-500">
                Settings
              </a>
              <a
                href="#logout"
                className="block px-4 py-2 text-red-500 hover:bg-teal-500"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
