import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectToggleCartDropDown = createSelector(
  [selectCart],
  (cart) => cart.toggleCartDropdown
);

export const selectTotalPriceCount = createSelector(
  [selectCartItems],
  (items) => items.reduce((acc, car) => acc + (car.price * car.quantity), 0)
);
