import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadedFilesList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/upload/upload"
        );
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
      {files.length === 0 ? (
        <p>No files uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 p-2 border rounded"
            >
              <a
                href={`http://localhost:5000/uploads/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UploadedFilesList;
