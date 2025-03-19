import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (prop) => {
  return (
    <div className="item">
      <Link to={`/product/${prop.id}`}>
        <img
          style={{ width: "250px", height: "200px" }}
          src={prop.image}
          alt=""
        />
      </Link>
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
