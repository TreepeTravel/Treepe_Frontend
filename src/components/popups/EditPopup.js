"use client";

import { useState } from "react";

export default function EditPopUp({ username = "", email = "", userImage, onClose }) {
  const [form, setForm] = useState({ username, email });
  const [profileImage, setProfileImage] = useState(
    userImage
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Update profile image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Info:", form); // Replace with actual save logic
    console.log("Profile Image URL:", profileImage); // Save image if necessary
    onClose(); // Close the modal after saving
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent propagation to the overlay
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md overflow-hidden"
      >
        {/* Header */}
        <div className="border-b border-gray-400 p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold  text-gray-800">Edit Profile</h2>
          <button
            onClick={onClose}
            className="border rounded-full focus:outline-none"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_48_3117)">
                <path
                  d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM23.914 21.086L21.086 23.914L16 18.828L10.914 23.914L8.086 21.086L13.172 16L8.086 10.914L10.914 8.086L16 13.172L21.086 8.086L23.914 10.914L18.828 16L23.914 21.086Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_3117">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Profile Icon */}
          <div className="flex justify-center mb-6 relative">
            <img
              src={profileImage}
              alt="Profile Icon"
              className="rounded-full w-28 h-28 shadow-md border cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            />
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter name"
                value={form.username}
                onChange={handleChange}
                className="w-full px-4 py-3 font-medium mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email ID<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 font-medium mt-1 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-10 items-center">
              <button
                type="button"
                onClick={onClose}
                className="px-10 py-3 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-10 py-3 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
