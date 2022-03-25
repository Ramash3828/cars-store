import { useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import data from "./fake-data/Data";
import Main from "./Main/Main";
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
        <div className="App">
            <h1 className="mb-3">CAR STORES Ltd.</h1>
            <div className="row">
                <Main onAdd={onAdd} products={products}></Main>
                <Card onItemDelete={onItemDelete} cartItems={cartItems}></Card>
            </div>
        </div>
    );
}

export default App;
