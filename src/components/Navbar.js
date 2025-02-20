import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Modern Profile Icon

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-dark py-4 px-6 flex items-center justify-between shadow-md">
      {/* Left Section - Logo */}
      <div className="flex items-center">
        <img src="Color version.svg" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Center Section - Filing for ITR */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <span className="text-lg font-medium">Filing for: ITR</span>
      </div>

      {/* Right Section - Navigation Links & Profile */}
      <div className="flex items-center space-x-6">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
