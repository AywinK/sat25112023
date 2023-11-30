import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import productsData from "./products.json";
import { useEffect, useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);

  const basketClickHandler = (e, quantity) => {
    const updatedItemObj = {
      id: Number(e.target.value),
      quantity: quantity,
    };
    setBasket((prev) => {
      if (prev.filter((obj) => obj.id === updatedItemObj.id).length) {
        const updatedArr = prev.reduce((acc, el) => {
          if (el.id === updatedItemObj.id) {
            acc.push({
              id: el.id,
              quantity: el.quantity + updatedItemObj.quantity,
            });
            return acc;
          }
          acc.push(el);
          return acc;
        }, []);
        return updatedArr;
      }
      return [...prev, updatedItemObj];
    });
    console.log(`added to basket, id: ${e.target.value}, ${quantity}`);
  };

  const checkIfBasketQuantityIsZero = basket.reduce((acc, el) => {
    if (el.quantity > 0) {
      acc.push(el);
    }
    return acc;
  }, []).length;

  useEffect(() => {
    setBasket(basket => basket.filter(product => product.quantity > 0));
    console.log(checkIfBasketQuantityIsZero+"here")
  }, [checkIfBasketQuantityIsZero]);

  useEffect(() => console.table(basket));

  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home>
            <ProductList
              handleBasketClick={basketClickHandler}
              productsData={productsData}
            />
          </Home>}
        />
        <Route path="/basket" exact element={<Basket basket={basket} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
