import React, { useState } from "react";
import { FiltroCategoria } from "./components/FiltoCategoria";
import ProductItem from "./components/ProductItem";
import "./styles/index.css";

// este archivo es la aplicaion entera,
// se exporta y se utiliza solo en el index.js
const Ecommerce = () => {
  const [filtro, setFiltro] = useState(["men's clothing"]);
  // la estructura de este componente esta similar a un HTML
  return (
    <>
      <header className="header">
        <h1>soy el header</h1>
      </header>
      <main>
        <section className="btn-categorias">
          <FiltroCategoria setFiltro={setFiltro} />
        </section>
        <section className="cards-products">
          {filtro.map((elmnt) => {
            return <ProductItem key={elmnt} filtro={filtro} />;
          })}
        </section>
      </main>
    </>
  );
};

export default Ecommerce;
