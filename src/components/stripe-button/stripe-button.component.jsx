import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_UxMDq7EjrOH8qoUy0aKUrKej00y5fMvfLg';

  const logo =  require('../../logo.png');

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Fashion Store Ltd.'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is ${price} €`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
