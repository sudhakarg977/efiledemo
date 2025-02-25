import React, { use } from "react";
import { useState, useEffect } from "react";
import { BiNotification, BiSearch, BiBell, BiUser } from "react-icons/bi";

import UploadedFilesList from "./UploadedFilesList";

const ContentHeader = () => {
  const rows = [
    {
      id: 1,
      name: "Ramesh",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 2,
      name: "Raju",
      taxservice: "ITR filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 3,
      name: "Karan",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 4,
      name: "Deepika",
      taxservice: "ITR filing",
      paymentstatus: "Completed",
      status: "closed",
      Comments: "All documents are uploaded",
    },
    {
      id: 5,
      name: "Suhaas",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 6,
      name: "Jane",
      taxservice: "ITR filing",
      paymentstatus: "Completed",
      status: "closed",
      Comments: "All documents are uploaded",
    },
    {
      id: 7,
      name: "Doe",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 8,
      name: "Jane",
      taxservice: "ITR filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 9,
      name: "Doe",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 10,
      name: "Jane",
      taxservice: "ITR filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [editedComment, setEditedComment] = useState(rows.Comments);
  const [editedStatus, setEditedStatus] = useState("false");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      <div className=" sticky top-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
        {/* Dashboard Title */}
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

        {/* Header Actions */}
        <div className="flex items-center gap-6">
          {/* Search Box */}
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent outline-none text-gray-700 placeholder-gray-500"
            />
            <BiSearch className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>

          {/* Notification Icon */}
          <div className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
            <BiBell className="w-6 h-6 text-gray-700" />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Profile Icon with Dropdown */}
          <div className="relative">
            <div
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <BiUser className="w-6 h-6 text-gray-700" />
            </div>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                <ul className="text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-t"
                    onClick={() => alert("Logged out")}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
          <table className=" w-full border-0 border-solid">
            <thead className="bg-gray-400">
              <tr>
                <th className="border p-5 text-left">S.No</th>
                <th className="border p-5 text-left">Name</th>
                <th className="border p-5 text-left">Tax service</th>
                <th className="border p-5 text-left">Payment status</th>
                <th className="border p-5 text-left">status</th>
                <th className="border p-5 text-left">Comments</th>
                <th className="border p-5 text-left">Action</th>
                <th className="border p-5 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition`}
                >
                  <td className="p-5">{row.id}</td>
                  <td className="p-5">{row.name}</td>
                  <td className="p-5">{row.taxservice}</td>
                  <td className="p-5">{row.paymentstatus}</td>

                  <td className="p-6 flex items-center gap-2">
                    {row.status === "open" && (
                      <span className=" w-2 h-2 bg-red-400 rounded-full blink"></span>
                    )}{" "}
                    {row.status}
                  </td>

                  <td className="p-5">
                    {editedStatus ? (
                      <input
                        type="text"
                        value={editedComment}
                        onChange={(e) => setEditedComment(e.target.value)}
                        className="border p-1 rounded"
                      />
                    ) : (
                      editedComment
                    )}
                  </td>
                  <td className="p-5">
                    {" "}
                    {editedStatus ? (
                      <button
                        className="p-2 bg-green-500 text-white rounded"
                        onClick={() => setEditedStatus(false)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="p-2 bg-blue-500 text-white rounded"
                        onClick={() => setEditedStatus(true)}
                      >
                        Edit
                      </button>
                    )}
                  </td>

                  <td className="p-5">
                    <div className="flex gap-2 relative">
                      <button
                        className="p-2 rounded hover:bg-gray-100 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M572.52,241.4C518.59,135.3,410.29,64,288,64S57.41,135.3,3.48,241.4a32,32,0,0,0,0,29.2C57.41,376.7,165.71,448,288,448s230.59-71.3,284.52-177.4A32,32,0,0,0,572.52,241.4ZM288,400c-88.22,0-167.41-51.3-211.08-128C120.59,195.3,199.78,144,288,144s167.41,51.3,211.08,128C455.41,348.7,376.22,400,288,400ZM288,176a96,96,0,1,0,96,96A96.11,96.11,0,0,0,288,176ZM288,320a48,48,0,1,1,48-48A48.05,48.05,0,0,1,288,320Z"
                          />
                        </svg>
                      </button>

                      <button className="p-2 rounded hover:bg-green-100 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M432,64H80A48,48,0,0,0,32,112v96a48,48,0,0,0,48,48h32V128H416V256h32a48,48,0,0,0,48-48V112A48,48,0,0,0,432,64ZM432,256H80a80,80,0,0,0-80,80v64H64V432a16,16,0,0,0,16,16H432a16,16,0,0,0,16-16V400h64V336A80,80,0,0,0,432,256Zm-64,96H144v64H368Zm16-144a16,16,0,1,1-16-16A16,16,0,0,1,384,208Z"
                          />
                        </svg>
                      </button>

                      <button className="p-2 rounded hover:bg-blue-100 text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M504.5,256a248,248,0,1,1-496,0,248,248,0,1,1,496,0ZM226.8,377.2,408,196.8l-28.2-28.2-153,153-70.8-70.8-28.2,28.2Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <nav aria-label="Page navigation">
          <ul className="flex list-none gap-2">
            {/* Previous Button - Disabled */}
            <li className="cursor-not-allowed opacity-50">
              <a
                className="px-3 py-2 border border-gray-300 rounded bg-gray-200 text-gray-500"
                aria-disabled="true"
                tabIndex={-1}
                aria-label="Previous"
              >
                <span aria-hidden="true">«</span>
              </a>
            </li>

            {/* Next Button */}
            <li>
              <a
                className="px-3 py-2 border border-gray-300 rounded hover:bg-blue-500 hover:text-white transition"
                aria-label="Next"
              >
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* //uploaded files */}
      {isOpen && (
        <div className="absolute top-10 left-200  bg-white p-4 shadow-lg rounded-lg w-80">
          <UploadedFilesList /> {/* Your component that shows the document */}
          <button
            className="mt-2 p-2 bg-red-500 text-white rounded"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
      <div className="p-6">
        <div>
          <a href="#" className="">
            CIAI
          </a>
          <span className="ms-1">2025</span>
        </div>
      </div>
    </>
  );
};

export default ContentHeader;
