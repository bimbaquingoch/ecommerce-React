// para poder consumir el state en el index
// inicializamos el estado como un array vacio

export const initialState = {
  basket: [],
};

// es un objeto que vamos a escuchar una accion que sea
// ADD_TO_BASKET
export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
};

// es una funcion que va a recibir un estado y la accion
//
const reduer = (state, accion) => {
  console.log(accion);
  switch (accion.type) {
    // si alguien envia desde algun componenete
    // una accion de tipo ADD_TO_BASKET
    // entonces retornamos lo que existe
    // actualmente en el estado, lo que esta
    // en basket y lo que hayamos enviado desde la accion
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, accion.item],
      };
    default:
      return state;
  }
};

export default reduer;
