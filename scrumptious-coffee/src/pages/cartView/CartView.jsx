// imports & Components
import React from "react";
import Cart from "../../components/cart/Cart";
import Subtotal from "../../components/subtotal/Subtotal";

// styles
import "./CartView.css";

export default function CartView() {
  return (
    <div className="structure">
      <Cart className="cart-comp" />
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
}
