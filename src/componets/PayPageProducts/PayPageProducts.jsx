import React, { useContext } from "react";
import { ProductsContext } from "../../context/products";

const PayPageProducts = ({ val }) => {
  const { basket, setBasket } = useContext(ProductsContext);

  const removeProducts = (val) => {
    const removeFilter = basket.find((item) => {
      return item.id === val.id;
    });
    if (removeFilter) {
      const updataRemove = basket.filter((item) => item.id !== val.id);
      setBasket(updataRemove);
    }
  };

  return (
    <>
      <div
        className=" h-[20%] w-full mb-3 border-b-2 flex justify-around items-center"
        key={val.id}
      >
        <div className=" w-1/6 h-full pb-2 box-border ">
          <img
            src={val.imageUrl}
            alt=""
            className="w-full h-full object-contain "
          ></img>
        </div>
        <h1>{val.name}</h1>
        <h1>
          {val.quantity} x {val.price}$
        </h1>
        <p>{val.price * val.quantity} $</p>
        <p
          className="cursor-pointer"
          onClick={() => {
            removeProducts(val);
          }}
        >
          X
        </p>
      </div>
    </>
  );
};

export default PayPageProducts;
