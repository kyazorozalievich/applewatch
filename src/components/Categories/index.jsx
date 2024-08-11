import React from "react";
import mobile from "../../assets/image/mobile.png";
import laptop from "../../assets/image/laptops.png";
import headphone from "../../assets/image/headphone.png";
import monitor from "../../assets/image/monitor.png";
import speaker from "../../assets/image/speaker.png";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[50px]">
      <div className="container w-[90%] flex items-center flex-wrap gap-[40px]">
        <div
          className="w-[300px] h-[400px] cursor-pointer flex items-center flex-col justify-center rounded-[30px]"
          onClick={() => {
            navigate("/mobile");
          }}
        >
          <div className="w-[70%] h-[300px] flex items-center justify-center ">
            <img src={mobile} alt="" className="w-[80%]" />
          </div>
          <h1 className="text-[35px] font-[600]">Mobiles</h1>
        </div>
        <div
          className="w-[300px] h-[400px] cursor-pointer flex items-center flex-col justify-center rounded-[30px]"
          onClick={() => {
            navigate("/laptop");
          }}
        >
          <div className="w-[70%] h-[300px] flex items-center ">
            <img src={laptop} alt="" className="w-[100%]" />
          </div>
          <h1 className="text-[35px] font-[600]">Laptops</h1>
        </div>
        <div
          className="w-[300px] h-[400px] cursor-pointer flex items-center flex-col justify-center rounded-[30px]"
          onClick={() => {
            navigate("/headphone");
          }}
        >
          <div className="w-[70%] h-[300px] flex items-center ">
            <img src={headphone} alt="" className="w-[80%]" />
          </div>
          <h1 className="text-[35px] font-[600]">HeadPhones</h1>
        </div>
        <div
          className="w-[300px] h-[400px] cursor-pointer flex items-center flex-col justify-center rounded-[30px]"
          onClick={() => {
            navigate("/monitor");
          }}
        >
          <div className="w-[70%] h-[300px] flex items-center ">
            <img src={monitor} alt="" className="w-[100%]" />
          </div>
          <h1 className="text-[35px] font-[600]">Monitors & TVs</h1>
        </div>
        <div
          className="w-[300px] h-[400px] cursor-pointer flex items-center flex-col justify-center rounded-[30px]"
          onClick={() => {
            navigate("/speaker");
          }}
        >
          <div className="w-[70%] h-[300px] flex items-center justify-center ">
            <img src={speaker} alt="" className="w-[80%]" />
          </div>
          <h1 className="text-[35px] font-[600]">Speakers</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
