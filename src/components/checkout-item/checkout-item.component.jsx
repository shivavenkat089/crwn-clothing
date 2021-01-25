import { connect } from 'react-redux';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

import {
  clearItemFromCartAction,
  addItemAction,
  removeItemAction,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="checkout item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const dispatchActionToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCartAction(item)),
  addItem: (item) => dispatch(addItemAction(item)),
  removeItem: (item) => dispatch(removeItemAction(item)),
});
export default connect(null, dispatchActionToProps)(CheckoutItem);
