import React, { createContext, useContext, useReducer } from "react";

// creamos el contexto para pasar componentes
// de un elemento a otro
export const StateContex = createContext();

// provee la herramienta para pasar datos de un componente a otro,
export const ProveedorEstado = ({ reducer, initialState, children }) => {
  return (
    <StateContex.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContex.Provider>
  );
};
// permite consumir desde cualquier componente los cambios de
// estado del initialState
export const useStateValue = () => useContext(ProveedorEstado);
