import React, { useState } from "react";
import styled from "styled-components";

const ProductsCard = ({
  category = "",
  description = "",
  id = "",
  image = "",
  price = "",
  title = "",
}) => {
  return (
    <Card>
      <ItemImage src={image} alt="item" />
      <ItemName>{title}</ItemName>
      <Price>${price}</Price>
      <Button>View Details</Button>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: black solid 1px;
  border-radius: 20px;
  margin: 15px;
`;

const ItemName = styled.h2`
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  width: 300px;
  text-align: center;
`;

const ItemImage = styled.img`
  height: auto;
  width: 200px;
  margin: 20px;
`;

const Price = styled.p`
  margin: 10px;
  font-family: "Roboto", sans-serif;
`;

const Button = styled.button`
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  padding: 5px 15px;
  border: none;
  background-color: #e0e0e0;
  color: black;
  border-radius: 15px;
  box-shadow: 0px 5px 15px #555;
  &:hover {
    background-color: white;
  }
`;

export default ProductsCard;
