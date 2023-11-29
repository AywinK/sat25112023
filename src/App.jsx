import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Basket } from "./components/Basket";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);

  const basketClickHandler = (e, quantity) => {
    console.log(e.target.value);
    console.log(`added to basket, id: ${e.target.value}, ${quantity}`);
  };

  return (
    <Router>
      <Header />
      <Navigation />
      {/* <ProductList productsData={productsData} /> */}
      <Routes>
        <Route
          path="/"
          exact
          element={<Home handleBasketClick={basketClickHandler} />}
        />
        <Route path="/basket" exact element={<Basket basket={basket} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
