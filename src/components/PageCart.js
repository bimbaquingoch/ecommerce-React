import React, { useState } from "react";
import { CartProducts } from "./CartProducts";
import { TotalCart } from "./TotalCart";
import "../styles/pagecart.css";

export const PageCart = () => {
  const [filtro] = useState(["Men's"]);
  return (
    <main>
      <section className="title-pagecart">
        <h1>Shopping Cart</h1>
        <TotalCart />
      </section>
      <section className="cards-products">
        {filtro.map((elmnt) => {
          return <CartProducts key={elmnt} filtro={filtro} />;
        })}
      </section>
    </main>
  );
};
