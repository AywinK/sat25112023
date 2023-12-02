import { useEffect } from "react";
import { BasketProductCard } from "./BasketProductCard";

const Basket = ({ basket, dispatch }) => {
  return (
    <div>
      <h1>Basket Screen</h1>
      {basket.map((product) => (
        <BasketProductCard
          key={product.productID}
          data={product}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export { Basket };
