export default function Cart({ cart }) {
  return (
    <div className="page">
      <h2>My Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.name} - ₹{item.price}</p>
      ))}
    </div>
  );
}
