import { Link } from "react-router-dom";

export default function Navbar({ cart, wishlist }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Myntra</h2>

      <Link to="/">Home</Link>
      <Link to="/wishlist">❤️ Wishlist ({wishlist.length})</Link>
      <Link to="/cart">🛒 Cart ({cart.length})</Link>
    </nav>
  );
}
