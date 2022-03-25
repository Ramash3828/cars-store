import React from "react";
import "./Card.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = (props) => {
    const { cartItems } = props;
    console.log(cartItems);
    return (
        <div className="col-md-4 ">
            <div className="card m-2 p-3">
                <h2 className="mb-4">Selected Items</h2>
                <div className="card-item-area">
                    {cartItems.length === 0 && (
                        <h2 className="text-danger">Cart is empty!!!</h2>
                    )}
                    {cartItems.length !== 0 &&
                        cartItems.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="card-item d-flex justify-content-between align-items-center w-75 mx-auto mb-2 border px-2"
                                >
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <button className="btn">
                                        <DeleteIcon />
                                    </button>
                                </div>
                            );
                        })}
                    <div className="d-flex justify-content-between w-75 mx-auto">
                        <button className="btn btn-success">Choose One</button>
                        <button className="btn btn-danger">Choose Again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
