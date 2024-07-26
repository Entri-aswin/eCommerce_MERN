import React from "react";

export const ProductCard = ({product}) => {
    return (
        <article className="product-card">
            <div className="img-container">
                <img src={product.image} alt="" />
            </div>
            <div className="details">
                <h4>{product.title}</h4>
                <div className="rating">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>☆</span>
                </div>
                <div className="price-container">
                    <p className="price">${product.price}</p>
                    <button className="primary-btn btn-small">Add To Cart</button>
                </div>
            </div>
        </article>
    );
};
