import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import productsData from "./products.json";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Basket } from "./components/Basket";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      {/* <ProductList productsData={productsData} /> */}
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/basket" exact Component={Basket} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
