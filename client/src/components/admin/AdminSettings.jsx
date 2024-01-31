import React, { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "../admin/navbar/Navbar";

const AdminSettings = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdateProfile = () => {
    console.log("Updating profile:", { newUsername, newPassword });

    setNewUsername("");
    setNewPassword("");
  };

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <main className="p-4">
            {/* Page Content Goes Here */}

            <div className="bg-white p-4 rounded shadow">
              {/* Settings Form Goes Here */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  New Username:
                </label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  New Password:
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>

              <button
                onClick={handleUpdateProfile}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Save Changes
              </button>
            </div>
          </main>
        </Box>
      </Box>
    </>
  );
};

export default AdminSettings;
