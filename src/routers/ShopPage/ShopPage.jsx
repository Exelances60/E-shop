import React, { useContext } from "react";
import banner2 from "../../assets/b1.jpg";
import { ProductsContext } from "../../context/products";
import ShopProducts from "../../componets/ShopProducts/ShopProducts";

const ShopPage = () => {
  const { data } = useContext(ProductsContext);

  return (
    <>
      <div className=" w-full h-[92vh]">
        <div className="w-full h-[45%] bg-white">
          <div className="bg-black/[.5] w-full h-[41.5%] absolute flex flex-col items-center justify-center">
            <h1 className="text-white font-mont text-7xl">#fashion</h1>

            <h1 className="text-white font-mont text-xl">
              Save mor with coupons & up to 70% off!!
            </h1>
          </div>

          <img
            src={banner2}
            className="w-full h-full object-cover"
            alt=""
          ></img>
        </div>
        <div className="bg-white h-[100%]">
          <div className="w-full flex h-full flex-wrap justify-center items-center">
            {data.map((item, index) => {
              const { items } = item;
              return items.map((val) => {
                return <ShopProducts val={val} key={val.id}></ShopProducts>;
              });
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
