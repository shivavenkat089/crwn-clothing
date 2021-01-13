import cartActionTypes from './cart.types';

export const toggleCartAction = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemAction = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemAction = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCartAction = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
