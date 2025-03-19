import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../productDisplay/ProductDisplay";
export const Product = () => {
  const { all_data } = useContext(ShopContext);
  const { productId } = useParams();
  console.log(productId);
  const product = all_data.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      <ProductDisplay product={product} />
    </div>
  );
};
