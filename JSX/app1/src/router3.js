import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './navlink.css';
import Product from "./products";
import Home from "./home";
import Member from "./member";

export default function Router3() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink to="/" className={({isActive}) => isActive?"active_menu":"menu"}style={({ isActive }) => {
                    return{
                        fontWeight: isActive ? "bold" : ""
                    };
                }}>Home</NavLink> -&nbsp;

                <NavLink to="/products" className={({isActive}) => isActive?"active_menu":"menu"}>Product</NavLink> -&nbsp;
                <NavLink to="/member" className={({isActive}) => isActive?"active_menu":"menu"}>Member</NavLink> -&nbsp;

                <NavLink to="/products" className="menu" activeClassName="active_menu">Products</NavLink> -&nbsp;
                <NavLink to="/member" className="menu" activeClassName="active_menu">Member</NavLink> -&nbsp;
                <NavLink to="/contact" className="menu" activeClassName="active_menu">Contact Us</NavLink> -&nbsp;
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/member" element={<Member />} />
                <Route path="/contact" element={<div style={{ textAlign: 'center' }}>Contact Page</div>} />
                <Route path="/*" element={<div style={{ textAlign: 'center' }}>Error 404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}
