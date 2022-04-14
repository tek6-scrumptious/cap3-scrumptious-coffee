import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StripePaymentForm = (props) => {
  const [orderInformation, setOrderInformation] = useState();
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const navigate = useNavigate();

  function sendOrder() {
    // const url =
    //   "http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/order";
    const url = "http://localhost:8080/order";
    axios
      .post(url, {
        user_id: 1,
        total: parseFloat(props.amount).toFixed(2),
      })
      // .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  function handleToken(token, shipping) {
    const url =
      "http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/create-payment-intent";
    axios
      .post(url, {
        token: token.id,
        amount: props.amount * 100,
      })
      .then((response) => {
        if (response.status === 200) {
          // Clear cart
          sendOrder();
          const orderInfo = {
            shipName: shipping.billing_name,
            billName: shipping.shipping_name,
            billAddress: shipping.billing_address_line1,
            shipAddress: shipping.shipping_address_line1,
            email: token.email,
            last4: token.card.last4,
            total: props.amount,
          };
          setOrderInformation(orderInfo);
          console.log({ token, shipping });
          window.localStorage.setItem("order", JSON.stringify(orderInfo));
          navigate("/order-confirmation");
        }
      })
      .catch((err) => console.log(err));
  }

  console.log(orderInformation);

  return (
    <>
      <StripeCheckout
        stripeKey={stripeKey}
        token={handleToken}
        autocomplete="off"
        billingAddress
        shippingAddress
        amount={props.amount * 100}
        name={"Scrumptious Coffee"}
      />
    </>
  );
};
export default StripePaymentForm;
