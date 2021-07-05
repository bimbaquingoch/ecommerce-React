import React from "react";
import { CartProducts } from "./CartProducts";
import { TotalCart } from "./TotalCart";

export const PageCart = ({ filtro }) => {
  return (
    <>
      <section className="title-pagecart">
        <h1>Shopping Cart</h1>
        <TotalCart />
      </section>
      <section className="cards-products">
        {filtro.map((elmnt) => {
          return <CartProducts key={elmnt} filtro={filtro} />;
        })}
      </section>
    </>
  );
};
