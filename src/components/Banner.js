import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/two-young-business-people-working-together-in-office-financial-analysis-accounting-concept-.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#154957] bg-opacity-90"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold font-sans">Services</h1>
        <p className="text-3xl mt-2">ITR Services</p>
      </div>
    </div>
  );
};

export default Banner;
