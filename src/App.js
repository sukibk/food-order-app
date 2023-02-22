import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
    const [displayCart, setDisplayCart] = useState(false);

    const displayCartHandler = () =>{
    setDisplayCart(true);
    }

    const hideCartHandler = () => {
        setDisplayCart(false);
    }

  return (
    <CartProvider>
        {displayCart && <Cart onClose={hideCartHandler}/>}
      <Header onClick={displayCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
