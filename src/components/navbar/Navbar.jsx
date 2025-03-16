import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [menu, setmenu] = useState("Whatever");
  return (
    <div className="nav">
      <div className="nav-lerf">
        <ul className="nav-menu">
          <li onClick={() => setmenu("Whatever")}>
            <Link to={"/"}>Whatever</Link>
            {menu === "Whatever" ? <hr /> : <></>}
          </li>
          <li onClick={() => setmenu("Shop")}>
            <Link to={"/shop"}>Shop</Link> {menu === "Shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setmenu("Features")}>
            <Link to={"/features"}>Features</Link>{" "}
            {menu === "Features" ? <hr /> : <></>}
          </li>
          <li onClick={() => setmenu("Support")}>
            <Link to={"/support"}>Support</Link>
            {menu === "Support" ? <hr /> : <></>}
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="nav-right-input">
          <input id="search" type="text" placeholder="search" />
          <label for="search">
            <IoIosSearch size="30px" />
          </label>
        </div>
        <div className="nav-right-login-cart">
          <FaRegUser fontSize="25px" />
          <AiOutlineShoppingCart size="30px" />
          <div className="nav-cart-accourt">0</div>
        </div>
      </div>
    </div>
  );
};
