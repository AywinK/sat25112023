import "./BasketProductCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { UpdateBasketCardUI } from "./UpdateBasketCardUI";
import BasketContextProvider from "../contexts/BasketContext";
import { useContext } from "react";

const BasketProductCard = ({ data }) => {

  const { basketDispatch, BasketActionTypes } = useContext(BasketContextProvider);

  return (
    <div className="basketProductCard-container">
      <img className="product-image" src={data.imageUrl || ""} />
      <h2 className="product-title">{data.name}</h2>
      <h3 className="product-price">£{data.price.toFixed(2)}</h3>
      <DeleteIcon
        className="product-deleteBtn"
        onClick={() => basketDispatch({ type: BasketActionTypes.REMOVE_ITEM, payload: data })}
      />
      <UpdateBasketCardUI product={data} />
    </div>
  );
};

export { BasketProductCard };
