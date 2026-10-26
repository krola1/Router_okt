import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

// Outlet is a dynamic component, iuts conbtent changes depending on the url.
//outlet checks if ythere are any children-paths matching the url endpoint, and displays them if there is
//Oulet does not specify with child it routes to, it is mainly a tag to access and fetch the children in our router file and display them on the page

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
