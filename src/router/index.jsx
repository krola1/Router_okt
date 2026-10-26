import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";

// createBroserRrouter takes in an array as an atgument, this array is populatetd with "routing obcjects"
export const myRouter = createBrowserRouter([
  //a routing object contains two main parts, a url path (string) and a element to render (Component)
  // a elemnent can be imported as a regular component, or written directly inline
  { path: "/", element: <App /> },
  { path: "about", element: <AboutPage /> },

  //wildcard "*" is used to catch all urlpaths that are not defined in the routing array.

  { path: "*", element: <h1>404 not found</h1> },
]);
