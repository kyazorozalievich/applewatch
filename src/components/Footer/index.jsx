import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-[70px] p-5">
      <div className="container w-[90%] flex items-center justify-between">
        <div className="flex items-start flex-col gap-[40px]">
          <h1 className="text-[40px] font-[700]">Shopverse</h1>
          <a className="">@ 2024 Shopverse All Rights Reserved</a>
          <div className="flex items-center gap-[10px]">
            <a className="text-[25px] text-blue-700 cursor-pointer">
              <FaFacebook />
            </a>
            <a className="text-[25px] text-red-700 cursor-pointer">
              <FaInstagram />
            </a>
            <a className="text-[25px] text-sky-500 cursor-pointer">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-[50px]">
          <div className="flex items-end flex-col gap-[10px]">
            <h1 className="font-[600]">Download</h1>
            <h2 className="cursor-pointer">Windows</h2>
            <h2 className="cursor-pointer">Mac OS</h2>
            <h2 className="cursor-pointer">Android</h2>
            <h2 className="cursor-pointer">iOS</h2>
          </div>
          <div className="flex items-end flex-col gap-[10px]">
            <h1 className="font-[600]">Resources</h1>
            <h2 className="cursor-pointer">About</h2>
            <h2 className="cursor-pointer">Shop</h2>
            <h2 className="cursor-pointer">Categories</h2>
            <h2 className="cursor-pointer">Admin</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
