import React, { useContext } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../Item/Item";
export const ShopCategory = (props) => {
  const { all_data } = useContext(ShopContext);

  return (
    <div className="ShopCategory">
      <img src={props.banner} alt="" />
      <div className="ShopCategory-products">
        {all_data.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
