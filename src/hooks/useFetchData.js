// import { translate } from "free-translate";
import { useState, useEffect } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchData = (filtro, texto) => {
  // definimos el estado de este hook
  // el estado inicial sera un objeto con un arreglo vacio
  // este estado cargará por defecto
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getProducts(filtro).then((items) => {
      setState({ data: items, loading: false });
      console.log(texto);
    });
  }, [filtro, texto]);

  // regresamos el estado, osea devuelve true
  return state;
};
