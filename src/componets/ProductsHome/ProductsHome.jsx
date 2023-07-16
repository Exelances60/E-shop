import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/products";
import HomeProducts from "../HomeProducts/HomeProducts";

const ProductsHome = () => {
  const { data } = useContext(ProductsContext);
  const [hatFeatured, setHatFeatured] = useState([]);

  useEffect(() => {
    const filter = data.find((val) => val.title === "Hats");
    const { items } = filter || {};
    setHatFeatured(items);
  }, [data]);

  return (
    <div className="w-full h-[450vh] lg:h-[180vh] md:h-[150vh] flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl lg:text-5xl mt-10 font-bold transition duration-300">
        Featured Products
      </h1>
      <h1 className="text-base md:text-xl lg:text-2xl mt-4 md:mb-5 text-[#a1a5a3] transition duration-300">
        Summer Collection New Modern Design
      </h1>
      <div className="w-11/12 h-full flex flex-wrap justify-center items-center">
        {hatFeatured.map((val) => (
          <HomeProducts val={val} key={val.id}></HomeProducts>
        ))}
      </div>
    </div>
  );
};

export default ProductsHome;
