import { useParams } from "react-router-dom";
import { products } from "../data/products.js";

export default function ProductDetails() {
  // to access what conmes after the ":" in routing path, we can use "useparams".
  // useparams retuns an obvjevt, so we need to destructure out the varable
  const { productName } = useParams();
  // to verify if a param is valid for a product array. we use javascript and matches the param agins "something" unique.
  // this function  tries to match product ID to the ProductName form useparams. and returns undefinded if not found
  const product = products.find(
    (product) => product.id === Number(productName),
  );
  //this checks if product is undefined, and returns a H1 of it is.
  if (!product) return <h1>Dette er ikke i vårt sortiment</h1>;

  // if product is truthy, this returns html containing the product name
  return (
    <>
      <h1>Se vårt flotte produkt</h1>
      <h1>det heter: {product.navn}</h1>
    </>
  );
}
