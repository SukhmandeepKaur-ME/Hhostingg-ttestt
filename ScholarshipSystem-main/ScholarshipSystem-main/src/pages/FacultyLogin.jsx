import React from "react";

const FacultyLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center mb-4">Faculty Login</h2>
        <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-2" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </div>
    </div>
  );
};

export default FacultyLogin;
