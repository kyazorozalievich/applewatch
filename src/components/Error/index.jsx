import React from "react";
import error from "../../assets/image/error.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container w-[90%]">
        <div
          className="flex items-center flex-col cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={error} alt="" className="w-[38%]" />
          <h1 className="text-[60px] tracking-[30px] font-[700] text-red-600">
            ERROR!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Error;
