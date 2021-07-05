import React, { useState } from "react";
import { FiltroCategoria } from "./components/FiltoCategoria";
// import { Header } from "./components/Header";
import ProductItem from "./components/ProductItem";
import Navbar from "./components/Navbar";
import "./styles/index.css";
import "animate.css";
import { PageCart } from "./components/PageCart";

// este archivo es la aplicaion entera,
// se exporta y se utiliza solo en el index.js
const Ecommerce = () => {
  // const [texto, setTexto] = useState(["en"]);
  const [filtro, setFiltro] = useState(["Men's"]);
  // la estructura de este componente esta similar a un HTML
  return (
    <>
      <header className="header">
        {/*<Header setTexto={setTexto} />*/}
        <Navbar />
      </header>
      {(
        <main>
          <section className="btn-categorias">
            <FiltroCategoria setFiltro={setFiltro} filtro={filtro} />
          </section>
          <section className="cards-products">
            {filtro.map((elmnt) => {
              return <ProductItem key={elmnt} filtro={filtro} />;
            })}
          </section>
        </main>
      ) && <PageCart filtro={filtro} />}
    </>
  );
};

export default Ecommerce;
