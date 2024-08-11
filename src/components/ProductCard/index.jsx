import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IoHeartSharp } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import sale from "../../assets/image/saleImg.png";

const ProductCard = ({ el }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { apfavorite } = useSelector((s) => s);
  const [description, setDescription] = useState(false);

  return (
    <div
      className="w-[300px] h-[400px] bg-gray-50 rounded-[20px] gap-[10px] relative flex items-center flex-col justify-center"
      style={{
        color: "black",
      }}
    >
      <a
        className="absolute top-[20px] right-[20px] text-[20px] text-gray-400 hover:text-red-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        onClick={() => {
          dispatch({ type: "DEL_PRODUCT", payload: el });
          dispatch({ type: "DEL_FAVORITE", payload: el });
          dispatch({ type: "DEL_BASKET", payload: el });
        }}
      >
        <MdClear />
      </a>
      <img
        src={el.price > 1500 ? sale : null}
        alt=""
        className="absolute top-[-5px] left-[-5px] w-[120px]"
      />
      <div className="h-[200px] w-[150px] flex items-center mb-2 justify-center relative">
        <Zoom>
          <img src={el.image} alt="" className="image w-[100%]" />
        </Zoom>
        <div className="absolute right-[-60px] bottom-[-30px] cursor-pointer w-[25px] h-[25px] flex items-center justify-center rounded-2xl border-2 border-solid border-gray-400">
          <a className="text-[15px]">
            {apfavorite.some((item) => item.id === el.id) ? (
              <IoHeartSharp
                className="text-red-600"
                onClick={() => {
                  dispatch({ type: "DEL_FAVORITE", payload: el });
                }}
              />
            ) : (
              <IoHeartOutline
                onClick={() => {
                  dispatch({ type: "GET_FAVORITE", payload: el });
                }}
              />
            )}
          </a>
        </div>
      </div>
      <div
        className="cursor-pointer flex items-center flex-col"
        onClick={() => {
          navigate(`/details/${el.id}`);
        }}
      >
        <div className="flex items-center mt-2.5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div
              className="star"
              style={{ background: el.reiting >= 1 ? "yellow" : "gray" }}
            ></div>
            <div
              className="star"
              style={{ background: el.reiting >= 2 ? "yellow" : "gray" }}
            ></div>
            <div
              className="star"
              style={{ background: el.reiting >= 3 ? "yellow" : "gray" }}
            ></div>
            <div
              className="star"
              style={{ background: el.reiting >= 4 ? "yellow" : "gray" }}
            ></div>
            <div
              className="star"
              style={{ background: el.reiting >= 5 ? "yellow" : "gray" }}
            ></div>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {el.reiting}.0
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <h1 className="text-[22px] font-[700]">{el.name}</h1>
          <a
            className="cursor-pointer"
            onMouseOver={() => {
              setDescription(true);
            }}
            onMouseOut={() => {
              setDescription(false);
            }}
          >
            <PiWarningCircleBold />
          </a>
        </div>
        <div className="flex items-center gap-[7px]">
          <h1 className="text-[18px] text-red-500 font-[600]">
            ${el.price > 1500 ? Math.floor((el.price * 80) / 100) : el.price}
          </h1>
          <strike className="text-gray-500">
            <h1 className="text-[12px] text-gray-500">
              {el.price > 1500 ? `$${el.price}` : null}
            </h1>
          </strike>
        </div>
      </div>
      <div
        className="scroll overflow-y-scroll absolute top-[100px] left-[100px] w-[350px] h-[350px] bg-gray-200 rounded-[30px] p-6"
        onMouseOver={() => {
          setDescription(true);
        }}
        onMouseOut={() => {
          setDescription(false);
        }}
        style={{
          display: description ? "block" : "none",
          zIndex: 47,
        }}
      >
        <div className="">
          <h1 className=" text-[14px] font-[600] w-[300px]">
            {el.description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
