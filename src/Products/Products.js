import React from "react";
import "./Products.css";

const Products = (props) => {
    const { products, onAdd } = props;
    return (
        <div className="col-md-4">
            <div className="single-cart">
                <div className="img-area">
                    <img src={products.img} alt="" />
                </div>
                <h4 className="my-3 text-start text-primary">
                    {products.name}
                </h4>
                <div className="add-cart">
                    <button
                        onClick={() => onAdd(products)}
                        className="buy btn btn-success"
                    >
                        Buy
                    </button>
                    <h3>${products.price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Products;
