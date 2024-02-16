import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, toggleDetails }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove authToken from localStorage
    localStorage.removeItem("authToken");
    // Implement additional logout logic if needed

    // Close profile modal
    toggleDetails();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurry background */}
      <div className="fixed inset-0 bg-gray-800 opacity-75"></div>

      {/* Profile content */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <button
          onClick={toggleDetails}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center justify-center mb-4">
          <img
            src={user.image}
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover shadow-md"
          />
        </div>
        <h1 className="text-3xl font-semibold mb-4">
          {user.firstName} {user.lastName}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Username:</p>
            <p>{user.username}</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="font-semibold">Age:</p>
            <p>{user.age}</p>
          </div>
          <div>
            <p className="font-semibold">Gender:</p>
            <p>{user.gender}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
