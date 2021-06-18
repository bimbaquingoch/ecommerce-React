import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductGrid = ({ producto }) => {
  // productos
  const [nuevosProductos, setNuevosProductos] = useState([""]);
  // evita que la función se vuelva a llamar
  // para que no vuelva hacer la peticion http
  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const url = `https://fakestoreapi.com/products?limit=${producto}`;
    const respuesta = await fetch(url);
    // respuesta http convertida a json
    const data = await respuesta.json();
    // datos de los productos
    const items = data.map((element) => {
      return {
        id: element.id,
        titulo: element.title,
        descripcion: element.description,
        img: element.image,
        precio: element.price,
      };
    });
    setNuevosProductos(items);
  };

  return (
    <main className="product-content">
      {nuevosProductos.map((elmt) => {
        return <ProductItem key={elmt.id} {...elmt} />;
      })}
    </main>
  );
};

export default ProductGrid;
