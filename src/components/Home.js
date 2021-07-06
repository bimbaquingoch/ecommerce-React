import React, { useState } from "react";
import { FiltroCategoria } from "./FiltoCategoria";
import ProductItem from "./ProductItem";
import "../styles/index.css";
import "animate.css";

export const Home = () => {
  const [filtro, setFiltro] = useState(["Men's"]);
  return (
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
  );
};
