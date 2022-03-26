import React from "react";
import "./Products.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Products = (props) => {
    const { products, onAdd } = props;
    return (
        <div className="col-md-4 ">
            <div className="single-cart shadow">
                <div className="img-area">
                    <img src={products.img} alt="" />
                </div>
                <h4 className="my-3 text-start text-primary">
                    {products.name}
                </h4>
                <div className="add-cart">
                    <button
                        onClick={() => onAdd(products)}
                        className="buy btn btn-warning"
                    >
                        <span className="btn-text">BUY</span>{" "}
                        <AddShoppingCartIcon />
                    </button>
                    <h3>${products.price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Products;
