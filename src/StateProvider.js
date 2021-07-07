import { createContext, useContext, useReducer } from "react";

// creacion del context API
// para pasar las variables de un componente a otro
export const StateContext = createContext();

// provee la herramienta para pasar las cosas
// de un componente a otro
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// permite consumir desde cualquier componente
// los cambios de estado del initialState
export const useStateValue = () => {
  return useContext(StateContext);
};
