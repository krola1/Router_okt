import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetails";
import ProductPage from "../pages/ProductPage";

// createBroserRrouter takes in an array as an atgument, this array is populatetd with "routing obcjects"
export const myRouter = createBrowserRouter([
  //a routing object contains two main parts, a url path (string) and a element to render (Component)
  // a elemnent can be imported as a regular component, or written directly inline
  {
    path: "/",
    element: <App />,

    //children starts a new routing array whre the url directs to parent componet
    // the path described in a children component, leads to its parent, and is displayed through an "<Outlet/>"
    children: [
      { index: true, element: <HomePage /> },

      { path: "products", element: <ProductPage /> },
      //http://localhost:5173/products
      // no matter what comes after the ":" it still leads to the same component
      { path: "products/:productName", element: <ProductDetails /> },
      //http://localhost:5173/products/whatever
      { path: "about", element: <AboutPage /> },
    ],
  },

  //wildcard "*" is used to catch all urlpaths that are not defined in the routing array.

  { path: "*", element: <h1>404 not found</h1> },
]);
