
import { useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartView from "./components/CartView";
import CartContext from "./contexts/CartContext";
import { cartReducer } from "./reducers/cart";


function App() {

  const [cart, dispatch] = useReducer(cartReducer, [])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="container">
      <CartContext.Provider value={{ cart, dispatch }}>
        <Navbar title="Shop-IT" />

        <button onClick={toggleCart} className="btn btn-primary btn-sm">
          {isCartOpen ? "Hide" : "Show"} Cart
        </button>

        {isCartOpen && <CartView />}
        {!isCartOpen && <ProductList />}

      </CartContext.Provider>
    </div>
  );
}

export default App;
