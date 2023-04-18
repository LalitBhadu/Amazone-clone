export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item in cart
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_TO_BASKET":
      //logic for remove item in cart
      return { state };
    default:
      return state;
  }
};

/*
 */

export default reducer;
