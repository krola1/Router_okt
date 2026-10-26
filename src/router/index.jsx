import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetails";
import ProductPage from "../pages/ProductPage";

// createBrowserRouter takes an array of "route objects" as its argument
export const myRouter = createBrowserRouter([
  // A route object has two main parts: a URL path (string) and an element to render (a component)
  // The element can be an imported component, or written directly inline
  {
    path: "/",
    element: <App />,

    // "children" starts a nested route array — these paths render inside the parent component
    // A child route's component is displayed inside the parent via <Outlet />
    children: [
      { index: true, element: <HomePage /> },

      { path: "products", element: <ProductPage /> },
      // Example: http://localhost:5173/products
      // ":productName" is a dynamic segment — whatever comes after the slash still matches this route
      { path: "products/:productName", element: <ProductDetails /> },
      // Example: http://localhost:5173/products/42
      { path: "about", element: <AboutPage /> },
    ],
  },

  // The wildcard "*" matches any URL not handled by the routes above (catch-all / 404 page)

  { path: "*", element: <h1>404 not found</h1> },
]);
