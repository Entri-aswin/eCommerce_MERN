import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {

    const {id} = useParams();

    console.log(id);

    const [products, setProducts] = useState();

    const fetchProduct = async () => {
        const response = await axios(`https://fakestoreapi.com/products/${id}`);
        console.log(response);
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProduct();
    }, []);








    return (
        <div>
            <section className="section1 container">
                <div className="col1">
                    <img
                        id="productImage"
                        src="https://www.lemurianbazaar.com/assets/front_end/modern/img/product-placeholder.jpg"
                        alt="productIMG"
                    />
                </div>
                <div className="col2">
                    <h1 id="productTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, suscipit</h1>
                    <p id="productDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta saepe, assumenda dolorum voluptatum
                        reiciendis amet cupiditate officia neque incidunt maiores consectetur autem accusantium modi minus beatae
                        tempora, molestias nihil?
                    </p>
                    <h4 className="price">
                        Price: <span id="productPrice">40 $</span>
                    </h4>
                    <div className="btn-container">
                        <button className="primary-btn">ADD to Cart</button>
                        <button className="secondary-btn">Buy Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};
