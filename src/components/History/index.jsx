import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClear } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { PiBroom } from "react-icons/pi";
import { BsClockHistory } from "react-icons/bs";
import history from "../../assets/image/history.webp";
import { useNavigate } from "react-router-dom";

const History = () => {
  const { aphistory } = useSelector((s) => s);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="container w-[90%]">
        <div className="">
          {aphistory.length === 0 ? (
            <div
              className="flex items-center flex-col justify-center cursor-pointer gap-[20px] mt-[50px]"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={history} alt="" className="w-[30%]" />
              <h1 className="text-[40px] tracking-[3px] font-[600]">
                HISTORY EMPTY!
              </h1>
            </div>
          ) : (
            <div className="">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-[10px] text-[30px] font-[700]">
                  <BsClockHistory />
                  Shipping History
                </h1>
                <h1 className="flex items-center gap-[10px] text-[20px] font-[600] cursor-pointer">
                  Clear History <PiBroom />
                </h1>
              </div>
              <div className="flex items-center flex-wrap gap-[30px] mt-[50px] text-black">
                {aphistory.map((el) => (
                  <div className="w-[300px] h-[200px] relative rounded-[10px] bg-gray-100 gap-[10px] flex items-start flex-col  p-5 ">
                    <a
                      className="absolute top-[10px] cursor-pointer text-[20px] right-[10px]"
                      onClick={() => {
                        dispatch({ type: "DEL_HISTORY", payload: el });
                      }}
                    >
                      <MdClear />
                    </a>
                    <h1 className="history text-[16px] font-[600] flex items-start gap-[5px]">
                      <FaRegUser className="mt-[5px]" />
                      User Name:{" "}
                      <span className="scroll w-[100px] overflow-x-scroll">
                        {el.name}
                      </span>
                    </h1>
                    <h1 className="history text-[16px] font-[600] flex items-start gap-[5px]">
                      <FaPhone className="mt-[5px]" />
                      User Phone:{" "}
                      <span className="scroll w-[100px] overflow-x-scroll">
                        {el.phone}
                      </span>
                    </h1>
                    <h1 className="history text-[16px] font-[600] flex items-start gap-[5px]">
                      <ImLocation2 className="mt-[5px]" />
                      User Address:{" "}
                      <span className="scroll w-[100px] overflow-x-scroll">
                        {el.address}
                      </span>
                    </h1>
                    <h6 className="absolute bottom-[10px] right-[10px] flex items-center gap-[5px] text-[14px] text-gray-600">
                      <MdDateRange />
                      {el.date}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
