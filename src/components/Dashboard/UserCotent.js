import React, { useState } from "react";
import UploadedFilesList from "./UploadedFilesList";

const UserCotent = () => {
  const rows = [
    {
      id: 1,
      name: "Sudhakar",
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
      name: "Suresh",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 7,
      name: "Suman",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 8,
      name: "Rakesh",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 9,
      name: "Sai",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "open",
      Comments: "All documents are uploaded",
    },
    {
      id: 10,
      name: "Vijaya",
      taxservice: "GST filing",
      paymentstatus: "Completed",
      status: "Closed",
      Comments: "All documents are uploaded",
    },
  ];

  const [editedComment, setEditedComment] = useState("");
  const [editedStatus, setEditedStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-1  min-h-screen">
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <tr>
              {[
                "S.No",
                "Name",
                "Tax Service",
                "Payment Status",
                "Status",
                "Comments",
                "Edit",
                "Actions",
              ].map((header, index) => (
                <th key={index} className="py-6 px-5 text-left font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200 transition-all`}
              >
                <td className="py-4 px-6 font-medium">{row.id}</td>
                <td className="py-4 px-6">{row.name}</td>
                <td className="py-4 px-6">{row.taxservice}</td>
                <td className="py-4 px-6 text-green-600 font-semibold">
                  {row.paymentstatus}
                </td>
                <td className="py-4 px-6 flex items-center gap-2">
                  {row.status === "open" && (
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                  {row.status}
                </td>
                <td className="py-4 px-6">
                  {editedStatus ? (
                    <input
                      type="text"
                      value={editedComment}
                      onChange={(e) => setEditedComment(e.target.value)}
                      className="border p-2 rounded w-full"
                    />
                  ) : (
                    row.Comments
                  )}
                </td>
                <td className="py-4 px-6">
                  <button
                    className={`p-2 rounded text-white ${
                      editedStatus ? "bg-green-500" : "bg-blue-500"
                    }`}
                    onClick={() => setEditedStatus(!editedStatus)}
                  >
                    {editedStatus ? "Save" : "Edit"}
                  </button>
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-3">
                    {/* View Icon */}
                    <button
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 4.5c-7 0-10 7.5-10 7.5s3 7.5 10 7.5 10-7.5 10-7.5-3-7.5-10-7.5zm0 12c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5S10.62 14.5 12 14.5s2.5-1.12 2.5-2.5S13.38 9.5 12 9.5z" />
                      </svg>
                    </button>

                    {/* Download Icon */}
                    <button className="p-2 bg-blue-200 rounded-full hover:bg-blue-300 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-700"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-6 2h12v2H6v-2z" />
                      </svg>
                    </button>

                    {/* Verified Icon */}
                    <button className="p-2 bg-green-200 rounded-full hover:bg-green-300 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-700"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 11l3 3L22 4l-1.5-1.5L12 10l-2.5-2.5L9 11zm3-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <nav className="flex gap-2">
          <button className="px-4 py-2 bg-gray-300 rounded-lg cursor-not-allowed">
            «
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            »
          </button>
        </nav>
      </div>

      {/* Uploaded Files Modal */}
      {isOpen && (
        <div className="absolute top-10 left-200  bg-white p-4 shadow-lg rounded-lg w-80">
          <UploadedFilesList />
          {/* Your component that shows the document */}
          <button
            className="mt-2 p-2 bg-red-500 text-white rounded"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}

      <footer className="text-center mt-8 text-gray-500">
        <a href="#" className="text-blue-500">
          CIAI
        </a>{" "}
        <span>2025</span>
      </footer>
    </div>
  );
};

export default UserCotent;
