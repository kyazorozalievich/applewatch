import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BiLogoShopify } from "react-icons/bi";
import basketImg from "../../assets/image/basket.webp";

const Basket = () => {
  const { apbasket } = useSelector((s) => s);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container w-[90%]">
      <div className="">
        {apbasket.length === 0 ? (
          <div
            className="flex items-center flex-col justify-center cursor-pointer gap-[20px] mt-[50px]"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={basketImg} alt="" className="w-[30%]" />
            <h1 className="text-[40px] tracking-[3px] font-[600]">
              BASKET EMPTY!
            </h1>
          </div>
        ) : (
          <div className="flex items-center flex-wrap gap-[30px]">
            {apbasket.map((el) => (
              <div
                key={el.id}
                className="flex items-center gap-[20px] bg-gray-100 w-[430px] h-[270px] p-5 rounded-[10px]"
              >
                <img
                  src={el.image}
                  alt=""
                  className="w-[40%]"
                  onClick={() => {
                    navigate(`/details/${el.id}`);
                  }}
                />
                <div className="flex items-start flex-col gap-[10px]">
                  <h1 className="text-[25px] font-[600]">{el.name}</h1>
                  <div className="flex items-center gap-[10px]">
                    <h1 className="text-[20px] text-red-600 font-[600]">
                      {el.price > 500
                        ? Math.floor((el.price * 80) / 100)
                        : el.price}
                      $
                    </h1>
                    <a className="cursor-pointer">
                      {apbasket.some((item) => item.id === el.id) ? (
                        <BsFillCartCheckFill
                          className="text-green-600"
                          onClick={() => {
                            dispatch({ type: "DEL_BASKET", payload: el });
                          }}
                        />
                      ) : (
                        <BsCart
                          className=""
                          onClick={() => {
                            dispatch({ type: "GET_BASKET", payload: el });
                          }}
                        />
                      )}
                    </a>
                  </div>
                  <button
                    className="w-[120px] h-[30px] flex items-center justify-center gap-[5px] bg-green-600 rounded-[5px] text-white font-[600]"
                    onClick={() => {
                      navigate(`/details/${el.id}`);
                    }}
                  >
                    Shop Now <BiLogoShopify />
                  </button>
                  <div className="flex items-center mt-2.5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <div
                        className="star"
                        style={{
                          background: el.reiting >= 1 ? "yellow" : "gray",
                        }}
                      ></div>
                      <div
                        className="star"
                        style={{
                          background: el.reiting >= 2 ? "yellow" : "gray",
                        }}
                      ></div>
                      <div
                        className="star"
                        style={{
                          background: el.reiting >= 3 ? "yellow" : "gray",
                        }}
                      ></div>
                      <div
                        className="star"
                        style={{
                          background: el.reiting >= 4 ? "yellow" : "gray",
                        }}
                      ></div>
                      <div
                        className="star"
                        style={{
                          background: el.reiting >= 5 ? "yellow" : "gray",
                        }}
                      ></div>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {el.reiting}.0
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
