import StripeCheckout from "react-stripe-checkout";

const StripePaymentForm = () => {
    const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

    function handleToken(token, addresses){
        console.log({token, addresses})
    }

    return(
        <div>
            <StripeCheckout
            stripeKey={stripeKey}
            token={handleToken}
            autocomplete="off"
            billingAddress
            shippingAddress
            amount={200000}
            name={"Scruptious Coffee"}
            />
        </div>
    )
}
export default StripePaymentForm