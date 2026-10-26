import { Link } from "react-router-dom";
import { products } from "../data/products.js";

export default function ProductPage() {
  return (
    <ul>
      {products.map((product) => (
        // key is the react identifier for childs in a list
        // "to" is a spesific prop used by the react-router Link component
        <Link key={product.id} to={`${product.id}`}>
          <li> {product.navn}</li>
        </Link>
      ))}
    </ul>
  );
}
