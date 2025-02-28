import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFileAlt, FaDownload, FaCheckCircle } from "react-icons/fa";

const UserCotent = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [approverComments, setApproverComments] = useState({});

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get(
          "https://efiledemo-3.onrender.com/api/upload/getuploads"
        );
        setUploads(response.data);
      } catch (error) {
        console.error("Error fetching uploads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUploads();
  }, []);

  const handleCommentChange = (id, comment) => {
    setApproverComments({ ...approverComments, [id]: comment });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : uploads.length === 0 ? (
        <p className="text-red-500">No uploads found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
              <tr>
                {[
                  "S.No",
                  "Name",
                  "Tax Service",
                  "Payment Status",
                  "Status",
                  "Approver Comment",
                  "Actions",
                ].map((header, index) => (
                  <th key={index} className="py-3 px-5 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {uploads.map((upload, index) => (
                <tr
                  key={upload._id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-3 px-5">{index + 1}</td>
                  <td className="py-3 px-5">{upload.name}</td>
                  <td className="py-3 px-5">{upload.taxservice}</td>
                  <td className="py-3 px-5">{upload.paymentstatus}</td>
                  <td className="py-3 px-5">{upload.status}</td>
                  <td className="py-3 px-5">
                    <input
                      type="text"
                      className="border p-2 rounded w-full"
                      placeholder="Add comment"
                      value={approverComments[upload._id] || ""}
                      onChange={(e) =>
                        handleCommentChange(upload._id, e.target.value)
                      }
                    />
                  </td>
                  <td className="py-3 px-5 flex space-x-3">
                    {/* View File Icon */}
                    <a
                      href={`https://efiledemo-3.onrender.com/${upload.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaFileAlt size={20} />
                    </a>

                    {/* Download File Button */}
                    <a
                      href={`https://efiledemo-3.onrender.com/${upload.filePath}`}
                      download
                      className="text-green-600 hover:text-green-800"
                    >
                      <FaDownload size={20} />
                    </a>

                    {/* Verify Button */}
                    <button className="text-gray-600 hover:text-gray-800">
                      <FaCheckCircle size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserCotent;
