import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StripePaymentForm = (props) => {
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const navigate = useNavigate();

  function sendOrder() {
    const url =
      "http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/order";
    let userId = 1;
    if (window.localStorage.getItem("userId")) {
      userId = window.localStorage.getItem("userId");
    }

    axios
      .post(url, {
        user_id: userId,
        total: parseFloat(props.amount).toFixed(2),
      })
      .catch((err) => alert(err));
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
          if (window.localStorage.getItem("order") !== null) {
          } else {
            window.localStorage.setItem(
              "order",
              JSON.stringify({
                id: token.id,
                shipName: shipping.billing_name,
                billName: shipping.shipping_name,
                billAddress: shipping.billing_address_line1,
                shipAddress: shipping.shipping_address_line1,
                email: token.email,
                last4: token.card.last4,
                total: props.amount,
              })
            );
          }
          navigate("/order-confirmation");
        }
      })
      .catch((err) => alert(err));
  }

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
