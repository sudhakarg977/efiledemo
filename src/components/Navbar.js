import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Modern Profile Icon
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isSign, setIsSign] = useState(false);
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-6 flex items-center justify-between z-50 border border-gray-200 bg-white">
      {/* Logo */}
      <a href="/" className="text-xl font-bold text-white">
        <img src="Color version.svg" alt="Logo" className="h-10" />
      </a>

      {/* Navigation Menu */}
      <ul className="hidden md:flex space-x-8 text-customTeal mx-auto">
        <li>
          <a href="/Homepage" className="hover:text-teal-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            About Us
          </a>
        </li>
        <li className="relative group">
          <a href="/services" className="hover:text-teal-400">
            Services
          </a>
          <ul className="absolute left-0 hidden bg-white shadow-md text-gray-700 group-hover:block w-40">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
              >
                ITR services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
              >
                GST services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
              >
                ROC filing
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="hover:text-teal-400">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-teal-400">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Profile Icon */}
      <div className="cursor-pointer">
        {location.pathname === "/signup" ? (
          // Show Profile Icon when on /signup page
          // <FaUserCircle className="text-white text-3xl" />
          <Link to="/signup">
            <button className="bg-teal-600 text-white px-6 py-4 rounded-lg hover:bg-teal-400 transition-all duration-200 mr-10">
              Sign up
            </button>
          </Link>
        ) : location.pathname === "/services" ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-10">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          // Show Get Started button on other pages
          <Link to="/signup">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-400 transition-all duration-200 mr-10">
              Get Started
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
