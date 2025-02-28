import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ServicesDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <li className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="hover:text-teal-400 focus:outline-none flex items-center gap-2"
      >
        Services {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 bg-white shadow-lg text-gray-700 w-[600px] rounded-md transition-all duration-300 ease-in-out transform ${
          isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } origin-top animate-fadeIn p-4`}
      >
        <div className="grid grid-cols-3 gap-6">
          {/* Section 1: Tax & Compliance */}
          <div>
            <h3 className="font-semibold text-teal-600 mb-2">GST filing</h3>
            <ul>
              <li>
                <a
                  href="/signup"
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
            <h3 className="font-semibold text-teal-600 mb-2">ITR Filing</h3>
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
    </li>
  );
};

export default ServicesDropdown;
