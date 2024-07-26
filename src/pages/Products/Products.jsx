import React, { useEffect, useState } from "react";
import { ProductCard } from "../../componets/productCard/ProductCard";
import axios from "axios";

export const Products = () => {
    const [products, setProducts] = useState();

    const fetchProducts = async () => {
        const response = await axios("https://fakestoreapi.com/products");
        console.log(response);
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <section className="section-2 container">
                <div className="similar-products">
                    <h2>Products </h2>
                    <div className="product-list" id="productList">
                        {products?.map((product, index) => (
                            <ProductCard key={product?.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
