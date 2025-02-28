import React from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
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
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaCalendarAlt,
  FaCcMastercard,
  FaCcVisa,
  FaCcStripe,
  FaCcPaypal,
  FaApple,
} from "react-icons/fa";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";
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
import { MdCreditCard } from "react-icons/md";
const data = [
  { value: 20 },
  { value: 40 },
  { value: 30 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
  { value: 55 },
];

const stats = [
  {
    title: "Users",
    value: "26K",
    change: "-12.4%",
    color: "bg-green-600",
    graphColor: "#34D399",
  },
  {
    title: "Income",
    value: "$6,200",
    change: "40.9%",
    color: "bg-blue-500",
    graphColor: "#3B82F6",
  },
  {
    title: "Conversion Rate",
    value: "2.49%",
    change: "84.7%",
    color: "bg-yellow-500",
    graphColor: "#FACC15",
  },
  {
    title: "Sessions",
    value: "44K",
    change: "-23.6%",
    color: "bg-red-500",
    graphColor: "#EF4444",
  },
];

// Dummy Data
const userData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 700 },
  { month: "May", users: 1200 },
  { month: "Jun", users: 1000 },
  { month: "Jul", users: 1300 },
  { month: "Aug", users: 1100 },
  { month: "Sep", users: 1400 },
  { month: "Oct", users: 1500 },
  { month: "Nov", users: 1700 },
  { month: "Dec", users: 1800 },
];

const incomeData = [
  { month: "Jan", income: 5000 },
  { month: "Feb", income: 7000 },
  { month: "Mar", income: 8000 },
  { month: "Apr", income: 6000 },
  { month: "May", income: 11000 },
  { month: "Jun", income: 9000 },
  { month: "Jul", income: 12000 },
  { month: "Aug", income: 10000 },
  { month: "Sep", income: 14000 },
  { month: "Oct", income: 13000 },
  { month: "Nov", income: 15000 },
  { month: "Dec", income: 16000 },
];

const socialStats = [
  {
    icon: <FaFacebookF />,
    title: "Facebook",
    friends: "89K",
    feeds: "459",
    bgColor: "bg-blue-600",
    iconBg: "bg-blue-800",
  },
  {
    icon: <FaTwitter />,
    title: "Twitter",
    friends: "973K",
    feeds: "1.792",
    bgColor: "bg-sky-500",
    iconBg: "bg-sky-700",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    friends: "500",
    feeds: "1.292",
    bgColor: "bg-blue-800",
    iconBg: "bg-blue-900",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Events",
    friends: "12+",
    feeds: "4",
    bgColor: "bg-gray-700",
    iconBg: "bg-gray-900",
  },
];
const trafficSales = [
  { day: "Monday", newClients: 20, recurringClients: 60 },
  { day: "Tuesday", newClients: 30, recurringClients: 70 },
  { day: "Wednesday", newClients: 10, recurringClients: 40 },
  { day: "Thursday", newClients: 40, recurringClients: 80 },
  { day: "Friday", newClients: 25, recurringClients: 60 },
  { day: "Saturday", newClients: 35, recurringClients: 75 },
  { day: "Sunday", newClients: 15, recurringClients: 50 },
  { day: "Monday", newClients: 50, recurringClients: 90 },
  { day: "Tuesday", newClients: 55, recurringClients: 100 },
  { day: "Wednesday", newClients: 60, recurringClients: 110 },
  { day: "Thursday", newClients: 65, recurringClients: 120 },
  { day: "Friday", newClients: 70, recurringClients: 130 },
];

const users = [
  {
    name: "Yiorgos Avraamu",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    country: { flag: "🇺🇸", code: "US" },
    usage: 50,
    color: "bg-green-500",
    payment: <FaCcMastercard size={24} />,
    activity: "10 sec ago",
    status: "online",
  },
  {
    name: "Avram Tarasios",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    country: { flag: "🇧🇷", code: "BR" },
    usage: 22,
    color: "bg-blue-500",
    payment: <FaCcVisa size={24} />,
    activity: "5 minutes ago",
    status: "online",
  },
  {
    name: "Quintin Ed",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    country: { flag: "🇮🇳", code: "IN" },
    usage: 74,
    color: "bg-yellow-500",
    payment: <FaCcStripe size={24} />,
    activity: "1 hour ago",
    status: "online",
  },
  {
    name: "Enéas Kwadwo",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    country: { flag: "🇫🇷", code: "FR" },
    usage: 98,
    color: "bg-red-500",
    payment: <FaCcPaypal size={24} />,
    activity: "Last month",
    status: "offline",
  },
  {
    name: "Agapetus Tadeáš",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    country: { flag: "🇪🇸", code: "ES" },
    usage: 22,
    color: "bg-green-500",
    payment: <FaApple size={24} />,
    activity: "Last week",
    status: "offline",
  },
  {
    name: "Friderik Dávid",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    country: { flag: "🇵🇱", code: "PL" },
    usage: 43,
    color: "bg-green-500",
    payment: <MdCreditCard size={24} />,
    activity: "Last week",
    status: "offline",
  },
];

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark"); // Toggles dark mode on the HTML root
  };
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {stats.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {card.value}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.title}
              </p>
            </div>

            <div className="h-14">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={card.graphColor}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <p
              className={`text-sm font-semibold ${
                card.change.includes("-") ? "text-red-500" : "text-green-500"
              }`}
            >
              {card.change}
            </p>
          </div>
        ))}
      </section>

      {/* Graphs Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
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
      </section>

      {/* Social Media Stats */}
      <section className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {socialStats.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} text-white p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl`}
            >
              <div
                className={`w-14 h-14 ${item.iconBg} rounded-full flex items-center justify-center text-3xl mb-4`}
              >
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-2xl font-bold">{item.friends} Friends</p>
              <p className="text-gray-200">{item.feeds} Feeds</p>
            </div>
          ))}
        </div>
      </section>

      {/* Traffic & Sales */}
      <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-800">
          🚀 Traffic & Sales Overview
        </h3>

        {/* Graphs Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Line Chart - Trends */}
          <div className="h-64 w-full bg-gray-50 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2 text-blue-600">
              📈 Clients Trend
            </h4>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficSales}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="newClients"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="recurringClients"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart - Comparison */}
          <div className="h-64 w-full bg-gray-50 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2 text-green-600">
              📊 Clients Distribution
            </h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficSales}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="newClients"
                  fill="#3b82f6"
                  radius={[5, 5, 0, 0]}
                />
                <Bar
                  dataKey="recurringClients"
                  fill="#ef4444"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Usage</th>
              <th className="p-3 text-left">Payment Method</th>
              <th className="p-3 text-left">Activity</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                {/* User Info */}
                <td className="p-3 flex items-center space-x-3">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      user.status === "online" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">
                      New | Registered: Jan 1, 2023
                    </p>
                  </div>
                </td>

                {/* Country */}
                <td className="p-3">
                  <span className="text-lg">{user.country.flag}</span>
                </td>

                {/* Usage */}
                <td className="p-3">
                  <p className="font-semibold">{user.usage}%</p>
                  <div className="w-32 h-2 bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className={`h-full ${user.color}`}
                      style={{ width: `${user.usage}%` }}
                    ></div>
                  </div>
                </td>

                {/* Payment Method */}
                <td className="p-3 text-xl">{user.payment}</td>

                {/* Activity */}
                <td className="p-3 text-gray-500">{user.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Dashboard;
