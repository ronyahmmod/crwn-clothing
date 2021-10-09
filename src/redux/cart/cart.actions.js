import { cartTypes } from './cart.types';

export const toggleCartDropdown = () => ({
  type: cartTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
});

export const increaseItemToCart = (item) => ({
  type: cartTypes.INCREASE_ITEM_TO_CART,
  payload: item,
});

export const decreaseItemToCart = (item) => ({
  type: cartTypes.DECREASE_ITEM_TO_CART,
  payload: item,
});

export const removeItemToCart = (item) => ({
  type: cartTypes.REMOVE_ITEM_TO_CART,
  payload: item,
});
