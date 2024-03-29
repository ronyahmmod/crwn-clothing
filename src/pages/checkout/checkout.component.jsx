import React from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../../components/chekcout-item/checkout-item.component';
import { connect } from 'react-redux';
import { selectTotalPriceCount } from '../../redux/cart/cart.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutForm from '../../components/checkout-form/checkout-form.component';

function CheckoutPage({ totlaPriceCount, cartItems }) {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__head">Product</div>
        <div className="checkout__head">Description</div>
        <div className="checkout__head">Quantity</div>
        <div className="checkout__head">Price</div>
        <div className="checkout__head">Remove</div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <div className="checkout__footer">
        <div className="checkout__foot">Total : $ {totlaPriceCount}</div>
        <div className="checkout__warn">
          Please use this card for testing perpose: 4000 0025 0000 3155
        </div>
        <div className="checkout__button">
          <CheckoutForm price={totlaPriceCount} />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totlaPriceCount: selectTotalPriceCount,
});
export default connect(mapStateToProps)(CheckoutPage);
