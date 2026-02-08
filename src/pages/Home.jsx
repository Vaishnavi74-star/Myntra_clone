import { useState } from "react";
import ProductCard from "../components/ProductCard";

const productsData = [
  {
    id: 1,
    name: "Men T-Shirt",
    price: 799,
    category: "Men",
    rating: 4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "Women Kurti",
    price: 1299,
    category: "Women",
    rating: 5,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
  },
  {
    id: 3,
    name: "Shoes",
    price: 2499,
    category: "Men",
    rating: 4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 4,
    name: "Handbag",
    price: 1899,
    category: "Women",
    rating: 5,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c"
  }
];

export default function Home({ cart, setCart, wishlist, setWishlist }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = productsData.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
    );
  });

  return (
    <>
      <div className="filters">
        <input
          className="search-box"
          placeholder="Search products"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
        </select>
      </div>

      <div className="container">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
          />
        ))}
      </div>
    </>
  );
}
