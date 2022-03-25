import React from "react";
import "./Card.css";

const Card = (props) => {
    const { cartItems } = props;
    return (
        <div className="col-md-4 ">
            <div className="card m-2 p-3">
                <h2 className="mb-4">Selected Items</h2>
                <div className="card-item-area">
                    {cartItems.length === 0 && (
                        <h2 className="text-danger">Cart is empty!!!</h2>
                    )}
                    <div>
                        <img
                            src="https://freepngimg.com/thumb/car/7-2-car-free-png-image-thumb.png"
                            alt=""
                        />
                        <p>name</p>
                        <p>icon</p>
                    </div>
                    <div className="d-flex justify-content-between w-75 mx-auto">
                        <button>Choose One</button>
                        <button>Choose Again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
