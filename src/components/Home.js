import React, { useState } from "react";
import { FiltroCategoria } from "./FiltoCategoria";
import ProductItem from "./ProductItem";
import "../styles/index.css";
import "animate.css";

export const Home = () => {
  const [filtro, setFiltro] = useState(["men's clothing"]);

  return (
    <main>
      <section className="btn-categorias">
        <FiltroCategoria setFiltro={setFiltro} />
      </section>
      <section className="cards-products">
        {filtro.map((elmnt) => (
          <ProductItem key={elmnt} filtro={filtro} />
        ))}
      </section>
    </main>
  );
};
