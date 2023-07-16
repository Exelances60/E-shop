import { createContext, useState } from "react";
import DATA from "../shop-data";

export const ProductsContext = createContext({
  data: [],
  setData: () => {},
  basket: [],
  setBasket: () => {},
  checkBasket: () => {},
  logIn: undefined,
  setLogIn: () => {},
});

export const ProductsPrivider = ({ children }) => {
  const [data, setData] = useState(DATA);
  const [basket, setBasket] = useState([]);
  const [logIn, setLogIn] = useState(undefined);
  const checkBasket = (prevData, val) => {
    const filterDataBasket = prevData.find((item) => item.id === val.id);

    if (filterDataBasket) {
      const updateToBasker = prevData.map((item) => {
        if (item.id === val.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updateToBasker;
    } else {
      return [
        ...prevData,
        {
          ...val,
          quantity: 1,
        },
      ];
    }
  };
  const value = {
    data,
    setData,
    basket,
    setBasket,
    checkBasket,
    logIn,
    setLogIn,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
