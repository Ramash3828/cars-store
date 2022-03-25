import { useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import data from "./fake-data/Data";
import Main from "./Main/Main";
function App() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        console.log(exist);
        if (exist) {
            alert("This product has been added. Try another....");
        } else {
            setCartItems([...cartItems, { ...product }]);
        }
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
