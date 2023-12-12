import { BasketProductCard } from "./BasketProductCard";
import {BasketContext} from "../contexts/BasketContext";
import { useContext } from "react";

const Basket = () => {
  const { basket } = useContext(BasketContext);
  return (
    <div>
      <h1>Basket Screen</h1>
      {basket.map((product) => (
        <BasketProductCard
          key={product.productID}
          data={product}
        />
      )).reverse()}

      <hr
        style={{
          marginTop: "5px",
          border: "3px ridge #787878",
          borderRadius: "20px"
        }}
      />

      <p style={{
        textAlign: "end",
        fontSize: "0.6em",
        fontStyle: "italic"
      }}>Subtotal: £{basket.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2).split(/(?<=\d)(?=(?:\d{3})+(?:\.\d+)?$)/).join(",")}</p>
      <p style={{
        textAlign: "end",
        fontSize: "0.65em",
        fontWeight: "500"
      }}

      >Total (inc. VAT): £{(basket.reduce((total, product) => total + product.quantity * product.price, 0) * 1.2).toFixed(2).split(/(?<=\d)(?=(?:\d{3})+(?:\.\d+)?$)/).join(",")}</p>
    </div>
  );
};

export { Basket };
