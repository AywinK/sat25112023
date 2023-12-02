import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useEffect, useState } from "react";
import actionTypes from "./basketReducerFunctions/actionTypes";

const UpdateBasketCardUI = ({ product, dispatch }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  useEffect(() => console.log(product.quantity));

  return (
    <div className="product-updateUI">
      <IndeterminateCheckBoxIcon
        onClick={() => {
          if (product.quantity > 1) {
            dispatch({
              type: actionTypes.UPDATE_QUANTITY,
              payload: { ...product, quantity: product.quantity - 1 },
            });
          }
        }}
      />
      <input type="text" value={quantity} />
      <AddBoxIcon
        onClick={() => {
          if (product.quantity < 99) {
            dispatch({
              type: actionTypes.UPDATE_QUANTITY,
              payload: { ...product, quantity: product.quantity + 1 },
            });
          }
        }}
      />
    </div>
  );
};

export { UpdateBasketCardUI };
