import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  IdentificationIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ChevronDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

import PermanentInformationForm from "../forms/ PermanentInformationForm";
import IdentificationForm from "../forms/IdentificationForm";
import AddressForm from "../forms/AddressForm";
import ResidentialStatusForm from "../forms/ResidentialStatusForm";
import { form } from "framer-motion/client";
import Banner from "./Banner";
const Services = () => {
  const pricingPlans = [
    {
      title: "Start Up",
      subtitle: "Basic Package Service",
      price: "$49",
      period: "/MONTHLY",
      features: [
        "Litora habitasse nisi nulla magnis",
        "Etiam semper netus cursus",
        "Enim justo tincidunt lettus",
        "Dapibus ornare posuere facilisis auctor",
        "Adipiscing netus urna",
      ],
      isPopular: true,
      paymentMethods: ["VISA", "PayPal"],
    },
  ];

  const [sections, setSections] = useState({
    permanentInfo: false,
    identification: false,
    address: false,
    residentialStatus: false,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("File uploaded:", file);
    // Add file upload logic here
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <Banner />
      {/* Work Process Section */}
      <section className="py-16 px-4 relative">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Work Process</h2>
          <p className="text-teal-600 text-lg font-semibold mt-2">
            How We Work
          </p>
        </div>

        {/* Background Image Applied Here */}
        <div
          className="relative flex flex-wrap justify-center gap-14 mt-12 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: "url('/bg-line.png')",
            backgroundSize: "contain", // Ensures the image fits between the cards
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom", // Positions in the center of the container
            marginBottom: "100px",
          }}
        >
          {[
            {
              icon: "fas fa-calculator",
              title: "Gather Documents",
              text: "Refer to our document checklist below",
            },
            {
              icon: "fas fa-chart-bar",
              title: "Fill Online Form",
              text: "Enter your details and upload documents",
            },
            {
              icon: "fas fa-globe",
              title: "Expert Verification",
              text: "Our team reviews your documents",
            },
            {
              icon: "fas fa-file-invoice",
              title: "ITR Copy",
              text: "Receive your ITR filed acknowledgment",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="service-card bg-white border border-gray-300 p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-72 opacity-0 translate-y-10 transition-all duration-700 delay-100"
            >
              <i className={`${item.icon} text-teal-600 text-5xl mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.text}</p>
              <button className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-12 text-center relative">
        <div className="flex justify-between items-start w-full">
          {/* Left Content */}
          <div className="w-[70%]">
            <h2 className="text-3xl font-bold mb-4">Upload Documents</h2>

            {/* Progress Steps */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              {[
                "Personal Info",
                "Income Sources",
                "Tax Saving",
                "Tax Summary",
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center space-x-2">
                    <button
                      className={`py-2.5 px-5 text-sm font-medium rounded-full ${
                        index === 0
                          ? "bg-teal-500 text-white hover:bg-teal-600"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {step}
                    </button>
                  </div>
                  {index !== 3 && (
                    <div className="flex-grow h-px bg-gray-300"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Info Box */}
            <div className="w-full bg-green-100 text-green-600 p-3 rounded-md border border-green-400 mb-4 flex justify-between items-center">
              <span>
                ✅ File your taxes confidently with 100% accuracy — We've got
                you covered.
              </span>
              <a href="#" className="text-blue-600 underline font-medium">
                Learn More
              </a>
            </div>
            <div className="space-y-4">
              {[
                {
                  id: "permanentInfo",
                  title: "Permanent Information",
                  description:
                    "Please provide all info as per your government identity documents (PAN, Aadhaar etc.)in the below form as pe",
                  icon: (
                    <ClipboardDocumentListIcon className="w-6 h-6 text-purple-600" />
                  ),
                  bgColor: "bg-purple-100",
                  form: <PermanentInformationForm />,
                },
                {
                  id: "identification",
                  title: "Identification & Contact details",
                  description:
                    "To e-file your returns, please provide your Aadhaar, PAN, and contact details provide youcontact details in the",
                  icon: <IdentificationIcon className="w-6 h-6 text-red-600" />,
                  bgColor: "bg-red-100",
                  form: <IdentificationForm />,
                },
                {
                  id: "address",
                  title: "Your Address",
                  description:
                    "You can provide either your current address or permanent address of residence current address or permanent ",
                  icon: <HomeIcon className="w-6 h-6 text-blue-600" />,
                  bgColor: "bg-blue-100",
                  form: <AddressForm />,
                },
                {
                  id: "residentialStatus",
                  title: "Residential Status",
                  description:
                    "The residential status depends on the number of days you stayed in India. Please follow the process to choose ",
                  icon: <HomeIcon className="w-6 h-6 text-purple-600" />,
                  bgColor: "bg-purple-100",
                  form: <ResidentialStatusForm />,
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="bg-white  p-4 rounded-xl border border-gray-200"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection(item.id)}
                  >
                    {/* Icon & Title */}
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${item.bgColor}`}>
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-gray-700 text-lg">
                        {item.title}
                      </h3>
                    </div>

                    {/* Dropdown Icon */}
                    <ChevronDownIcon
                      className={`w-6 h-6 text-gray-600 transition-transform ${
                        sections[item.id] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 ">{item.description}</p>
                  </div>

                  {/* Description */}

                  {sections[item.id] && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      {item.form}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content (Price and Chat) */}
          <div className="w-[30%] flex flex-col items-end space-y-10">
            {/* Pricing Plans */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 sans-serif">
                Pricing Plans
              </h2>
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-xl shadow-lg p-6 mt-4 transition transform hover:scale-105 hover:shadow-xl"
                >
                  {plan.isPopular && (
                    <span className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Popular
                    </span>
                  )}
                  <h3 className="text-3xl font-bold sans-serif">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-gray-200">{plan.subtitle}</p>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <br />
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <img
                    src="https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/Payment-Icon-300x50.png"
                    alt="Payment Methods"
                    className="w-full mt-4"
                  />

                  <ul className="mt-4 text-gray-100 text-sm text-center w-full">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex flex-col items-center w-full">
                        {i !== 0 && (
                          <div className="w-2/3 border-b border-gray-400 my-2"></div>
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-white text-black py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                    GET STARTED
                  </button>
                </div>
              ))}
            </div>

            {/* Chat Assistance */}
            <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 text-right transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="font-semibold text-gray-800">
                💬 Get Instant Help
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Ask Rexa for expert assistance
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                Chat Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
