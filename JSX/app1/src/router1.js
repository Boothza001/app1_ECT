import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Router() {
  const navStyle = {
    backgroundColor: "#ced",
    padding: "7px",
    textAlign: "center",
  };

  const linkStyle = {
    display: "line-block",
    color: "blue",
    TextDecoration: "none",
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        -&nbsp;
        <Link to="/products" style={linkStyle}>
          Product
        </Link>
        <Link to="/member" style={linkStyle}>
          Member
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact us
        </Link>
        -&nbsp;
      </nav>
    </BrowserRouter>
  )
}
