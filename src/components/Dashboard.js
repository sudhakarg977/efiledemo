import { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaDotCircle,
  FaClock,
  FaCheckCircle,
  FaSignOutAlt,
  FaBell,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const userData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 700 },
  { month: "May", users: 1200 },
  { month: "Jun", users: 1000 },
];

const incomeData = [
  { month: "Jan", income: 5000 },
  { month: "Feb", income: 7000 },
  { month: "Mar", income: 8000 },
  { month: "Apr", income: 6000 },
  { month: "May", income: 11000 },
  { month: "Jun", income: 9000 },
];

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-5 text-center border-b border-gray-700 flex items-center justify-center">
          <img
            src="/Color version.svg"
            alt="efiletax Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-lg font-bold ml-2"></h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-4">
            <li
              className="flex items-center p-2 bg-teal-600 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => setActiveSection("dashboard")}
            >
              <FaTachometerAlt className="mr-3" />
              Dashboard
            </li>
            <li
              className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => setActiveSection("users")}
            >
              <FaUsers className="mr-3" />
              Users List
            </li>
            <li
              className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => setActiveSection("status")}
            >
              <FaDotCircle className="mr-3" />
              Status
            </li>
            <li
              className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => setActiveSection("pending")}
            >
              <FaClock className="mr-3" />
              Pending
            </li>
            <li
              className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => setActiveSection("successful")}
            >
              <FaCheckCircle className="mr-3" />
              Successful
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-700">
          <button className="flex items-center w-full p-2 hover:bg-gray-700 rounded-lg">
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600 cursor-pointer" />
            <FaEnvelope className="text-gray-600 cursor-pointer" />
            <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {[
            {
              title: "Users",
              value: "26K",
              change: "-12.4%",
              color: "bg-green-600",
            },
            {
              title: "Income",
              value: "$6,200",
              change: "40.9%",
              color: "bg-blue-500",
            },
            {
              title: "Conversion Rate",
              value: "2.49%",
              change: "84.7%",
              color: "bg-yellow-500",
            },
            {
              title: "Sessions",
              value: "44K",
              change: "-23.6%",
              color: "bg-red-500",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`${card.color} text-white p-4 rounded-lg shadow-md`}
            >
              <h2 className="text-lg font-semibold">{card.value}</h2>
              <p className="text-sm">{card.title}</p>
              <p className="text-xs">{card.change}</p>
            </div>
          ))}
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* Users Growth Chart */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Users Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Income Chart */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Monthly Income</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incomeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
