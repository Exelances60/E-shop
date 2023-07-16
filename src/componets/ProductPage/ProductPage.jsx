import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products";

const ProductPage = () => {
  const { id } = useParams();
  const { data, basket, setBasket, checkBasket } = useContext(ProductsContext);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const foundProducts = data.map((val) => val.items);
    const findProducts = foundProducts.map((items) =>
      items.find((item) => item.id === Number(id))
    );
    const nonUndefinedProduct = findProducts.find(
      (product) => product !== undefined
    );
    setCurrentProduct(nonUndefinedProduct);
  }, [id, data]);

  if (!currentProduct) {
    return <div>Loading...</div>;
  }
  const { name, imageUrl, price } = currentProduct;
  return (
    <div className=" w-full h-[92vh]">
      <div className="bg-white w-[90%] h-full m-auto flex items-center flex-wrap lg:flex-nowrap">
        <div className="bg-[#f0f0f0] h-[60%] w-[100%] rounded-2xl">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-contain rounded-2xl"
          ></img>
        </div>
        <div className="ml-5 font-mont text-4xl">
          <h1>{name}</h1>
          <h1>{price}$</h1>
          <h1>
            1
            <button
              type="button"
              className="bg-[#74ac9a] rounded-lg mb-5 md:w-[30%] lg:w-[10%] w-[30%] ml-10  font-loro text-[#f0f0f0] box-border focus:ring focus:ring-green-600"
              onClick={() => {
                setBasket(checkBasket(basket, currentProduct));
              }}
            >
              Add
            </button>
          </h1>
          <h1>Products Details</h1>
          <p className="text-base w-[100%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
