import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import data from "./fake-data/Data";

import Main from "./Components/Main/Main";
import QuestionAnswer from "./Components/Question-Answer/QuestionAnswer";
import Header from "./Components/Header/Header";

function App() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    // Add to product cart
    const onAdd = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);

        if (exist) {
            alert("This product has been added. Try another....");
        } else {
            setCartItems([...cartItems, { ...product }]);
        }
    };
    // Delete Single item from card
    const onItemDelete = (cardPorduct) => {
        const exist = cartItems.find((item) => item.id === cardPorduct.id);
        if (exist) {
            setCartItems(cartItems.filter((el) => el.id !== cardPorduct.id));
        }
    };

    return (
        <div className="App wrapper">
            <Header></Header>
            <h1 className="my-3">CAR STORES Ltd.</h1>
            <div className="row">
                <Main onAdd={onAdd} products={products}></Main>
                <Card
                    onItemDelete={onItemDelete}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                ></Card>
            </div>
            <QuestionAnswer></QuestionAnswer>
        </div>
    );
}

export default App;
