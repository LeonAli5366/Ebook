/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

export const AllProducts = createContext();

const ProductContext = ({ children }) => {
  //  all state
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(1);

  // use effect
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/product/allProducts")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setProducts(data.allProducts);
        }
      });
  }, [refresh]);

  const contextValue = { products, refresh, setRefresh };
  return (
    <AllProducts.Provider value={contextValue}>{children}</AllProducts.Provider>
  );
};

export default ProductContext;
