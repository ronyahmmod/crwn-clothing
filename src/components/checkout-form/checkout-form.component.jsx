import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './checkout-form.styles.scss';
const CheckoutForm = ({ price }) => {
  const publishableKey =
    'pk_test_51JlkpDC8sYf7tfndST56Li8MQWzQpnaC7b1rRSXHTUYgXDJZ4r9dF5IUNV6EWVLTsjzy8kXfxR8v6apJ1feanHS200wJ4XiCFe';
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      ammount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default CheckoutForm;
