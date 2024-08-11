import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import ProductCard from "../ProductCard";
import mobile from "../../assets/image/mobile.png";
import laptop from "../../assets/image/laptops.png";
import headphone from "../../assets/image/headphone.png";
import monitor from "../../assets/image/monitor.png";
import speaker from "../../assets/image/speaker.png";
import sneaker from "../../assets/image/sneaker.png";
import s24ultra from "../../assets/image/s24ultra.png";
import s24ultraBg from "../../assets/image/s24ultraBg.png";
import playstation from "../../assets/image/playstation.png";

const About = () => {
  const { appleproduct } = useSelector((s) => s);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addToSortProduct(e) {
    let sort = e.target.value;
    dispatch({ type: "SORT_PRODUCT", payload: sort });
  }

  // function openNike()  {
  //  window.open(`https://www.nike.com/`)
  // }
  // function openPlaystation() {
  //   window.open(`https://www.playstation.com/ru-ua/`)
  //  }

  return (
    <div className="my-[50px]">
      <div className="container w-[90%] flex flex-col">
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-[40px] font-[600]">Trending Categories</h1>
            <h5
              className="flex items-center cursor-pointer gap-[5px] text-[25px] font-[700] w-[200px]"
              onClick={() => {
                navigate("/categories");
              }}
            >
              Show More <GoArrowRight />
            </h5>
          </div>
          <div className="flex items-center mt-[50px] gap-[80px] w-[100%] ">
            <div
              className="flex items-center flex-col gap-[20px] cursor-pointer  w-[400px] h-[200px]"
              onClick={() => {
                navigate("/mobile");
              }}
            >
              <img src={mobile} alt="" className="w-[70%] h-[20vh] " />
              <h1 className="text-[25px] font-[600]">Mobiles</h1>
            </div>
            <div
              className="flex items-center flex-col gap-[20px] cursor-pointer  w-[400px] h-[200px]"
              onClick={() => {
                navigate("/laptop");
              }}
            >
              <img src={laptop} alt="" className="w-[90%] h-[20vh]" />
              <h1 className="text-[25px] font-[600]">Laptops</h1>
            </div>
            <div
              className="flex items-center flex-col gap-[20px] cursor-pointer  w-[400px] h-[200px]"
              onClick={() => {
                navigate("/headphone");
              }}
            >
              <img src={headphone} alt="" className="w-[70%] h-[20vh]" />
              <h1 className="text-[25px] font-[600]">Headphones</h1>
            </div>
            <div
              className="flex items-center flex-col gap-[20px] cursor-pointer  w-[400px] h-[200px]"
              onClick={() => {
                navigate("/monitor");
              }}
            >
              <img src={monitor} alt="" className="w-[100%] h-[20vh]" />
              <h1 className="text-[25px] font-[600]">Monitors & TVs</h1>
            </div>
            <div
              className="flex items-center flex-col gap-[20px] cursor-pointer  w-[400px] h-[200px]"
              onClick={() => {
                navigate("/speaker");
              }}
            >
              <img src={speaker} alt="" className="w-[70%] h-[20vh]" />
              <h1 className="text-[25px] font-[600]">Speakers</h1>
            </div>
          </div>
        </div>
        <div className=" mt-[70px] flex items-center gap-[50px]">
          <div className="scroll-left w-[640px] h-[400px] rounded-[30px] bg-[#FAFAFA]  flex items-center flex-col gap-[10px] p-5">
            <h1 className="text-[40px] font-[600]">Nike, Adidas</h1>
            <h4 className="text-[25px] ">Min 40% OFF</h4>
            <div
              className="flex items-end justify-center"
              style={{
                backgroundImage: `url(${sneaker})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "80%",
                height: "100vh",
              }}
            >
              <button className="w-[150px] h-[40px] bg-orange-600 rounded-[50px] flex items-center text-[20px] justify-center text-white font-[600]">
                Shop Now
              </button>
            </div>
          </div>
          <div className="scroll-right w-[640px] h-[400px] rounded-[30px] bg-[#FAFAFA] flex items-center flex-col gap-[10px] p-5">
            <h1 className="text-[40px] font-[600]">PlayStation 5</h1>
            <h4 className="text-[25px] ">Min 25% OFF</h4>
            <div
              className="flex items-end justify-center"
              style={{
                backgroundImage: `url(${playstation})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "80%",
                height: "100vh",
              }}
            >
              <button className="w-[150px] h-[40px] bg-orange-600 rounded-[50px] flex items-center text-[20px] justify-center text-white font-[600]" onClick={()=> {
                open
              }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[70px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[40px] font-[600]">Popular Products</h1>
            <select
              onChange={(e) => addToSortProduct(e)}
              className="w-[120px] h-[30px] rounded-[5px] outline-none"
            >
              <option value="">Filtration</option>
              <option value="expensive">Expensive</option>
              <option value="cheap">Cheap</option>
            </select>
          </div>
          <div className="flex items-center flex-wrap gap-[30px] mt-[30px]">
            {appleproduct.map((el) =>
              el.reiting === 4 || el.reiting === 5 ? (
                <ProductCard el={el} />
              ) : null
            )}
          </div>
        </div>
        <div className="bg-gray-50 w-[1400px] h-[450px] rounded-[40px] mt-[170px] p-10 flex items-center justify-center gap-[300px]">
          <div
            className="flex items-start justify-end flex-col gap-[20px]"
            style={{
              backgroundImage: `url(${s24ultraBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "40%",
              height: "40vh",
            }}
          >
            <h3 className="text-[30px]">GALAXY SALE IS LIVE NOW</h3>
            <h1 className="text-[50px] font-[700]">Galaxy S24 | S24+</h1>
            <p className="text-[20px]">
              Get up to $1,000 in trade-in credit from participating carriers.
              Terms apply.
            </p>
          </div>
          <div className="">
            <img src={s24ultra} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
