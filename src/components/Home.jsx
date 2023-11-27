import { ProductList } from "./ProductList";
import productsData from "../products.json";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ProductList productsData={productsData} />
    </div>
  );
};

export { Home };
