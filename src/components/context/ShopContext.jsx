import React, { createContext } from "react";
import all_data from "../assets/all_data";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const contextValue = { all_data };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
