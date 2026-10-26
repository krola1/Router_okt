import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import router provider and our router "map"
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";

// replace App.jsx with a router provider
// through the prop "router" we tell routerprovider where it can find our routing map
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>,
);
