import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { totalCart } = useContext(ShopContext);
  const [menu, setmenu] = useState("Whatever");
  return (
    <div className="nav">
      <div className="nav-lerf">
        <ul className="nav-menu">
          <li onClick={() => setmenu("Whatever")}>
            <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
              Whatever
            </Link>
            {menu === "Whatever" ? <hr /> : <></>}
          </li>
          <li onClick={() => setmenu("Shop")}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/shop"}
            >
              Shop
            </Link>
            {menu === "Shop" ? <hr /> : <></>}
          </li>
          {/* <li onClick={() => setmenu("Features")}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/features"}
            >
              Features
            </Link>{" "}
            {menu === "Features" ? <hr /> : <></>}
          </li> */}
          <li onClick={() => setmenu("men")}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/men"}
            >
              Men
            </Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li onClick={() => setmenu("women")}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/women"}
            >
              Women
            </Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li onClick={() => setmenu("kid")}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/kid"}
            >
              Kid
            </Link>
            {menu === "kid" ? <hr /> : <></>}
          </li>

          <li onClick={() => setmenu("Support")}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/support"}
            >
              Support
            </Link>
            {menu === "Support" ? <hr /> : <></>}
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="nav-right-input">
          <input id="search" type="text" placeholder="search" />
          <label htmlFor="search">
            <IoIosSearch size="30px" />
          </label>
        </div>
        <div className="nav-right-login-cart">
          <FaRegUser fontSize="25px" />
          <Link to={"/cart"}>
            <MdOutlineShoppingCart size="30px" />
          </Link>
          <div className="nav-cart-accourt">{totalCart()}</div>
        </div>
      </div>
    </div>
  );
};
