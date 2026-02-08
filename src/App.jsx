import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <BrowserRouter>
      <Navbar cart={cart} wishlist={wishlist} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
