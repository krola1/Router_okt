import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Import RouterProvider and our router configuration ("map")
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";

// RouterProvider replaces App.jsx as the root component
// The "router" prop tells RouterProvider which routes to use
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>,
);
