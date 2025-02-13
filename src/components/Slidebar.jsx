import React from "react";
import {
  BiBookAlt,
  BiCalendarCheck,
  BiHome,
  BiPen,
  BiSolidUserCheck,
  BiTask,
} from "react-icons/bi";

const Slidebar = () => {
  return (
    <div className="flex flex-col gap-10 p-4 bg-black h-screen w-72 hidden md:flex">
      {/* Logo Section */}
      <div className="flex items-center gap-4  text-lg font-bold">
        <img src="Color version.svg" alt="logo" className="w-34 h-34 pt-3" />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-5 text-white">
        <a
          href="#"
          className="flex items-center gap-4 text-lg font-medium text-white-800 p-3 rounded-lg hover:bg-[#3bc7cc] hover:text-white transition"
        >
          <BiHome className="text-2xl text-gray-400" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-4 text-lg font-medium text-white-800 p-3 rounded-lg hover:bg-[#3bc7cc] hover:text-white transition"
        >
          <BiPen className="text-2xl text-gray-400" />
          Pending
        </a>
        <a
          href="#"
          className="flex items-center gap-4 text-lg font-medium text-white-800 p-3 rounded-lg hover:bg-[#3bc7cc] hover:text-white transition"
        >
          <BiSolidUserCheck className="text-2xl text-gray-400" />
          Successful
        </a>
        <a
          href="#"
          className="flex items-center gap-4 text-lg font-medium text-white-800 p-3 rounded-lg hover:bg-[#3bc7cc] hover:text-white transition"
        >
          <BiTask className="text-2xl text-gray-400" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Slidebar;
