import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountSpan,
} from './cart-icon.styles';

import { toggleCartAction } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountSpan>{itemCount}</ItemCountSpan>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartAction()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
