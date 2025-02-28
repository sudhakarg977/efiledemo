import { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaBell,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutDropdownOpen, setIsLogoutDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Parse stored user data
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser)); // Parse JSON user data
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user from storage
    setUser(null); // Update state to reflect UI change
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-6 flex items-center justify-between z-50 border border-gray-200 bg-white shadow-md">
      {/* Logo */}
      <a href="/" className="text-xl font-bold text-gray-800">
        <img src="Color version.svg" alt="Logo" className="h-10" />
      </a>

      {/* Menu */}
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
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-teal-400 focus:outline-none flex items-center gap-2"
          >
            Services {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg text-gray-700 w-[600px] rounded-md transition-all duration-300 ease-in-out transform scale-100 opacity-100 origin-top animate-fadeIn p-4">
              <div className="grid grid-cols-3 gap-6">
                {/* Section 1: Tax & Compliance */}
                <div>
                  <h3 className="font-semibold text-teal-600 mb-2">
                    GST filing
                  </h3>
                  <ul>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        ITR Filing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        GST Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        TDS Filing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Section 2: Legal & Corporate */}
                <div>
                  <h3 className="font-semibold text-teal-600 mb-2">
                    ITR Filing
                  </h3>
                  <ul>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Company Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Trademark Filing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        ROC Compliance
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Section 3: Accounting & Finance */}
                <div>
                  <h3 className="font-semibold text-teal-600 mb-2">
                    GST Registration
                  </h3>
                  <ul>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Auditing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Bookkeeping
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={user ? "/services" : "/signup"}
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Financial Planning
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        <li>
          <a href="/contact" className="hover:text-teal-400">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Profile Section */}
      <div className="cursor-pointer">
        {user ? (
          <div className="relative flex items-center">
            {/* Notifications */}
            <div className="relative mr-6">
              <FaBell className="text-dark-600 text-3xl cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                7
              </span>
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setIsLogoutDropdownOpen(!isLogoutDropdownOpen)}
                className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300 transition-all duration-200"
              >
                <FaUserCircle className="text-teal-600 text-3xl" />
                <span className="text-gray-800">{user.fullName || "User"}</span>
              </button>

              {/* Logout Dropdown */}
              {isLogoutDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-md w-40 rounded-md">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
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
