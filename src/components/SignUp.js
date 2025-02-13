import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { FaGlobe } from "react-icons/fa";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";

    try {
      const res = await axios.post(
        `http://localhost:5000${endpoint}`,
        formData,
        { withCredentials: true }
      );
      alert(res.data.message);
      setFormData({ fullName: "", email: "", password: "" });
    } catch (err) {
      console.error("Error:", err.response?.data?.message || err.message);
      alert(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-2 flex items-center h-[80px] w-full fixed top-0 left-0 z-50">
        {/* Logo */}
        <div className="absolute left-6 top-[-10px] flex items-center">
          <img src="Color version.svg" alt="Logo" className="h-14 pt-6" />
        </div>

        {/* Navigation Links */}
        <div className="ml-auto flex items-center space-x-6">
          <div className="hidden md:flex space-x-12 text-gray-700 font-medium">
            <a href="#" className="hover:text-teal-900">
              Home
            </a>
            <a href="#" className="hover:text-teal-900">
              About Us
            </a>
            <a href="#" className="hover:text-teal-900">
              Services ▼
            </a>
            <a href="#" className="hover:text-teal-900">
              Cases
            </a>
            <a href="/signup" className="border-b-2 border-teal-900">
              SignUp
            </a>
            <a href="#" className="hover:text-teal-900">
              Page ▼
            </a>
          </div>

          {/* Language Selection */}
          <div className="cursor-pointer flex items-center space-x-3 text-gray-700">
            <div className="hidden md:block absolute top-6 h-10 w-[2px] bg-gray-400"></div>
            <FaGlobe />
            <span>Language</span>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96 h-[600px] flex flex-col justify-center items-center mt-[100px]">
          <h2 className="text-2xl font-bold text-center mb-4">
            {isLogin ? "Login" : "Signup"} Form
          </h2>

          {/* Toggle Login/Signup */}
          <div className="flex relative mb-6 border border-gray-300 rounded-xl overflow-hidden w-full">
            <motion.div
              initial={{ x: isLogin ? 0 : "100%" }}
              animate={{ x: isLogin ? 0 : "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black to-[#20b2aa] rounded-xl"
            />
            <button
              className={`w-1/2 py-2 z-10 ${
                isLogin ? "text-white" : "text-black"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`w-1/2 py-2 z-10 ${
                !isLogin ? "text-white" : "text-black"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          {/* Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-3"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password*"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <button className="w-full mt-4 py-2 bg-[#20b2aa] rounded-lg font-bold">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>

          {/* Forgot Password */}
          {isLogin ? (
            <p className="text-center mt-4 text-sm">
              <a href="#" className="text-blue-600">
                Forgot Password?
              </a>
            </p>
          ) : null}

          {/* Switch Between Login and Signup */}
          <p className="text-center mt-4 text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              className="text-blue-600"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
