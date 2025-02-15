import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import axios from "axios";
import { Link } from "react-router-dom";
const CreateJob = () => {
  const [content, setContent] = useState("");
const id = 1;
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Save content to local storage whenever content changes
  const handleContentChange = (newContent) => {
    setContent(newContent);
    localStorage.setItem("editorContent", newContent);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/job/addPost", { content });
      alert("Post saved!");
      setContent("");
      // Optionally clear local storage after saving
      localStorage.removeItem("editorContent");
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="editor-container mx-auto p-4">
      <form onSubmit={handleSave}>
      <ReactQuill
        
        value={content}
        onChange={handleContentChange}
        modules={{
          toolbar: [
            ["bold", "italic", "underline"], // Basic formatting options
            [{ list: "ordered" }, { list: "bullet" }], // List formatting
            [{ header: "1" }, { header: "2" }, { header: "3" }, { header: "4" }, { header: "5" }, { header: "6" }], // Header options
            ["link"], // Link insertion
            ["undo", "redo"], // Undo and redo functionality
          ],
        }}
        formats={[
          "bold",
          "italic",
          "underline",
          "list",
          "bullet",
          "header",
          "link",
          "undo",
          "redo",
        ]}
        className="custom-quill mb-4"
        />

      {/* Save Button */}
      <button className="save-button px-4 py-2 bg-green-500 text-white rounded-md" type="submit">
        Save Post
      </button>
        </form>

      {/* Example Link */}
      <Link to={`/apply/${id}`} className="mt-4 block text-center bg-black text-white px-4 py-2 rounded-md">
        Go to Somewhere
      </Link>
      <input type="text" placeholder="Enter the Link Here" />
    </div>
  );
};
export default CreateJob;
