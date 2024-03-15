
import { useReducer } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartView from "./components/CartView";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import useOffline from "./hooks/offine";


function App() {
  const offline = useOffline()
  return (
    <div className="container">
      <Navbar title="Shop-IT" />
      <BrowserRouter >
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
        <hr />
        {offline && <div className="alert alert-warning">You are offline</div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
