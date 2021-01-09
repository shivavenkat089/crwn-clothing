import cartActionTypes from './cart.types';

export const toggleCartAction = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemAction = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
