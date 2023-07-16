import React, { useContext } from "react";
import { ProductsContext } from "../../context/products";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const ShopProducts = ({ val }) => {
  const { basket, setBasket, checkBasket } = useContext(ProductsContext);
  const productUrl = `/product/${val.id}`; // Ürün ID'sine dayalı URL oluşturma
  return (
    <>
      <Fade top duration={1500} distance="5%" key={val.id}>
        <div className="bg-[##dfdfdf] w-[80%] h-[80%] mt-5 md:w-[30%] md:h-[55%] lg:w-[20%] lg:h-[50%] md:mb-5 mr-5 mb-2 lg:mt-5 rounded-3xl border-2 border-[#eaeeee] shadow-md flex flex-col">
          <div className="w-[90%] h-[65%] md:w-[90%] md:h-[65%] lg:w-[90%] lg:h-[65%] bg-[#f0f0f0] m-auto mt-5 rounded-xl">
            <img
              src={val.imageUrl}
              alt=""
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          <div className="h-[35%] pl-5 box-border pt-5 font-mont text-2xl">
            <p>{val.name}</p>
            <p>{val.price}$</p>

            {/* Ürün ID'sine dayalı özel ürün sayfasına yönlendirme */}
            <button
              type="button"
              className="bg-[#74ac9a] rounded-2xl md:w-[30%] lg:w-[35%] w-[30%]  font-loro text-[#f0f0f0] box-border focus:ring focus:ring-green-600"
              onClick={() => {
                setBasket(checkBasket(basket, val));
              }}
            >
              Add
            </button>
            <Link to={productUrl}>
              <button
                type="button"
                className="bg-[#74ac9a] rounded-2xl md:w-[30%] lg:w-[35%] w-[30%] ml-2  font-loro text-[#f0f0f0] box-border focus:ring focus:ring-green-600"
              >
                view
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ShopProducts;
