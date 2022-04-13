import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StripePaymentForm = () => {
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const navigate = useNavigate();
  function handleToken(token, shipping) {
    const url = "http://localhost:8080/create-payment-intent";
    // console.log(token);
    axios
      .post(url, {
        token: token.id,
        amount: 500 * 100, // come from the cart redux state
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/order-confirmation");
        }
      })
      .catch((err) => console.log(err));
    console.log({ token, shipping });
  }

  return (
    <div>
      <StripeCheckout
        stripeKey={stripeKey}
        token={handleToken}
        autocomplete="off"
        billingAddress
        shippingAddress
        amount={2.0 * 100}
        name={"Scrumptious Coffee"}
      />
    </div>
  );
};
export default StripePaymentForm;
