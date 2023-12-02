import "./BasketProductCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { UpdateBasketCardUI } from "./UpdateBasketCardUI";

const BasketProductCard = ({ data, dispatch }) => {
  console.log(data);
  return (
    <div className="basketProductCard-container">
      <img className="product-image" src={data.imageUrl || ""} />
      <h2 className="product-title">{data.name}</h2>
      <h3 className="product-price">£{data.price}</h3>
      <DeleteIcon
        className="product-deleteBtn"
        onClick={() => console.log("delete")}
      />
      <UpdateBasketCardUI dispatch={dispatch} product={data} />
    </div>
  );
};

export { BasketProductCard };
