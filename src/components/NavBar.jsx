import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ border: "solid white" }}>
      <h2>navbar</h2>
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="about">
          <h1>About</h1>
        </Link>
        <Link to="products">
          <h1>Varer</h1>
        </Link>
      </nav>
    </div>
  );
}
