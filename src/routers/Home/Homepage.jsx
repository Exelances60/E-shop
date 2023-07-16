import React, { useEffect, useState } from "react";
import videoBg from "../../assets/1.mp4";
import ProductsHome from "../../componets/ProductsHome/ProductsHome";
import { Fade } from "react-reveal";
import banner from "../../assets/b2.jpg";
const Homepage = () => {
  const [short, setShort] = useState(false);
  const screenFuc = () => {
    if (window.screen.availWidth >= 1006) {
      setShort(false);
    } else {
      setShort(true);
      console.log(window.screen.availWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", screenFuc);

    return () => {
      window.removeEventListener("resize", screenFuc);
    };
  }, []);
  return (
    <>
      <Fade top duration={1500} distance="20%">
        <div className="w-full h-[92vh] flex justify-center items-center">
          <div className="overlay bg-black/[.3] w-full h-[92vh] absolute"></div>
          <video
            className="w-full h-full object-cover"
            src={videoBg}
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute">
            <p className="text-[50px] md:text-[70px] lg:text-[100px] text-white text-center font-loro ease-in duration-300">
              Super value Deals
            </p>
            <h2 className="text-[30px] md:text-[40px] lg:text-[50px] text-center font-bold text-[#038375]">
              On all products
            </h2>
          </div>
        </div>
      </Fade>
      <ProductsHome></ProductsHome>
      <div
        className={`w-full h-[30vh]    bg-auto flex flex-col items-center justify-center ${
          short ? "hidden" : ""
        } `}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-white text-3xl font-mont mb-2">Repair Services</h1>
        <h1 className="text-white text-5xl font-mont mb-2">
          Up To <span className="text-[#ef3637]">70% off- All</span> t-Shirts &
          Accessories
        </h1>
        <button className="w-36 bg-white h-12 border-none rounded-lg font-mont">
          Explore More
        </button>
      </div>
    </>
  );
};

export default Homepage;
