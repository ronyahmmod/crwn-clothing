import React from 'react';
import './cart-item-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
const CartItemDropdown = ({ items, history, dispatch }) => {
  return (
    <div className="cart-item-dropdown">
      {items.length ? (
        <>
          <div className="cart-item-dropdown__items">
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <CustomButton
            onClick={() => {
              history.push('/checkout');
              dispatch(toggleCartDropdown());
            }}
          >
            Checkout
          </CustomButton>
        </>
      ) : (
        <span className="cart-item-dropdown__empty">Your cart is empty</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartItemDropdown));
