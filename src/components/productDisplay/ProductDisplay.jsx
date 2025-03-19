import React, { useContext } from "react";
import "./ProductDisplay.css";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-left-list">
          <img src={product.image} alt="" />
        </div>
      </div>

      <div className="productDisplay-right">
        <div className="productDisplay-right-name">
          <h1>{product.name}</h1>
          <div className="productDisplay-right-start">
            <MdOutlineStar size={30} />
            <MdOutlineStar size={30} />
            <MdOutlineStar size={30} />
            <MdOutlineStar size={30} />
            <MdOutlineStarHalf size={30} />
          </div>
        </div>
        <div className="productDisplay-right-size">
          <div>S</div>
          <div>M</div>
          <div>L</div>
        </div>

        <button
          onClick={() => addToCart(product.id)}
          className="productDisplay-right-btn"
        >
          ADD TO CART
        </button>
        <p className="productDisplay-right-text">
          Discount: Giảm ngay 200.000 VNĐ / 1 sản phẩm 13De Marzo có trị giá
          trên <br /> 2.000.000 đối với những khách hàng từng mua tại Whatever !
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
