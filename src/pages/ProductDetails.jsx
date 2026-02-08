import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Men T-Shirt", price: 799, image: "https://via.placeholder.com/300" },
  { id: 2, name: "Women Kurti", price: 1299, image: "https://via.placeholder.com/300" },
  { id: 3, name: "Shoes", price: 2499, image: "https://via.placeholder.com/300" },
  { id: 4, name: "Handbag", price: 1899, image: "https://via.placeholder.com/300" }
];

export default function ProductDetails({ cart, setCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id == id);

  return (
    <div className="details">
      <img src={product.image} />
      <h2>{product.name}</h2>
      <h3>₹{product.price}</h3>
      <button onClick={() => setCart([...cart, product])}>
        Add to Bag
      </button>
    </div>
  );
}
