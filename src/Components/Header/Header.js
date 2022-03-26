import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <a href="/" className="logo">
                <h2>CAR-STORES</h2>
            </a>
            <div className="navbar">
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;
