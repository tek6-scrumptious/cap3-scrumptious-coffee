import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// styles
import { Navbar, Nav, Form, FormControl, Button, Badge } from "react-bootstrap";
import "./Header.css";
import { BsCart2 } from "react-icons/bs";

export default function Header() {
  const cartQty = useSelector((state) => state.cart);
  const inCart = cartQty.inCart.length;

  return (
    <div className="header">
      <Navbar variant="dark" expand="lg" className="header-container">
        <Link to="/" className="hover web-title">
          Scrumptious Coffee
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-items" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto dropdown-links">
            <Link className="links dropdown-link hover" to="/">
              Home
            </Link>

            <Link className="links dropdown-link hover" to="/products">
              Products
            </Link>

            <Link className="links dropdown-link hover cart-nav" to="/about-us">
              About Us
            </Link>
            <div>
              <Link className="links dropdown-link hover cart-nav" to="/cart">
                <BsCart2 className="cart" />
              </Link>
              <Badge className="badge" bg="success">
                {inCart}
              </Badge>
            </div>
          </Nav>
          <Form className="d-flex search">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
