import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import productsData from "./products.json";
import { useEffect, useState, useReducer } from "react";
import actionTypes from "./components/basketReducerFunctions/actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD:
      console.log(action.type);
      return addProductToBasket(state, action.payload);
    default:
      return state;
  }
}

function addProductToBasket(state, payload) {
  const alreadyContainsProductInState = state.filter(
    (productObj) => productObj.id === payload.id
  ).length;

  if (alreadyContainsProductInState) {
    return state.reduce((acc, product) => {
      if (product.id === payload.id) {
        acc.push({
          ...payload,
          quantity: payload.quantity + payload.additionalQuantity,
        });
      } else {
        acc.push(product);
      }
      return acc;
    }, []);
  }
  return [
    ...state,
    {
      ...payload,
      quantity: payload.additionalQuantity,
      additionalQuantity: 0,
    },
  ];
}

function App() {
  const [basket, dispatch] = useReducer(reducer, []);

  useEffect(() => console.table(basket));

  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home>
              <ProductList dispatch={dispatch} productsData={productsData} />
            </Home>
          }
        />
        <Route path="/basket" exact element={<Basket basket={basket} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
