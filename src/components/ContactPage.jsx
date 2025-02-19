import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="font-sans">
      <div className="flex justify-end">
        <div className="bg-teal-800 text-white px-8 py-3 flex items-end text-l w-[75%] max-w-[1200px]">
          <div className="ml-auto flex items-end space-x-8">
            <span>
              📍 1227, 18th Main Road, Anna Nagar West, Chennai 600040
            </span>
            <span>Follow Us :</span>
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-2 flex items-center h-[80px] relative ">
        {/* Logo - Positioned Above Navbar */}
        <div className="absolute left-6 top-[-18px] flex items-center justify-center">
          <img src="Color version.svg" alt="Logo" className="h-14" />
        </div>

        {/* Navigation Links & Language Selection - Moved to Right */}
        <div className="ml-auto flex items-center space-x-6">
          <div className="hidden md:flex space-x-12 text-gray-700 font-medium">
            <a href="#" className="hover:text-teal-900">
              Home
            </a>
            <a href="#" className="hover:text-teal-900">
              About Us
            </a>
            <a href="/services" className="hover:text-teal-900">
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

      {/* Hero Section */}

      <motion.header
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-60 flex items-start justify-start text-white bg-cover bg-center p-0"
        style={{
          backgroundImage:
            "url('https://show.moxcreative.com/taxpay/wp-content/uploads/sites/41/2022/01/happy-call-center-managers-working-with-laptops-and-microphones-at-modern-office.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative flex flex-col items-start text-left z-10 gap-4 self-start pl-16 pr-10 pt-12"
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-14 left-12 right-12 h-24 w-[3px] bg-gray-900"></div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-6xl font-bold"
          >
            Contact Us
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="text-lg"
          >
            Feel free to keep in touch
          </motion.p>
        </motion.div>
      </motion.header>

      {/* Contact Info */}
      <section className=" flex justify-center px-6 py-12">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-4 gap-6 p-6 border border-gray-800 rounded-lg shadow-lg w-full md:w-4/4 lg:w-3/3 min-h-[180px]"
        >
          <div className="flex items-center gap-3 relative">
            <div className="bg-blue-600 p-2 rounded-full">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">Address</p>
              <p>1227, 18th Main Road, Anna Nagar West, Chennai 600040</p>
            </div>
            <div className="hidden md:block absolute right-0 top-2/2 h-16 w-[1px] bg-gray-400"></div>
          </div>

          <div className="flex items-center gap-3 relative">
            <div className="bg-green-600 p-2 rounded-full">
              <Phone className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">Call Center</p>
              <p>+6221 2002-2012</p>
            </div>
            <div className="hidden md:block absolute right-0 top-2/2 h-16 w-[1px] bg-gray-400"></div>
          </div>

          <div className="flex items-center gap-3 relative">
            <div className="bg-red-600 p-2 rounded-full">
              <Mail className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p>efiletax@gmail.com</p>
            </div>
            <div className="hidden md:block absolute right-0 top-2/2 h-16 w-[1px] bg-gray-400"></div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-yellow-600 p-2 rounded-full">
              <Clock className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">Office Hour</p>
              <p>
                Mon - Fri: 09.00 am -
                <br /> 05.00 pm
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="w-full flex justify-center px-6 py-12">
        {/* Contact Form & Image Section */}
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row rounded-lg shadow-lg box-border">
          {/* Left Section - Form */}
          <div className="w-full md:w-1/2 bg-gray-100 p-10 flex flex-col justify-center border border-gray-300">
            <h2 className="text-4xl font-bold mb-4">Let's talk</h2>
            <p className="mb-6 text-lg">Send us a message</p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Company"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border rounded-md w-full col-span-2"
              />
              <textarea
                placeholder="Message"
                className="p-3 border rounded-md w-full col-span-2 h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-teal-600 text-white p-3 rounded-md w-full col-span-2 hover:bg-teal-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right
            animate={{ x: 0, opacity: 1 }} // Move to normal position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            className="w-full md:w-1/2 bg-cover bg-center rounded-r-lg border border-gray-300"
            style={{
              backgroundImage:
                "url('https://show.moxcreative.com/taxpay/wp-content/uploads/sites/41/2022/01/customer-service-executives-working-in-call-center.jpg')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          ></motion.div>
        </div>
      </section>

      {/* Google Map Section with Same Width */}
      <section className="w-full flex justify-center px-6 py-12">
        <div className="w-full max-w-[1200px] mx-auto pt-10 pb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.067622952007!2d80.2035789!3d13.0949008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641130ada6f9%3A0xb8d6c6dcf45e2432!2s1227%2C%2018th%20Main%20Rd%2C%20Kambar%20Colony%2C%20Anna%20Nagar%20West%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1739187831218!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer className="bg-[#0B2934] text-white py-10">
        <div className="container mx-auto px-6 flex flex-wrap justify-between mb-6">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <a href="https://kitnew.moxcreative.com/mocounta">
              <img
                src="Color version.svg"
                alt="logo_mocounta_"
                className="w-40 mb-4"
              />
            </a>

            <p className="flex items-center mt-2">
              <i className="fas fa-map-marker-alt mr-2"></i> Chennai
            </p>
            <p className="flex items-center mt-1">
              <i className="fas fa-envelope mr-2"></i> support@yourdomain.tld
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/5">
            <h3 className="text-[#23c0d8] text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/5">
            <h3 className="text-[#23c0d8] text-lg font-semibold mb-3">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Corporate Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Personal Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Legalisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Mobile Notary
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Authentication
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full md:w-1/5">
            <h3 className="text-[#23c0d8] text-lg font-semibold mb-3">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23c0d8]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 text-center py-4">
          <p className="text-sm">
            © 2021 efiletax, All rights reserved. Present by MoxCreative.
          </p>
          <ul className="flex justify-center space-x-6 mt-2">
            <li>
              <a href="#" className="hover:text-[#23c0d8]">
                Terms of Use
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

export default ContactPage;
