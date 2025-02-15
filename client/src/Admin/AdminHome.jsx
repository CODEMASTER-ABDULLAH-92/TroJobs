import React from "react";
import { FaUsers, FaBriefcase, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="mt-5">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700 rounded">Dashboard</li>
            <li className="py-2 px-4 hover:bg-gray-700 rounded">Users</li>
            <Link to="/CreateJob" className="py-2 px-4 hover:bg-gray-700 w-full max-w-[1000px] rounded">Create Job</Link>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cards */}
          <div className="bg-white p-5 shadow-md rounded-lg flex items-center space-x-4">
            <FaUsers className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Users</h3>
              <p className="text-gray-600">1,234</p>
            </div>
          </div>

          <div className="bg-white p-5 shadow-md rounded-lg flex items-center space-x-4">
            <FaBriefcase className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Jobs Posted</h3>
              <p className="text-gray-600">432</p>
            </div>
          </div>

          <div className="bg-white p-5 shadow-md rounded-lg flex items-center space-x-4">
            <FaChartLine className="text-purple-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Applications</h3>
              <p className="text-gray-600">789</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
