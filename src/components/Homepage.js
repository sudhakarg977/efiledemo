import React from "react";
import Navbar from "./Navbar";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalculator,
  FaChartBar,
  FaGlobe,
} from "react-icons/fa";
import FAQ from "./FAQ";
import { motion } from "framer-motion";
import { useState } from "react";
import Testy from "./Testy";

const Homepage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    alert("Play button clicked! Implement video functionality here.");
  };
  return (
    <div>
      <Navbar />
      <section
        className="relative bg-[#0B2934] text-white px-6 text-center bg-cover bg-center min-h-screen flex items-center justify-center flex-col"
        style={{
          backgroundImage:
            "url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/business-team.jpg')",
        }}
      >
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-[#154957] bg-opacity-70"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            End to End Solution Provider for All Your Business Needs
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let us handle all your Tax, GST & Business Compliance at one place.
            <br />
            We are the best at providing Income Tax, GST, and ROC filing
            services.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="signup.html"
              className="bg-[#20b2aa] text-white px-6 py-3 rounded-md font-semibold transition hover:bg-[#1e9e96]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start GST-filing
            </motion.a>

            <motion.a
              href="signup.html"
              className="bg-[#20b2aa] text-white px-6 py-3 rounded-md font-semibold transition hover:bg-[#1e9e96]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start ITR-filing
            </motion.a>
          </div>
        </div>

        {/* Bottom-Fixed Feature Container */}
        <div className="absolute bottom-0 w-full max-w-7xl bg-black bg-opacity-50 px-12 py-14 flex flex-col md:flex-row justify-around items-center rounded-t-lg">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <FaCalculator className="text-teal-400 text-4xl" />
            <span className="text-2xl font-semibold text-center">
              Fast and secure process
            </span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-400"></div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <FaChartBar className="text-teal-400 text-4xl" />
            <span className="text-2xl font-semibold text-center">
              Financial Tax And Analysis
            </span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-400"></div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <FaGlobe className="text-teal-400 text-4xl" />
            <span className="text-2xl font-semibold text-center">
              Secure and easier way
            </span>
          </div>
        </div>
      </section>

      <Testy />
      <FAQ />
      <footer className="bg-[#0B2934] text-white py-10 px-5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
          {/* Logo & Contact Info */}
          <div className="w-full sm:w-1/4 px-4">
            <img
              src="/Color version.svg"
              alt="efiletax Logo"
              className="w-40 mb-3"
            />
            <p className="underline text-[#20b2aa] font-bold">OUR LOCATION</p>
            <p>
              1227, 18th Main Road,
              <br />
              Anna Nagar West,
              <br />
              Chennai 600040
            </p>
            <p className="flex items-center mt-2">
              <FaMapMarkerAlt className="mr-2" /> Chennai
            </p>
            <p className="flex items-center mt-2">
              <FaEnvelope className="mr-2" /> support@efiletax.in
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/5 px-4">
            <h3 className="text-lg text-[#20b2aa] mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full sm:w-1/5 px-4">
            <h3 className="text-lg text-[#20b2aa] mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  GST FILING
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  ITR FILING
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  ROC FILING
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  GST Closure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  GST e-Invoice
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/5 px-4">
            <h3 className="text-lg text-[#20b2aa] mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20b2aa]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-600 mt-8 pt-4">
          <p className="text-sm">
            Copyright © 2025 e-filetax, All rights reserved. Present by
            e-filetax.
          </p>
          <ul className="flex justify-center space-x-5 mt-3">
            <li>
              <a href="#" className="hover:text-[#23c0d8]">
                Term of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#23c0d8]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#23c0d8]">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
