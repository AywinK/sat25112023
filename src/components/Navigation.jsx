import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/orders",
    text: "Orders",
  },
  {
    id: 3,
    path: "/basket",
    text: "Basket",
  },
  {
    id: 4,
    path: "/checkout",
    text: "Checkout",
  },
];

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
        {data.map((el) => (
          <li key={el.id}>
            <Link to={el.path}>{el.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
