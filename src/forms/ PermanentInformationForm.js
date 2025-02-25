import React, { useState } from "react";
import axios from "axios";

const PermanentInformationForm = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile)); // Preview the file locally
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFileUrl(response.data.fileUrl); // Store the uploaded file URL from the server
      alert("File uploaded successfully");
    } catch (error) {
      console.error("File upload error:", error);
      alert("File upload failed");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="file"
        accept=".pdf,.jpg,.png"
        onChange={handleFileChange}
        required
        className="border p-2 rounded w-full"
      />

      {fileUrl && (
        <div className="mt-2">
          <p className="text-gray-700">File Preview:</p>
          <img
            src={fileUrl}
            alt="Uploaded Preview"
            className="mt-2 w-32 h-32 object-cover border rounded"
          />
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </form>
  );
};

export default PermanentInformationForm;
