// define initial state for this reducer
import { cartTypes } from './cart.types';
import { addItemsToCart, removeItemsToCart } from './cart.helper';

const INITIAL_STATE = {
  toggleCartDropdown: false,
  items: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        toggleCartDropdown: !state.toggleCartDropdown,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemsToCart(action.payload, state.items),
      };
    case cartTypes.INCREASE_ITEM_TO_CART:
      return {
        ...state,
        items: addItemsToCart(action.payload, state.items),
      };

    case cartTypes.DECREASE_ITEM_TO_CART:
      return {
        ...state,
        items: removeItemsToCart(action.payload, state.items),
      };

    case cartTypes.REMOVE_ITEM_TO_CART:
      return {
        ...state,
        items: state.items.filter(
          (curItem) => curItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
