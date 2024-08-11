import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrHistory } from "react-icons/gr";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import watch from "../../assets/image/watch2.webp";

const Header = () => {
  const navigate = useNavigate();
  const { appleproduct, apfavorite, apbasket, darkmode } = useSelector(
    (s) => s
  );
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");
  const [adminOpen, setAdminOpen] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [adminPassword, setAdminPassword] = useState(false);

  const addToPassword = () => {
    if (passwordValue === "123") {
      navigate("/admin");
      setAdminOpen(false);
      setPasswordValue("");
    } else {
      alert("Неверный пароль");
      setPasswordValue("");
    }
  };

  function addToSearch() {
    if (appleproduct.map((el) => el.name === inputSearch)) {
      navigate(`/search/${inputSearch}`);
    } else {
      navigate("*");
    }
  }

  return (
    <>
      <div className="header sticky top-0 h-[100px]">
        <div className="container w-[90%] flex items-center justify-between pt-[20px] gap-[40px] ">
          <div className="w-[100px] flex items-center">
            <img src={watch} alt="" className="w-[30%]" />
            <h1
              className="font-Poppins text-[30px] font-[700] cursor-pointer flex items-center "
              onClick={() => {
                navigate("/");
                setInputSearch("");
              }}
            >
              ShopVerse
            </h1>
          </div>
          <div className="text-[20px] font-[600] flex items-center gap-[50px]">
            <NavLink to={"/"} className=" cursor-pointer">
              About
            </NavLink>
            <NavLink to={"/shop"} className=" cursor-pointer">
              Shop
            </NavLink>
            <NavLink to={"/categories"} className=" cursor-pointer">
              Categories
            </NavLink>
            <NavLink to={"/admin"} className=" cursor-pointer">
              Admin
            </NavLink>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center relative">
              <a
                className="absolute top-[12px] text-black left-[10px] text-[18px] cursor-pointer"
                onClick={() => {
                  addToSearch();
                }}
              >
                <IoSearch />
              </a>
              <input
                type="text"
                className="text-black placeholder:text-black outline-none rounded-[50px] pl-[40px] p-5 w-[250px] h-[40px] bg-gray-400"
                placeholder="Search for “Phones”..."
                onChange={(e) => {
                  setInputSearch(e.target.value);
                }}
                onKeyDown={(e)=> {
                  if (e.key === "Enter") {
                    addToSearch();
                  }
                }}
                value={inputSearch}
              />
            </div>
            <div className=" cursor-pointer relative">
              <h1
                className="absolute top-[-15px] right-[-15px] text-[12px] text-white w-[20px] h-[20px] rounded-[50px] flex items-center pl-[7px] bg-red-500"
                style={{
                  display: apfavorite.length === 0 ? "none" : "block",
                }}
              >
                {apfavorite.length}
              </h1>
              <a
                className="text-[25px]"
                onClick={() => {
                  navigate("/favorite");
                  setInputSearch("");
                }}
              >
                <FiHeart />
              </a>
            </div>
            <div className=" cursor-pointer relative">
              <h1
                className="absolute top-[-15px] right-[-15px] text-[12px] text-white w-[20px] h-[20px] rounded-[50px] flex items-center pl-[7px] bg-red-500"
                style={{
                  display: apbasket.length === 0 ? "none" : "block",
                }}
              >
                {apbasket.length}
              </h1>
              <a
                className="text-[25px]"
                onClick={() => {
                  navigate("/basket");
                  setInputSearch("");
                }}
              >
                <LuShoppingBag />
              </a>
            </div>
            <div className="cursor-pointer">
              <a
                className="text-[25px] "
                onClick={() => {
                  navigate("/history");
                  setInputSearch("");
                }}
              >
                <GrHistory />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          display: adminOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 49,
          padding: "20px",
        }}
        onClick={() => {
          setAdminOpen(false);
        }}
      ></div>
      <div
        className="bg-white z-50 w-[600px] h-[400px] absolute top-[150px] left-[450px] py-[40px] px-[40px] "
        style={{
          display: adminOpen ? "block" : "none",
          position: "fixed",
          top: 150,
          left: 450,
        }}
      >
        <a
          className="text-[30px] text-blue-950 absolute cursor-pointer top-[10px] right-[10px]"
          onClick={() => setAdminOpen(false)}
        >
          <IoCloseSharp />
        </a>
        <div className="flex items-center flex-col mt-[80px] gap-[40px]">
          <input
            type={adminPassword ? "text" : "password"}
            placeholder="Password..."
            className="border-2 border-solid text-black rounded-[5px] border-blue-950 w-[400px] h-[40px] px-[10px]"
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
          />
          <button
            className="w-[200px] rounded-[5px] h-[40px] bg-sky-700 text-white"
            onClick={() => addToPassword()}
          >
            Потвердить
          </button>
          <a
            className=" absolute top-[130px] left-[460px] text-blue-950 cursor-pointer"
            onClick={() => setAdminPassword(!adminPassword)}
          >
            {adminPassword ? <IoEyeSharp /> : <BsFillEyeSlashFill />}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
