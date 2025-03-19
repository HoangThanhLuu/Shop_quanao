import React, { useContext } from "react";
import "./CartItem.css";
import all_data from "../assets/all_data.js";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext.jsx";
const CartItem = () => {
  const { cartItem, addToCart, removeToCart, removeCartAll, totalCheckOut } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="cartItem-cartHeader">
        <p>Your</p>
        <p>
          Continue Shopping <hr />
        </p>
      </div>
      <div className="classIem-format-main classItem-bottom">
        <p>Product</p>
        <p>Quanlity</p>
        <p>Total</p>
      </div>

      {all_data.map((e, i) => {
        if (cartItem[e.id] > 0) {
          return (
            <div className="classIem-format-main">
              <div className="classIem-format-main-product">
                <img src={e.image} alt="" />
                <div className="classIem-format-main-product-right">
                  <p>{e.name}</p>
                  <p>{e.new_price}</p>
                </div>
              </div>

              <div className="classIem-format-main-quanlity classIem-format-main-right ">
                <div className="classIem-format-main-quanlity-lerf">
                  <button onClick={() => removeToCart(e.id)}>-</button>
                  <p>{cartItem[e.id]}</p>
                  <button onClick={() => addToCart(e.id)}>+</button>
                  <RiDeleteBin6Line
                    onClick={() => removeCartAll(e.id)}
                    size={20}
                  />
                </div>
              </div>
              <div className="classIem-format-main-total">
                <p>{e.new_price * cartItem[e.id]}</p>
              </div>
            </div>
          );
        }
      })}

      <div className="classIem-format-main-bottom-right">
        <div className="classIem-format-main-bottom-right-sub">
          <p>Subtotal</p>
          <p>{totalCheckOut()}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
