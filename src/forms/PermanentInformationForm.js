import React, { useState } from "react";

const PermanentInformationForm = () => {
  const userData = JSON.parse(localStorage.getItem("user")) || {};
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(""); // ✅ Added state for file URL
  const [formData, setFormData] = useState({
    id: parseInt(userData._id, 10),
    name: userData.fullName || "",
    taxservice: "GST filing",
    paymentstatus: "Incompleted",
    status: "open",
    comments: "",
  });

  const handleChange = (e) => {
    ``;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async (formDataToSend) => {
    try {
      const response = await fetch(
        "https://efiledemo-3.onrender.com/api/upload/upload",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error uploading file:", error);
      return { error: "File upload failed!" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file to upload!");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("file", file);

    const response = await uploadFile(formDataToSend);

    if (response.error) {
      alert(response.error);
    } else {
      alert("File uploaded successfully!");
      setFileUrl(response.filePath); // ✅ Set the uploaded file URL
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
