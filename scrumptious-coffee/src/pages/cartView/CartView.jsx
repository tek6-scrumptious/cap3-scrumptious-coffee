// imports & Components
import React from "react";
import Cart from "../../components/cart/Cart";

// styles
import "./CartView.css";
import StripePaymentForm from "../paymentScreen/StripePaymentForm";

export default function CartView() {
  return (
    <div className="cart-structure">
      <Cart className="cart-comp" />
    </div>
  );
}
