import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import productsData from "./products.json";

function App() {
  return (
    <>
      <Header />
      <ProductList productsData={productsData} />
      <Footer />
    </>
  );
}

export default App;
