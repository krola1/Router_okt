import { Link } from "react-router-dom";
import { products } from "../data/products.js";

export default function ProductPage() {
  return (
    <ul>
      {products.map((product) => (
        // "key" is how React identifies each item in a list — it only needs to be unique among siblings
        // "to" is the react-router Link prop that sets which path the link navigates to
        <Link key={product.id} to={`${product.id}`}>
          <li> {product.navn}</li>
        </Link>
      ))}
    </ul>
  );
}
