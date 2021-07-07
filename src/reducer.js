// para poder consumir el state en el index
// inicializamos el estado como un array vacio

export const initialState = {
  basket: [],
};

// es un objeto que vamos a escuchar una accion que sea
// ADD_TO_BASKET
export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
};

// es una funcion que va a recibir un estado y la accion
//
const reduer = (state, accion) => {
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
    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === accion.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("no se puede eliminar el producto");
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reduer;
