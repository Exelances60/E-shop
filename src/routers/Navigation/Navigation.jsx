import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductsContext } from "../../context/products";
import OpenWindowProducts from "../../componets/OpenWindowProducts/OpenWindowProducts";

const Navigation = () => {
  const [color, setColor] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const { basket, logIn } = useContext(ProductsContext);

  const scrollFunc = () => {
    if (window.scrollY >= 320) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const toggleWindow = () => {
    setShowWindow(!showWindow);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full flex justify-between h-[8vh] z-50 items-center shadow-2xl ease-in duration-300 ${
          color
            ? "bg-[#e3e6f3] sticky top-0 h-[9vh]"
            : " sticky top-0 bg-[#e3e6f3]/[.9]"
        } `}
      >
        <Link className="ml-[5%] " to="/">
          <div className="text-3xl ">LOGO</div>
        </Link>
        <ul className="flex mr-[15%] md:mr-[10%] lg:mr-[5%]   font-sans ease-in duration-300">
          <Link className="mr-[8%]" to="/shop">
            <li className=" cursor-pointer hover:text-[#6caeac]  duration-300 hover:ease-in">
              Shop
            </li>
          </Link>
          <Link className="mr-[8%] " to="/">
            <li className=" cursor-pointer hover:text-[#6caeac]  duration-300 hover:ease-in">
              Home
            </li>
          </Link>
          <Link
            to="/signup"
            className={`mr-[8%] ${
              logIn !== undefined ? "w-[130px]" : ""
            } ease-in duration-300`}
          >
            <li className=" cursor-pointer hover:text-[#6caeac] duration-300 hover:ease-in ">
              {logIn === undefined ? "SignUp" : logIn}
            </li>
          </Link>
          <li
            className="cursor-pointer hover:text-[#6caeac] duration-300 hover:ease-in"
            onClick={toggleWindow}
          >
            Total
            <div
              className={`bg-white absolute w-32 lg:w-60 md:left-[70%] md:w-60 md:top-20 top-14 left-[66%] lg:left-[76%] xl:left-[85%] lg:top-16 h-[30vh] rounded-lg items-center flex flex-col ease-in duration-300 ${
                !showWindow ? "hidden" : ""
              }`}
            >
              <div className="w-[90%] h-[80%] m-auto overflow-scroll">
                {basket.map((val) => {
                  return (
                    <OpenWindowProducts
                      val={val}
                      key={val.id}
                    ></OpenWindowProducts>
                  );
                })}
              </div>
              <Link className="mb-2 box-border" to="/pay">
                <button className="bg-black text-white font-mont hover:bg-white ease-in duration-300 hover:text-black hover:border-solid hover:border-black hover:border-2 w-36 h-8 rounded-xl">
                  GO TO PAY
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
