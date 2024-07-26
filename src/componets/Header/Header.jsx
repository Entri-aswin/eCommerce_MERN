import React from "react";

export const Header = () => {
    return (
        <div>
            <header>
                <div>
                    <span className="logo">Shopify</span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </nav>
                <div className="cart-wishlist">
                    <img src="images//icons/wishlist.png" alt="" />
                    <img src="images//icons/cart.png" alt="" />
                </div>
            </header>
        </div>
    );
};
