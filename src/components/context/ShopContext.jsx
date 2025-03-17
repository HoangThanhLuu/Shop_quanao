import React, { createContext } from "react";
import data_product from "../assets/data";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ props }) => {
  const contextValue = { data_product };
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>;
};

export default ShopContextProvider;
