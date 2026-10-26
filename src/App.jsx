import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

// <Outlet /> is a placeholder — its content changes depending on the current URL.
// It checks the router's children array for a path matching the URL, and renders that component here.
// Outlet doesn't know which child it renders — it just displays whatever route config points to it.

function App() {
  return (
    <>
      <NavBar />

      <div style={{ border: "solid white" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
