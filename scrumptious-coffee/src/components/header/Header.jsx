import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Searchbar from "../searchbar/Searchbar";

// styles
import { Navbar, Nav, Badge } from "react-bootstrap";
import "./Header.css";
import { BsCart2 } from "react-icons/bs";

export default function Header() {
  const cartQty = useSelector((state) => state.cart);
  const inCart = cartQty.inCart;
  const badgeCounter = () => {
    let totalInCart = 0;
    for (let i = 0; i < inCart.length; i++) {
      totalInCart += inCart[i].qty;
    }
    return totalInCart;
  };

  return (
    <div className="header">
      <Navbar variant="dark" expand="lg" className="header-container">
        <Link to="/" className="hover web-title">
          Scrumptious Coffee
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="nav-items"
          id="nav-links"
        />
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
              <Badge className="badge" bg="">
                <p className="badge-counter">{badgeCounter()}</p>
              </Badge>
            </div>
            {!window.localStorage.getItem("userId") ? (
              <>
                <Link className="links dropdown-link hover" to="/login">
                  Login
                </Link>


              </>
            ) : (
              <></>
            )}
          </Nav>
          <Searchbar />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
