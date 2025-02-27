import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaBell } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-6 flex items-center justify-between z-50 border border-gray-200 bg-white shadow-md">
      {/* Logo */}
      <a href="/" className="text-xl font-bold text-gray-800">
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

        {/* Clickable Services Dropdown */}
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-teal-400 focus:outline-none"
          >
            Services ▼
          </button>

          {/* Dropdown Menu with 3 Sections (Grid Layout) */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-black shadow-lg text-gray-700 w-[600px] rounded-md transition-all duration-300 ease-in-out transform origin-top scale-100 opacity-100 animate-fadeIn p-4">
              <div className="grid grid-cols-3 gap-6">
                {/* Section 1: Tax & Compliance */}
                <div>
                  <h3 className="font-semibold text-teal-600 mb-2">
                    GST filing
                  </h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        ITR Filing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        GST Registration
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        TDS Filing
                      </a>
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
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Company Registration
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Trademark Filing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        ROC Compliance
                      </a>
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
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Auditing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Bookkeeping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
                      >
                        Financial Planning
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
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

      {/* Profile Section */}
      <div className="cursor-pointer">
        {location.pathname === "/services" ? (
          <div className="relative flex items-center">
            {/* Notification Icon with Badge */}
            <div className="relative mr-6">
              <FaBell className="text-dark-600 text-3xl cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                7
              </span>
            </div>

            {/* User Profile Image */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
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
