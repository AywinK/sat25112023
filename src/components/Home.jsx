import { ProductList } from "./ProductList";
import productsData from "../products.json";

const Home = ({ handleBasketClick }) => {
  return (
    <div>
      <h1>Home</h1>
      <ProductList
        handleBasketClick={handleBasketClick}
        productsData={productsData}
      />
    </div>
  );
};

export { Home };
