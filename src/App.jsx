import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import productsData from "./products.json";
import { useEffect, useContext } from "react";
import BasketContextProvider from "./contexts/BasketContext";





function App() {
  const { basket } = useContext(BasketContextProvider);

  useEffect(() => console.table(basket));

  return (
    <BasketContextProvider>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home>
                <ProductList productsData={productsData} />
              </Home>
            }
          />
          <Route
            path="/basket"
            exact
            element={<Basket />}
          />
        </Routes>
        <Footer />
      </Router>
    </BasketContextProvider>
  );
}

export default App;
