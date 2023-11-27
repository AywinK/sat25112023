import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Basket</Link>
        </li>
      </ul>
    </nav>
  );
};
