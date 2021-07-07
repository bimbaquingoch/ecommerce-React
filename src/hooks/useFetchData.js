import { useState, useEffect } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchData = (filtro) => {
  // definimos el estado de este hook
  // este hace la peticion de getProducts y creamos una version de cargando...
  // el estado inicial sera un objeto con un arreglo vacio
  // este estado cargará por defecto
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getProducts(filtro).then((items) => {
      setState({ data: items, loading: false });
    });
  }, [filtro]);

  // regresamos el estado, osea devuelve true
  return state;
};
