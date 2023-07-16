import React, { useContext } from "react";
import { ProductsContext } from "../../context/products";
import PayPageProducts from "../../componets/PayPageProducts/PayPageProducts";

const PayPage = () => {
  const { basket } = useContext(ProductsContext);
  return (
    <div className=" w-[100%] h-[92vh]  pt-10">
      <div className="bg-white w-[70%] h-[90%] m-auto box-border ">
        {basket.map((val) => {
          return <PayPageProducts val={val} key={val.id}></PayPageProducts>;
        })}
      </div>
    </div>
  );
};

export default PayPage;
