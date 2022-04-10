// imports
import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { Error } from "../Error/Error";
import {
  addQty,
  subtractQty,
  removeFromCart,
} from "../../redux/actions/cartActions";

// styles
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import "./CartView.css";

export default function CartView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.inCart;
  console.log(cartItems);

  // const [subTotal, setSubTotal] = useState(0);
  // const [tax, setTax] = useState(0);
  // const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    // subTotalMethod();
    // taxMethod();
  }, [dispatch, id]);

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // const subTotalMethod = () => {
  //   let addSubTotal = 0;
  //   cartDatabase.products.forEach(item => {
  //     addSubTotal = addSubTotal += item.price * item.qty;
  //   });
  //   setSubTotal(addSubTotal.toFixed(2));
  // };

  // const taxMethod = () => {
  //   let addTax = 0;
  //   addTax = subTotal * 0.08;
  //   setTax(addTax.toFixed(2));
  //   setGrandTotal((parseFloat(subTotal) + parseFloat(tax)).toFixed(2));
  // };

  // const decrease = idx => {
  //   if (cartDatabase.products[idx].qty > 1) {
  //     cartDatabase.products[idx].qty--;
  //     subTotalMethod();
  //   }
  // };

  // const increase = idx => {
  //   cartDatabase.products[idx].qty++;
  //   subTotalMethod();
  // };

  return (
    <div className="structure">
      <Row>
        <Col md={8}>
          <h1>Cart</h1>
          {cartItems.length === 0 ? (
            <Alert variant="danger">
              Cart is Empty. <Link to="/">Go Back</Link>
            </Alert>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={2}>
                      <Link to={`/products/${item.id}`}>
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fluid
                          rounded
                        />
                      </Link>
                    </Col>
                    <Col md={3}>
                      <Link to={`/products/${item.id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.pricePerPound}</Col>
                    <Col md={3}>
                      <Button onClick={() => removeItem(item.id)}>
                        Delete
                      </Button>
                    </Col>
                    {/* Testing cart quantities */}
                    <Col>
                      <h1>Testing Quantity</h1>
                      <h2>Cart Quantity: {item.qty}</h2>
                      <Button onClick={() => dispatch(addQty(item.id))}>
                        +
                      </Button>

                      <Button onClick={() => dispatch(subtractQty(item.id))}>
                        -
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
// col-md-3 d-none d-md-block
{
  /* <Table className="table-styling table table">
        <thead>
          <tr>
            <th className="table-col">Product</th>
            <th className="table-col">Price</th>
            <th className="qty-col  table-col">Quantity</th>
            <th className="table-col total-col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartDatabase.products.map((item, idx) => (
            <tr key={idx}>
              <td>
                <img
                  src={item.image}
                  className="product-img"
                  alt={item.name}
                ></img>
                <br /> <span className="name-color"> {item.name}</span>
                <br />
                {item.category} {item.weight}lb
              </td>
              <td>
                <br />
                <br />${item.price}
              </td>
              <td className="qty-col">
                <br />
                <br />
                <Button
                  onClick={() => {
                    decrease(idx);
                  }}
                  variant=""
                  className="btn-sm  btn-outline-success qty-btn"
                >
                  -
                </Button>
                {item.qty}
                <Button
                  onClick={() => {
                    increase(idx);
                  }}
                  variant=""
                  className="btn-sm btn-outline-success qty-btn"
                >
                  +
                </Button>
                <br />
                <br />
                <Button
                  variant=""
                  className="btn-sm btn-outline-danger qty-btn remove-btn"
                >
                  X
                </Button>
              </td>
              <td className="total-col">
                <br />
                <br />${(item.price * item.qty).toFixed(2)}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */
}

{
  /* <div className="col-md-3  sidebar margin checkout-box">
        <div className="checkout-text-structure">
          <div className="checkout-text">
            <h5>SubTotal: ${subTotal} </h5>
            <h5>Tax: ${tax} </h5>
            <h5>Grand Total: ${grandTotal}</h5>
          </div>
          <div className="d-grid gap-2">
            <Button
              href="/payment"
              variant=""
              size="lg"
              className="checkout-btn"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div> */
}
