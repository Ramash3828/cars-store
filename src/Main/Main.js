import React from "react";
import Products from "../Products/Products";
import "./Main.css";

const Main = (props) => {
    const { products, onAdd } = props;
    console.log(products);
    return (
        <div className="col-md-8">
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
