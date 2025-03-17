import React from "react";
import "./Item.css";
const Item = (prop) => {
  return (
    <div className="item">
      <img
        style={{ width: "250px", height: "200px" }}
        src={prop.image}
        alt=""
      />
      <p>{prop.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
          <p>{prop.new_price}</p>
        </div>
        {/* <div className="item-prices-old">
          <p>{prop.old_price}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Item;
