// imports & Components
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import StripePaymentForm from "../../pages/paymentScreen/StripePaymentForm";

// styles
import { Card } from "react-bootstrap";
import "./Subtotal.css";

export default function Subtotal() {
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const cart = useSelector((state) => state.cart);
  const cartItems = cart.inCart;

  const subTotalMethod = useCallback(() => {
    let addSubTotal = 0;
    cartItems.forEach((item) => {
      addSubTotal = addSubTotal += item.pricePrePound * item.qty;
    });
    setSubTotal(addSubTotal.toFixed(2));
  }, [cartItems]);

  const taxMethod = useCallback(() => {
    let addTax = 0;
    addTax = subTotal * 0.08;
    setTax(addTax.toFixed(2));
    setGrandTotal((parseFloat(subTotal) + parseFloat(tax)).toFixed(2));
  }, [subTotal, tax]);

  useEffect(() => {
    subTotalMethod();
    taxMethod();
  }, [subTotalMethod, taxMethod]);

  return (
    <Card id="subtotal-container">
      <Card.Body>
        <Card.Title id="subtotal-title">Total</Card.Title>
        <div id="subtotal-content">
          <Card.Text className="subtotal total-num">
            Sub Total: ${subTotal}
          </Card.Text>
          <Card.Text className="tax total-num">Tax: ${tax}</Card.Text>
          <Card.Text className="grand-total total-num">
            <strong>Grand Total:</strong> ${grandTotal}
          </Card.Text>
          <StripePaymentForm amount={grandTotal} />
        </div>
      </Card.Body>
    </Card>
  );
}
