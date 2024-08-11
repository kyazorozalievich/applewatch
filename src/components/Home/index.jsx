import About from "../About";
import Footer from "../Footer";
import React from "react";
import video from "../../assets/image/video.mp4";
import watchBg from "../../assets/image/watchBg.png";

const Home = () => {
  return (
    <>
      <div className="video-background-container">
        <video autoPlay muted loop className="video-background">
          <source src={video} type="video/mp4" />
        </video>
        <div className="content-overlay">
          <img
            src={watchBg}
            alt=""
            className="scroll-right h-[80vh] absolute right-0"
          />
          <div className="scroll-left container w-[90%] flex items-start text-white flex-col gap-[20px] pt-[100px]">
            <h1 className="text-[30px] ">Sale up to 20% off</h1>
            <h1 className="text-[60px] font-[700]">Apple Watch Ultra 2</h1>
            <p className="text-[25px] font-[400] w-[652px] ">
              The most rugged and capable Apple Watch pushes the limits again.
              Featuring the all-new S9 SiP.
            </p>
            <div className="flex itrems-center gap-[20px] mt-[30px]">
              <button className="text-[20px] w-[150px] h-[40px] rounded-[50px] bg-orange-600 ">
                Shop Now
              </button>
              <button className="text-[20px] w-[150px] h-[40px] rounded-[50px] bg-white text-black ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
