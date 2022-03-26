import React from "react";
import Products from "../Products/Products";
import "./Main.css";

const Main = (props) => {
    const { products, onAdd } = props;

    return (
        <div className="col-md-8 order-2 order-md-1">
            <div className="row main m-2">
                {products.map((product) => (
                    <Products
                        key={product.id}
                        onAdd={onAdd}
                        products={product}
                    ></Products>
                ))}
            </div>
        </div>
    );
};

export default Main;
