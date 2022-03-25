import { useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import data from "./fake-data/Data";
import Main from "./Main/Main";
function App() {
    const { products } = data;
    const [cartItems, setCartItem] = useState([]);

    const onAdd = (product) => {
        console.log("click");
    };

    return (
        <div className="App">
            <h1 className="mb-3">CAR STORES Ltd.</h1>
            <div className="row">
                <Main onAdd={onAdd} products={products}></Main>
                <Card cartItems={cartItems}></Card>
            </div>
        </div>
    );
}

export default App;
