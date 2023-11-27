import "./App.css";
import { ProductList } from "./components/ProductList";
import productsData from "./products.json";

function App() {
  return (
    <>
      <ProductList productsData={productsData} />
    </>
  );
}

export default App;
