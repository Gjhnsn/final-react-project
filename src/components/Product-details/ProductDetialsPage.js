import React, { useContext } from "react";
import ProductDetailsCard from "./ProductsDetailsCard";

const ProductsDetailsPage = ({ product }) => {
  return (
    <div>
      <ProductDetailsCard product={product} />
    </div>
  );
};

export default ProductsDetailsPage;
