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
import { useState, useEffect } from "react";
import Testy from "./Testy";
import { MdCheckCircle } from "react-icons/md";
const Homepage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    alert("Play button clicked! Implement video functionality here.");
  };
  const [years, setYears] = useState(0);
  const endValue = 15;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const increment = endValue / 20;
            const interval = setInterval(() => {
              current += increment;
              setYears(Math.floor(current));
              if (current >= endValue) {
                clearInterval(interval);
                setYears(endValue);
              }
            }, 100);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById("yearsCounter"));
  }, []);

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
        <div className="absolute inset-0 bg-[#154957] bg-opacity-65"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto font-nunito font-semibold">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            End to End Solution Provider for All Your Business Needs
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let us handle all your Tax, GST & Business Compliance at one place.
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
      <section className="mt-36 flex flex-col lg:flex-row items-center justify-center gap-10 px-20">
        {/* Left Section */}
        <div
          className="w-full lg:w-1/2 animate-fadeInLeft"
          data-aos="fade-left"
        >
          <h6 className="text-lg font-semibold text-teal-600">About Us</h6>
          <h2 className="text-5xl font-bold text-black my-3 pt-2">
            We provide Income Tax, GST & ROC filing
          </h2>
          <p className="text-gray-700 pt-4 pb-2">
            In addition to filing an Income Tax return, businesses in India may
            also be <br />
            required to file Goods and Services Tax (GST) returns and Register
            of <br />
            Companies (ROC) filings.
          </p>
          <a
            href="/about"
            className="mt-4 inline-block bg-[#3bc7cc] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#32b1b6] transition "
          >
            Learn More
          </a>
        </div>

        {/* Right Section - Video Container */}
        <div className="relative w-full lg:w-2/4">
          <img
            src="https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/businesswoman-working-with-financial-data-on-charts-and-tables-on-smartphone-and-computer.jpg"
            alt="Businesswoman working with financial data"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white bg-opacity-80 rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition"
            aria-label="Play Video"
          >
            <div className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-solid border-transparent border-l-black"></div>
          </button>
        </div>
      </section>
      <section
        className="relative flex flex-col md:flex-row justify-between p-6 md:p-12 mt-16 md:mt-36 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://show.moxcreative.com/taxpay/wp-content/uploads/sites/41/2022/01/customer-service-executives-working-in-call-center.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65 pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row w-full z-10">
          {/* Left Content */}
          <div className="flex-1 pr-0 md:pr-5 text-white text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-wide font-baskerville animate-slideInTop">
              Needs Professional <br /> Tax Service? <br /> Contact Us
            </h2>
            <p className="mt-4 text-lg animate-slideInTop delay-300">
              We pride ourselves on providing timely solutions. Our
              lightning-fast services set us apart from the competition and
              ensure that our clients receive the best possible experience.
            </p>
          </div>

          {/* Right Form */}
          <div className="flex-1 pl-0 md:pl-5 mt-8 md:mt-0">
            <div className="p-6  bg-opacity-90 rounded-lg  animate-slideInRight">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div className="mb-4">
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200">
                    <option>Individual Tax</option>
                    <option>Business Tax</option>
                    <option>Accounting</option>
                    <option>Incorporation</option>
                  </select>
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Additional Details"
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 text-lg font-medium text-white bg-teal-500 rounded-md hover:bg-blue-700 transition"
                >
                  Make Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-500 text-white py-24 px-12 text-center relative">
        <h1 className="text-5xl font-semibold uppercase tracking-wide mb-6 font-sans">
          What's the necessity?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-24">
          <div className="text-xl font-semibold text-white font-serif text-center">
            Income Tax, GST <br /> & ROC Filing
          </div>
          <div className="w-px h-16 bg-teal-200"></div>
          <div className="text-lg font-semibold text-white font-serif text-center">
            Let us understand our tax
          </div>
          <div className="w-px h-16 bg-teal-200"></div>
          {/* Button placed in a separate flex-col div to appear vertically aligned */}
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="bg-white text-teal-600 px-6 py-2 rounded-lg text-l font-semibold shadow-md hover:bg-teal-700 hover:text-white transition"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative -top-20 px-16">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Card 1 */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src="https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/preparing-annual-accounts-with-coworkers.jpg"
              alt="GST Filing"
              className="w-full border-b-4 border-teal-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-teal-600 mb-4">
                Why GST Filing Is Necessary?
              </h3>
              <p className="text-gray-600 mb-4">
                GST filing is necessary because it is a legal requirement under
                the Goods and Services Tax (GST) Act.
              </p>
              <a
                href="#"
                className="bg-teal-500 text-white py-2 px-5 rounded-lg text-sm font-medium hover:bg-teal-700 transition"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src="https://show.moxcreative.com/taxpay/wp-content/uploads/sites/41/2022/01/business-people.jpg"
              alt="ITR Filing"
              className="w-full border-b-4 border-teal-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-teal-600 mb-4">
                Why ITR Filing Is Necessary?
              </h3>
              <p className="text-gray-600 mb-4">
                ITR filing is a legal requirement for taxpayers in India, and
                failing to file can result in penalties.
              </p>
              <a
                href="#"
                className="bg-teal-500 text-white py-2 px-5 rounded-lg text-sm font-medium hover:bg-teal-700 transition"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src="https://show.moxcreative.com/taxpay/wp-content/uploads/sites/41/2022/01/accountant-at-work.jpg"
              alt="ROC Filing"
              className="w-full border-b-4 border-teal-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-teal-600 mb-4">
                Why ROC Filing Is Necessary?
              </h3>
              <p className="text-gray-600 mb-4">
                ROC filing ensures compliance with the regulations set by the
                Registrar of Companies (ROC).
              </p>
              <a
                href="#"
                className="bg-teal-500 text-white py-2 px-5 rounded-lg text-sm font-medium hover:bg-teal-700 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
          {/* Left Section - Content */}
          <div className="space-y-6">
            <h6 className="text-teal-600 text-lg font-semibold">
              Difference of US
            </h6>
            <h2 className="text-3xl font-bold text-gray-900">
              What Makes efiletax Different from Others?
            </h2>
            <div className="space-y-4">
              {[
                "Fast And Secure Process",
                "Quick Question Answers",
                "Expert Opinion",
              ].map((title, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <MdCheckCircle className="text-teal-600 text-2xl" />
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {title}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {index === 0
                        ? "There are various ways to ensure a fast and secure process for ITR filing, GST filing, and ROC filing."
                        : index === 1
                        ? "Get your tax questions answered quickly and accurately with our quick answers feature."
                        : "Get personalized tax advice from our team of professionals. Trust us to help you navigate."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Enlarged Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src="https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/businesswoman-working-with-financial-data-on-charts-and-tables-on-smartphone-and-computer.jpg"
                alt="Businesswoman working with financial data"
                className="w-full rounded-lg shadow-md"
              />
              <div className="absolute bottom-6 right-6 bg-teal-600 text-white text-center p-5 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg">
                <p id="yearsCounter" className="text-4xl font-bold">
                  {years}+
                </p>
                <p className="text-base">Years of Experience</p>
              </div>
            </div>
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
