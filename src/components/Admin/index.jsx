import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Admin = () => {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDes, setInputDes] = useState("");

  const [adminOpen, setAdminOpen] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [adminPassword, setAdminPassword] = useState(false);

  const addToPassword = () => {
    if (passwordValue === "123") {
      setAdminOpen(true);
      setPasswordValue("");
    } else {
      alert("Неверный пароль");
      setPasswordValue("");
    }
  };

  const onChanges = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setInputUrl(reader.result);
    reader.readAsDataURL(file);
  };

  function addToProduct() {
    toast.success("Продукт Добавлен !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    let newProduct = {
      id: Date.now(),
      name: inputName,
      price: inputPrice,
      image: inputUrl,
      category: inputCategory,
      description: inputDes,
      reiting: Math.round(Math.random() * 5),
    };

    dispatch({ type: "GET_PRODUCT", payload: newProduct });
    setInputCategory(""), setInputName("");
    setInputPrice("");
    setInputUrl("");
    setInputDes("");
  }

  return (
    <div className="bg-slate-200 h-[626px] text-black ">
      {adminOpen ? (
        <div className="bg-white absolute top-[150px] left-[340px] w-[900px] rounded-[10px] h-[500px] flex items-center  justify-center gap-[50px]">
          <div className="flex items-center gap-[50px] ">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-[390px] h-[350px] border-2 border-green-900 rounded-lg cursor-pointer bg-gray-50 "
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                onChange={onChanges}
              />
            </label>
            <div className="inputText flex items-center flex-col gap-[10px] ">
              <input
                type="text"
                placeholder="Product Name..."
                className="border-2 border-blue-950 w-[330px] py-[7px] pl-[10px] rounded-[5px]"
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                value={inputName}
              />
              <div className="flex items-center gap-[10px]">
                <input
                  type="Number"
                  placeholder="Price..."
                  className="border-2 border-green-900 w-[160px] py-[7px] pl-[10px] rounded-[5px]"
                  onChange={(e) => {
                    setInputPrice(e.target.value);
                  }}
                  value={inputPrice}
                />
                <select
                  className="cursor-pointer border-2 text-black border-green-900 text-[15px] w-[160px] py-[7px] pl-[10px] rounded-[5px] "
                  onChange={(e) => {
                    setInputCategory(e.target.value);
                  }}
                  value={inputCategory}
                >
                  <option value="">Category...</option>
                  <option value="mobiles">Mobiles</option>
                  <option value="laptops">Laptops</option>
                  <option value="headphones">HeadPhones</option>
                  <option value="monitors">Monitors & TVs</option>
                  <option value="speakers">Speakers</option>
                </select>
              </div>
              <textarea
                className="border-2  border-green-900 w-[330px] h-[180px] pl-[20px] pt-[10px] rounded-[5px]"
                id=""
                placeholder="Product description..."
                onChange={(e) => {
                  setInputDes(e.target.value);
                }}
                value={inputDes}
              ></textarea>
              <button
                className="border-[3px] font-bold mt-[20px] border-green-900 py-[7px] w-[330px] rounded-[5px]"
                onClick={() => {
                  addToProduct();
                }}
              >
                Save
              </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="">
          <div
            className=""
            style={{
              display: adminOpen ? "none" : "block",
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
              display: adminOpen ? "none" : "block",
              position: "fixed",
              top: 150,
              left: 450,
            }}
          >
            <NavLink
            to={'/'}
              className="text-[30px] text-blue-950 absolute cursor-pointer top-[10px] right-[10px]"
            >
              <IoCloseSharp />
            </NavLink>
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
        </div>
      )}
    </div>
  );
};

export default Admin;
