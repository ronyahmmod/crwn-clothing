import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import {
  increaseItemToCart,
  decreaseItemToCart,
  removeItemToCart,
} from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

function CheckoutItem({ item, dispatch }) {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="checkout-item__box">
        <img src={imageUrl} alt={name} className="checkout-item__image" />
      </div>
      <div className="checkout-item__box">{name}</div>

      <div className="checkout-item__box">
        <span onClick={() => dispatch(decreaseItemToCart(item))}>&#706;</span>
        {quantity}
        <span onClick={() => dispatch(increaseItemToCart(item))}>&#707;</span>
      </div>
      <div className="checkout-item__box">{price * quantity}</div>
      <div className="checkout-item__box">
        <div
          className="checkout-item__box--remove"
          onClick={() => dispatch(removeItemToCart(item))}
        >
          &times;
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(CheckoutItem);
