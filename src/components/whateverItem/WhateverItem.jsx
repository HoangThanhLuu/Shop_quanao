import React from "react";
import "./WhateverItem.css";
import { AiOutlineClose } from "react-icons/ai";
const WhateverItem = () => {
  return (
    <div className="whateverItem">
      <div className="whateverLeft">
        <AiOutlineClose size={60} />
        <AiOutlineClose size={60} />
        <AiOutlineClose size={60} />
        <AiOutlineClose size={60} />
      </div>
      <div className="whateverMid">
        <p className="whateverMid-flash">
          FLASH <br /> SALE
        </p>
        <p className="whateverMid-Up">UP TO 50% OFF</p>
        <p>@Whatever</p>
      </div>

      <div className="whateverRight">
        <AiOutlineClose size={60} />
        <AiOutlineClose size={60} />
        <AiOutlineClose size={60} />
        <AiOutlineClose size={60} />
      </div>
    </div>
  );
};

export default WhateverItem;
