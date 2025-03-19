import React, { createContext, useState } from "react";
import all_data from "../assets/all_data";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_data.length; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prevCartItem) => ({
      ...prevCartItem,
      [itemId]: prevCartItem[itemId] + 1,
    }));
    console.log(cartItem);
  };
  const removeToCart = (itemId) => {
    setCartItem((prevCartItem) => ({
      ...prevCartItem,
      [itemId]: prevCartItem[itemId] - 1,
    }));
  };
  const removeCartAll = (itemId) => {
    setCartItem((prevCartItem) => ({
      ...prevCartItem,
      [itemId]: prevCartItem[itemId] - prevCartItem[itemId],
    }));
  };
  const totalCheckOut = () => {
    let total = 0;

    for (let itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        // Tìm thông tin sản phẩm dựa vào ID(itemId)
        let itemInfo = all_data.find(
          (itemData) => itemData.id === Number(itemId)
        );

        if (itemInfo) {
          // Tính giá của sản phẩm * số lượng và cộng vào tổng
          total += itemInfo.new_price * cartItem[itemId];
        }
      }
    }

    return total;
  };
  const totalCart = () => {
    let total = 0;
    for (let itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        total += cartItem[itemId];
      }
    }
    return total;
  };
  const contextValue = {
    all_data,
    cartItem,
    addToCart,
    removeToCart,
    removeCartAll,
    totalCheckOut,
    totalCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
