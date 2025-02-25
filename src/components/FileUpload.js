import React, { useState, useEffect } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  const fetchUploadedFiles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/uploads");
      setUploadedFiles(response.data);
    } catch (error) {
      console.error("Error fetching files", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("File uploaded successfully");
      fetchUploadedFiles(); // Refresh file list
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">File Upload</h2>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>

      <h3 className="mt-4 text-lg font-semibold">Uploaded Files</h3>
      <ul className="list-disc pl-4">
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            <a
              href={`http://localhost:5000/uploads/${file.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.fileName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
