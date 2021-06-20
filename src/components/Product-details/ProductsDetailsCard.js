import styled from "styled-components";
import { ProductContext } from "../../utils/ProductContext";

const ProductsDetailsCard = ({ product }) => {
  return (
    <div>
      <h1>Product</h1>
      <img src={product?.image} alt="item" />
      <div>
        <h2>{product?.title}</h2>
        <p>${product?.price}</p>
        <p>{product?.description}</p>
        <p>{product?.category}</p>
      </div>
    </div>
  );
};

export default ProductsDetailsCard;
