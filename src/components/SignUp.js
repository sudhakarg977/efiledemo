import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Navbar";
import Loader from "./Loader";

const clientId =
  "203749460506-a0p2pi5i1pbu785e67v8onavcubi602b.apps.googleusercontent.com";

export default function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const handleGoogleResponse = async (response) => {
      {
        spinner && <Loader />;
      }

      try {
        const res = await fetch(
          "https://efiledemo-3.onrender.com/api/auth/google-login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tokenId: response.credential }),
          }
        );

        const data = await res.json();

        if (res.ok) {
          setSpinner(false);
          // Save user data in localStorage
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          toast.success("Google Login Successful! 🎉", {
            position: "top-center",
          });

          navigate("/homepage");
        } else {
          toast.error(data.message || "Google Login failed!", {
            position: "top-right",
          });
        }
      } catch (error) {
        toast.error("Error during Google authentication!", {
          position: "top-right",
        });
      }
    };

    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleResponse,
        ux_mode: "popup", // Ensures login happens in a popup, not a new tab
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInBtn"),
        { theme: "outline", size: "large" }
      );
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    {
      spinner && <Loader />;
    }

    const url = isLogin
      ? "https://efiledemo-3.onrender.com/api/auth/login"
      : "https://efiledemo-3.onrender.com/api/auth/signup";
    const dataToSend = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await res.json();

      if (res.ok) {
        setLoading(false);
        setSpinner(false);
        // Store token and user data in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success("Login Successful! 🎉", { position: "top-center" });

        setFormData({ fullName: "", email: "", password: "" });
        navigate("/homepage"); // Uncomment this for navigation after login
      } else {
        toast.error(data.message || "Login failed!", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Error during authentication!", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full">
      {/* <nav className="bg-gray-100 text-dark py-4 px-6 flex justify-between items-center shadow-md">
        <img src="Color version.svg" alt="Logo" className="h-8 w-auto" />
        <div className="flex items-center space-x-6 mr-10">
          <a href="#home" className="hover:text-teal-400">
            Home
          </a>
          <a href="#services" className="hover:text-teal-400">
            Services
          </a>
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
          <button className="bg-teal-600 hover:bg-teal-500 rounded-lg font-bold px-4 py-2 text-white">
            Get Started
          </button>
        </div>
      </nav> */}
      <Navbar />
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[100vh]">
        <div className="flex w-full max-w-4xl bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
          {/* Left Side: Signup/Login Form */}
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center items-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md h-[450px] flex flex-col justify-between"
            >
              <h2 className="text-2xl font-semibold text-center mb-4">
                {isLogin ? "Login" : "Sign Up"}
              </h2>
              <form className="w-full" onSubmit={handleSubmit}>
                {!isLogin && (
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg mb-3 bg-gray-700 text-white"
                    required
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg mb-3 bg-gray-700 text-white"
                  required
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password*"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white"
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
                <button
                  className="w-full mt-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg font-bold flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                  ) : isLogin ? (
                    "Login"
                  ) : (
                    "Signup"
                  )}
                </button>
              </form>

              {/* Google Login Button */}
              <div
                id="googleSignInBtn"
                className="w-full mt-4 flex justify-center"
              ></div>

              <p className="text-center mt-4 text-sm">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  className="text-blue-400"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up" : "Login"}
                </button>
              </p>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <div className="hidden sm:block sm:w-1/2">
            <img
              src="https://show.moxcreative.com/taxpay/wp-content/uploads/sites/41/2022/01/start-up-business-team-in-the-office.jpg"
              alt="Signup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
