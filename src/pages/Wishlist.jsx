export default function Wishlist({ wishlist }) {
  return (
    <div className="page">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
