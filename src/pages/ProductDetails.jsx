import { useParams } from "react-router-dom";
import { products } from "../data/products.js";

export default function ProductDetails() {
  // useParams() lets us read the dynamic part of the URL path (e.g. the ":productName" segment)
  // It returns an object, so we destructure out the value we need
  // Note: useParams() always returns values as strings, even if they look like numbers
  const { productName } = useParams();
  // We look for the product whose id matches productName.
  // Since URL params are strings, we convert productName to a Number before comparing.
  // find() returns undefined if no match is found
  const product = products.find(
    (product) => product.id === Number(productName),
  );
  // If no product was found, show a fallback message instead of crashing
  if (!product) return <h1>Dette er ikke i vårt sortiment</h1>;

  // Otherwise, render the product's name
  return (
    <>
      <h1>Se vårt flotte produkt</h1>
      <h1>det heter: {product.navn}</h1>
    </>
  );
}
