import React, { useState } from "react";
import { BsCaretDown } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUp } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import elkart from "../../assets/image/elkart.png";
import visa from "../../assets/image/visa.png";
import mbank from "../../assets/image/mbank1.webp";
import { MdClear } from "react-icons/md";
import axios from "axios";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsCard = ({ el }) => {
  const { apbasket, count } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [iconPlus, setIconPlus] = useState(false);
  const [iconMines, setIconMines] = useState(false);
  const [elClick, setElclick] = useState(false);
  const [viClick, setViclick] = useState(false);
  const [mbClick, setMbclick] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  function addElkart() {
    setElclick(true);
    setViclick(false);
    setMbclick(false);
  }
  function addVisa() {
    setElclick(false);
    setViclick(true);
    setMbclick(false);
  }
  function addMbank() {
    setElclick(false);
    setViclick(false);
    setMbclick(true);
  }
  function plusIcon() {
    setIconPlus(true);
    setTimeout(() => {
      setIconPlus(false);
    }, 200);
  }
  function minesIcon() {
    setIconMines(true);
    setTimeout(() => {
      setIconMines(false);
    }, 200);
  }
  function DataProduct() {
    if (
      inputName.trim() === "" ||
      inputPhone.trim() === "" ||
      inputAddress.trim() === ""
    ) {
      alert("Заполните пустые ячейки");
    } else {
      setModalOpen(true);
    }
  }
  //telegram
  function submitForTelegram() {
    let my_id = `-1002229799825`;
    let token = `7130485277:AAHbd3IW1W07NrlTazHutIYzqtNCPNdD2qs`;
    let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

    let newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
        User Name:${inputName}
        User Address:${inputAddress}
        User Phone:${inputPhone}
        `,
    };

    axios.post(api_key, newProduct);
    setModalOpen(false);
    setInputName("");
    setInputAddress("");
    setInputPhone("");
  }
  //telegram
  //history
  function submitForHistory() {
    let newHistory = {
      id: Date.now(),
      name: inputName,
      phone: inputPhone,
      address: inputAddress,
      date: new Date().toLocaleTimeString(),
    };
    dispatch({ type: "GET_HISTORY", payload: newHistory });
    setModalOpen(false);
    setInputName("");
    setInputAddress("");
    setInputPhone("");
  }
  //history

  function allProduct() {
    toast.success("Заказ Отправлен!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    submitForTelegram();
    submitForHistory();
  }

  return (
    <>
      <div className="flex items-center gap-[100px]">
        <div className="flex items-center gap-[50px] mt-[50px]">
          <div className="w-[300px] h-[400px] bg-gray-300 rounded-[10px] flex items-center  justify-center">
            <Zoom>
              <img src={el?.image} alt="" className="w-[100%] h-[30vh]" />
            </Zoom>
          </div>
          <div className="flex items-start flex-col gap-[20px]">
            <h1 className="text-[40px] font-[600]">{el?.name}</h1>
            <div className="flex items-center gap-[7px]">
              <h1 className="text-[25px] text-red-500 font-[600]">
                $
                {el.price > 1500
                  ? Math.floor((el.price * 80) / 100) * count
                  : el.price * count}
              </h1>
              <strike className="text-gray-500">
                <h1 className="text-[15px] text-gray-500">
                  {el.price > 1500 ? `$${el.price}` : null}
                </h1>
              </strike>
            </div>
            <div className="flex items-center mt-2.5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <div
                  className="star"
                  style={{ background: el?.reiting >= 1 ? "yellow" : "gray" }}
                ></div>
                <div
                  className="star"
                  style={{ background: el?.reiting >= 2 ? "yellow" : "gray" }}
                ></div>
                <div
                  className="star"
                  style={{ background: el?.reiting >= 3 ? "yellow" : "gray" }}
                ></div>
                <div
                  className="star"
                  style={{ background: el?.reiting >= 4 ? "yellow" : "gray" }}
                ></div>
                <div
                  className="star"
                  style={{ background: el?.reiting >= 5 ? "yellow" : "gray" }}
                ></div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {el?.reiting}.0
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="flex items-center justify-around w-[80px] h-[40px] rounded-[5px] border-2 border-solid border-blue-950">
                <h1 className="text-[20px] font-[600]">{count}</h1>
                <div className="flex items-center flex-col">
                  <a
                    className="text-[18px] cursor-pointer"
                    onClick={() => {
                      plusIcon();
                      dispatch({ type: "PLUS", payload: 1 });
                    }}
                  >
                    {iconPlus ? <BsCaretUpFill /> : <BsCaretUp />}
                  </a>
                  <a
                    className="text-[18px] cursor-pointer"
                    onClick={() => {
                      minesIcon();
                      dispatch({ type: "MINES", payload: 1 });
                    }}
                  >
                    {iconMines ? <BsCaretDownFill /> : <BsCaretDown />}
                  </a>
                </div>
              </div>
              <button className="w-[180px] h-[40px] border-2 border-solid border-blue-950 rounded-[5px] flex items-center justify-center">
                {apbasket.some((item) => item.id === el.id) ? (
                  <h1
                    className="flex items-center gap-[5px] text-[18px] font-[600]"
                    onClick={() => {
                      dispatch({ type: "DEL_BASKET", payload: el });
                    }}
                  >
                    In the Basket
                    <BsFillCartCheckFill className="text-green-600" />
                  </h1>
                ) : (
                  <h1
                    className="flex items-center gap-[5px] text-[18px] font-[600]"
                    onClick={() => {
                      dispatch({ type: "GET_BASKET", payload: el });
                    }}
                  >
                    Add to Basket
                    <BsCart className="" />
                  </h1>
                )}
              </button>
            </div>
            <div className="flex items-center gap-[10px]">
              <h1 className="text-[20px] font-[600]">Share:</h1>
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
            <div className="flex items-center gap-[20px]">
              <div className="w-[140px] h-[80px] bg-gray-300 flex items-center justify-center rounded-[5px]">
                <img src={elkart} alt="" className="w-[80%]" />
              </div>
              <div className="w-[140px] h-[80px] bg-gray-300 flex items-center justify-center rounded-[5px]">
                <img src={visa} alt="" className="w-[80%]" />
              </div>
              <div className="w-[140px] h-[80px] bg-gray-300 flex items-center justify-center rounded-[5px]">
                <img src={mbank} alt="" className="w-[80%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-[20px]">
          <h1 className="text-[30px] font-[600]">Send an Order</h1>
          <div className="flex items-start flex-col gap-[10px]">
            <input
              type="text"
              placeholder="User Name..."
              className="w-[350px] h-[40px] text-black  flex items-start pl-[10px] border-b-2 border-b-solid border-b-gray-400 outline-none"
              onChange={(e) => {
                setInputName(e.target.value);
              }}
              value={inputName}
            />
            <input
              type="number"
              placeholder="User Phone..."
              className="w-[350px] h-[40px]  text-black flex items-start pl-[10px] border-b-2 border-b-solid border-b-gray-400 outline-none"
              onChange={(e) => {
                setInputPhone(e.target.value);
              }}
              value={inputPhone}
            />
            <input
              type="text"
              placeholder="User Address..."
              className="w-[350px] h-[40px]  text-black flex items-start pl-[10px] border-b-2 border-b-solid border-b-gray-400 outline-none"
              onChange={(e) => {
                setInputAddress(e.target.value);
              }}
              value={inputAddress}
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <h1 className="w-[220px] rounded-[5px] font-[600] h-[40px] border-2 border-solid border-gray-400 flex items-center justify-center">
              {el.name}
            </h1>
            <h1 className="w-[120px] rounded-[5px] font-[600] h-[40px] border-2 border-solid border-gray-400 flex items-center justify-center">
              {el.price > 1500
                ? Math.floor((el.price * 80) / 100) * count
                : el.price * count}
              $
            </h1>
          </div>
          <div className="flex items-center justify-center gap-[50px]">
            <div className="w-[15%] flex items-center gap-[5px]">
              <a
                className="cursor-pointer text-[20px]"
                onClick={() => {
                  addElkart();
                }}
              >
                {elClick ? (
                  <MdCheckCircle className="text-green-600" />
                ) : (
                  <MdOutlineRadioButtonUnchecked />
                )}
              </a>
              <img src={elkart} alt="" />
            </div>
            <div className="w-[15%] flex items-center gap-[5px]">
              <a
                className="cursor-pointer text-[20px]"
                onClick={() => {
                  addVisa();
                }}
              >
                {viClick ? (
                  <MdCheckCircle className="text-green-600" />
                ) : (
                  <MdOutlineRadioButtonUnchecked />
                )}{" "}
              </a>
              <img src={visa} alt="" />
            </div>
            <div className="w-[20%] flex items-center gap-[5px]">
              <a
                className="cursor-pointer text-[20px]"
                onClick={() => {
                  addMbank();
                }}
              >
                {mbClick ? (
                  <MdCheckCircle className="text-green-600" />
                ) : (
                  <MdOutlineRadioButtonUnchecked />
                )}
              </a>
              <img src={mbank} alt="" />
            </div>
          </div>
          <button
            className="w-[250px] text-white font-[600] h-[40px] rounded-[5px] bg-blue-900"
            onClick={() => {
              DataProduct();
            }}
          >
            Send
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className=""
        style={{
          display: modalOpen ? "block" : "none",
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
          setModalOpen(false);
        }}
      ></div>
      <div className="text-black">
        <div
          className="w-[450px] h-[300px] bg-white absolute top-[250px] right-[550px] p-5 rounded-[5px]"
          style={{
            display: modalOpen ? "block" : "none",
            zIndex: 99,
          }}
        >
          <a
            className="text-[20px] text-red-600 cursor-pointer absolute top-[10px] right-[10px]"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <MdClear />
          </a>
          <div className="flex items-center flex-col mt-[50px] gap-[10px]">
            <h1 className="text-[25px] font-[700]">Confirm Data</h1>
            <div className="">
              <h1 className="font-[600]">Name: {inputName}</h1>
              <h1 className="font-[600]">Phone: {inputPhone}</h1>
              <h1 className="font-[600]">Address: {inputAddress}</h1>
            </div>
            <button
              className="w-[140px] h-[30px] rounded-[5px] bg-blue-900 text-white font-[600]"
              onClick={() => {
                allProduct();
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
