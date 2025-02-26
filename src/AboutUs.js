import React from "react";

const AboutUs = () => {
  return (
    <section className="mt-36 flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 animate-fadeInLeft" data-aos="fade-left">
        <h6 className="text-lg font-semibold text-gray-600">About Us</h6>
        <h2 className="text-3xl font-bold text-black my-3">
          We provide Income Tax, GST & ROC filing
        </h2>
        <p className="text-gray-700">
          In addition to filing an Income Tax return, businesses in India may
          also be required to file Goods and Services Tax (GST) returns and
          Register of Companies (ROC) filings.
        </p>
        <a
          href="#"
          className="mt-4 inline-block bg-[#3bc7cc] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#32b1b6] transition"
        >
          Learn More
        </a>
      </div>

      {/* Right Section - Video Container */}
      <div className="relative w-full max-w-lg">
        <img
          src="https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/businesswoman-working-with-financial-data-on-charts-and-tables-on-smartphone-and-computer.jpg"
          alt="Businesswoman working with financial data"
          className="w-full rounded-lg shadow-lg"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white bg-opacity-80 rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:scale-110 transition"
          role="button"
          aria-label="Play Video"
          tabIndex="0"
        >
          <div className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-solid border-transparent border-l-black"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
