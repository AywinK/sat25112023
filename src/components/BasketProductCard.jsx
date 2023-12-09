import "./BasketProductCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { UpdateBasketCardUI } from "./UpdateBasketCardUI";
import actionTypes from "./basketReducerFunctions/actionTypes";

const BasketProductCard = ({ data, dispatch }) => {
  return (
    <div className="basketProductCard-container">
      <img className="product-image" src={data.imageUrl || ""} />
      <h2 className="product-title">{data.name}</h2>
      <h3 className="product-price">£{data.price.toFixed(2)}</h3>
      <DeleteIcon
        className="product-deleteBtn"
        onClick={() => dispatch({ type: actionTypes.REMOVE_ITEM, payload: data })}
      />
      <UpdateBasketCardUI dispatch={dispatch} product={data} />
    </div>
  );
};

export { BasketProductCard };
