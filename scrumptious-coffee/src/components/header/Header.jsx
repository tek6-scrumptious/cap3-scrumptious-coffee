import React from "react";
import { Link } from "react-router-dom";

// styles
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import Searchbar from "../searchbar/Searchbar";

export default function Header() {
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

            <Link className="links dropdown-link hover" to="/aboutus">
              About Us
            </Link>
            <Link className="links dropdown-link hover" to="/cart">
              Cart
            </Link>
          </Nav>
          <Searchbar />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
