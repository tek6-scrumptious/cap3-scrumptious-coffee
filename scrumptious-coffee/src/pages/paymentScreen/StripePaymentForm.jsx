import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StripePaymentForm = (props) => {
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const navigate = useNavigate();

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
          navigate("/order-confirmation");
        }
      })
      .catch((err) => console.log(err));
    console.log({ token, shipping });
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
