// styles
import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./CartView.css";
import cartDatabase from "../../cartDatabase.json";

export default function CartView() {
  const [count, setCount] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(()=>{
    subTotalMethod();
    taxMethod();
  },[subTotal])
    
  const subTotalMethod =() =>{
      let addSubTotal = 0
    cartDatabase.products.forEach(item =>{
        addSubTotal = addSubTotal += (item.price * item.qty)
      })
      setSubTotal(addSubTotal.toFixed(2))
    }

    const taxMethod = () =>{
      let addTax = 0;
      addTax = (subTotal*.08);
      setTax(addTax.toFixed(2));
      setGrandTotal((parseFloat(subTotal) + parseFloat(tax)).toFixed(2))
    }
    

  const decrease = (idx) => {
    if (cartDatabase.products[idx].qty > 1) {
      cartDatabase.products[idx].qty--;
      subTotalMethod()
    }
  };

  const increase = (idx) => {
    cartDatabase.products[idx].qty++;
    subTotalMethod()
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{width:'20px'}}></div>
      <Table striped bordered hover className="topMargin">
        <thead>
          <tr>
            <th>Product</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartDatabase.products.map((item, idx) => (

            <tr key={idx}>
              <td><img src={item.image} style={{ height: '100px' }}></img> {item.name}<br />{item.category}</td>
              <td><br /><br />{item.weight}</td>
              <td><br /><br />${item.price}</td>
              <td><br /><br />
                <Button onClick={() => { decrease(idx) }} variant="" className="btn-sm qty-margin btn-outline-success">-</Button>
                {item.qty}
                <Button onClick={() => { increase(idx) }} variant="" className="btn-sm btn-outline-success">+</Button>
              </td>
              <td><br /><br />${(item.price * item.qty).toFixed(2)} </td>
              <td><br /><br /><Button variant="" className="btn-sm btn-outline-danger">X</Button></td>
            </tr>

          ))}

        </tbody>
      </Table>
      <div style={{width:'20px'}} ></div>

      <div className="col-md-3 d-none d-md-block bg-success sidebar margin"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <h5>SubTotal: ${subTotal} </h5><div className="d-grid gap-2">
          <h5>Tax: ${tax} </h5>
          <h5>Grand Total: ${grandTotal}</h5>
          <Button variant="primary" size="lg">
            Checkout
          </Button>

        </div>

      </div>
    </div>
  );
}
