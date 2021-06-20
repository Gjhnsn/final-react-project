import React, { useContext } from "react";
import ProductsCard from "./ProductsCard";
import { ProductContext } from "../../utils/ProductContext";
import styled from "styled-components";

export const ProductsList = () => {
  const [products, setProducts] = useContext(ProductContext);

  return (
    <ProList>
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          category={product.category}
        />
      ))}
    </ProList>
  );
};

const ProList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ProductsList;
