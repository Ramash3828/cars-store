import React from "react";
import "./Card.css";

const Card = (props) => {
    const { cartItems } = props;
    return (
        <div className="col-md-4 ">
            <div className="card m-2">
                <h2 className="mb-4">Selected Items</h2>
                <div className="card-item-area">
                    {cartItems.length === 0 && (
                        <h2 className="text-danger">Cart is empty!!!</h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
