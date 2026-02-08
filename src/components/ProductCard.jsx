export default function ProductCard({
  product,
  cart,
  setCart,
  wishlist,
  setWishlist
}) {
  const inWishlist = wishlist.find((item) => item.id === product.id);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      {/* Rating */}
      <p>{"⭐".repeat(product.rating)}</p>

      {/* Buttons */}
      <button onClick={() => setCart([...cart, product])}>
        Add to Cart
      </button>

      <button
        className="wishlist-btn"
        onClick={() =>
          inWishlist
            ? setWishlist(wishlist.filter((i) => i.id !== product.id))
            : setWishlist([...wishlist, product])
        }
      >
        {inWishlist ? "💔 Remove Wishlist" : "❤️ Wishlist"}
      </button>
    </div>
  );
}
