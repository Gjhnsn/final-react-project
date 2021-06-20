import React, { useState, useEffect, useContext } from "react";
import ProductsPage from "./products-page/ProductsPage";
import { ProductContext, ProductProvider } from "../utils/ProductContext";
import Nav from "./Nav";
import app from "../styles/app.css";
import ProductsDetailsPage from "./Product-details/ProductDetialsPage";

const App = () => {
  return (
    <ProductProvider>
      <div>
        <Nav />
        <ProductsPage />
        <ProductsDetailsPage />
      </div>
    </ProductProvider>
  );
};

export default App;
