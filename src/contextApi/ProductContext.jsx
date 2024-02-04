/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

export const AllProducts = createContext();

const ProductContext = ({ children }) => {
  //  all state
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(1);
  const [productSpiner, setProductSpiner] = useState(false);
  // use effect
  useEffect(() => {
    setProductSpiner(true);
    fetch("http://localhost:5000/api/v1/product/allProducts")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setProducts(data.allProducts);
          setProductSpiner(false);
        }
      });
  }, [refresh]);

  const contextValue = {
    products,
    refresh,
    setRefresh,
    productSpiner,
  };
  return (
    <AllProducts.Provider value={contextValue}>{children}</AllProducts.Provider>
  );
};

export default ProductContext;
