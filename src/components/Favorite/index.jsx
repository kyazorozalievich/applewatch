import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { useNavigate } from "react-router-dom";
import favoriteImg from "../../assets/image/favorite.png";

const Favorite = () => {
  const { apfavorite } = useSelector((s) => s);
  const navigate = useNavigate();
  return (
    <div>
      <div className="container w-[90%]">
        <div className="">
          {apfavorite.length === 0 ? (
            <div
              className="flex items-center flex-col justify-center cursor-pointer gap-[20px] mt-[50px]"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={favoriteImg} alt="" className="w-[30%]" />
              <h1 className="text-[40px] tracking-[3px] font-[600]">
                FAVORITE EMPTY!
              </h1>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-[30px]">
              {apfavorite.map((el) => (
                <ProductCard el={el} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
