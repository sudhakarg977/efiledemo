import React from "react";
import Navbar from "../Navbar";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      {/* Banner Section */}
      <div
        className="relative w-full h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/two-young-business-people-working-together-in-office-financial-analysis-accounting-concept-.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#154957] bg-opacity-90"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold font-sans">Contact Us</h1>
          <p className="text-xl mt-2">Home / Contact</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Let’s Get Connected
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Submit your details here to get a call from our support team.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Contact No</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Enter your contact number"
              />
            </div>
            <div>
              <label className="block text-gray-700">Write Message</label>
              <textarea
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Type your message"
                rows="4"
              ></textarea>
            </div>
            <button className="w-full p-3 bg-teal-600 text-white font-bold rounded-md hover:bg-blue-700">
              Submit
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
            {/* Contact Header */}
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" /> Still Have Questions?
            </h3>
            <p className="text-gray-700">Call us, we will be happy to help.</p>

            {/* Phone Numbers */}
            <p className="text-blue-600 font-semibold flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:9696160160" className="hover:underline">
                9696160160
              </a>
              ,{" "}
              <a href="tel:9697980789" className="hover:underline">
                9697980789
              </a>
            </p>

            {/* Office Hours */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaClock className="text-gray-600" />
              Monday - Saturday | 9:30 AM - 6:30 PM IST
            </p>

            {/* Office Locations */}
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> Our Offices
            </h3>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <strong>Chennai Office:</strong> 1227, 18th Main Road, Anna
                Nagar West, Chennai 600040
              </p>
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <strong>Guntur Office:</strong> 15/1, Arundelpet, Guntur, 522002
              </p>
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <strong>Telangana Office:</strong> (Add Address)
              </p>
            </div>
          </div>
        </div>
      </div>
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

export default ContactUs;
