import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          listStyle: "none",
          gap: "20px",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
