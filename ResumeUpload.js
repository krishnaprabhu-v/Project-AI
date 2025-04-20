import React, { useState } from "react";
import axios from "axios";

const ResumeUpload = () => {
  const [keywords, setKeywords] = useState(null);

  const handleUpload = async (event) => {
    event.preventDefault();
    const file = event.target.resume.files[0];

    if (!file) {
      alert("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await axios.post("http://localhost:5000/upload_resume", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setKeywords(response.data.keywords);
    } catch (error) {
      console.error("Error uploading resume:", error);
    }
  };

  return (
    <div>
      <h2>Upload Your Resume</h2>
      <form onSubmit={handleUpload}>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" />
        <button type="submit">Upload</button>
      </form>
      {keywords && <div>Extracted Keywords: {keywords.join(", ")}</div>}
    </div>
  );
};

export default ResumeUpload;
