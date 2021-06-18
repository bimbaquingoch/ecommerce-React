import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Product from "./Product";

export const Products = () => {
  const [products, setProducts] = useState([1]);

  console.log(products);
  return (
    <>
      <Product setProducts={setProducts} />
      <main className="content">
        {products.map((producto) => {
          return <ProductGrid key={producto} producto={producto} />;
        })}
      </main>
    </>
  );
};
