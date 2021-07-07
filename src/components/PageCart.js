import React from "react";
import { CartProducts } from "./CartProducts";
import { TotalCart } from "./TotalCart";
import { useStateValue } from "../StateProvider";
import "../styles/pagecart.css";

export const PageCart = () => {
  // llamamos a los elementos que deben
  // mostrarse en el carrito
  const [{ basket }] = useStateValue();
  return (
    <main>
      <section className="title-pagecart">
        <h1 className="animate__fadeInUp">Shopping Cart</h1>
        <TotalCart />
      </section>
      <section className="cards-products">
        {basket?.map((product) => {
          return <CartProducts key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
};
