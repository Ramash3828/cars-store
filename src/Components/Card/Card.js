import React from "react";
import "./Card.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = (props) => {
    const { cartItems, onItemDelete, setCartItems } = props;
    // Clear All item from card
    const onRemoveAll = () => {
        setCartItems([]);
    };
    // Choose One item
    const onChoose = () => {
        const getRndInteger = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomNum = getRndInteger(0, cartItems.length - 1);
        if (cartItems.length > 0) {
            cartItems.filter((item, index) =>
                index === randomNum ? setCartItems([item]) : []
            );
        }
    };

    return (
        <div className="col-md-4 order-1 order-md-2 sticky-top  sticky-xl-top">
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
                                    <button
                                        onClick={() => onItemDelete(item)}
                                        className="btn"
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            );
                        })}
                    <div className="d-flex justify-content-between flex-wrap w-75 mx-auto">
                        <button
                            onClick={onChoose}
                            className="btn btn-success mb-2"
                        >
                            Choose One
                        </button>
                        <button
                            onClick={onRemoveAll}
                            className="btn btn-danger mb-2"
                        >
                            Choose Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
