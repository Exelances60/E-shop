import React from "react";

const OpenWindowProducts = ({ val }) => {
  return (
    <>
      <div
        className="w-[98%] m-auto h-18 mt-2 mb-2 flex font-mont hover:text-black ease-in duration-300"
        key={val.id}
      >
        <div className="bg-white w-16 h-full ml-2">
          <img src={val.imageUrl} alt="" className="w-full h-full"></img>
        </div>
        <div className="ml-2">
          <p>{val.name}</p>
          <p>{`${val.price} x ${val.quantity}`}</p>
          <p>{val.price * val.quantity} $</p>
        </div>
      </div>
    </>
  );
};

export default OpenWindowProducts;
