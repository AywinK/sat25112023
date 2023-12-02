import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useEffect, useState } from "react";
import actionTypes from "./basketReducerFunctions/actionTypes";

const UpdateBasketCardUI = ({ product, dispatch }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const quantityIsZero = quantity === 0;

  useEffect(() => console.log(quantity));

  useEffect(() => {
    setQuantity(() => 1);
  }, [quantityIsZero]);

  return (
    <div className="product-updateUI">
      <button
        onClick={() => {
          setQuantity((prev) => {
            if (!isNaN(Number(quantity)) && quantity > 1) {
              dispatch({
                type: actionTypes.UPDATE_QUANTITY,
                payload: { ...product, quantity: Number(quantity) - 1 },
              });
            }
            if (prev > 1) return prev - 1;
            return prev;
          });
        }}
      >
        <IndeterminateCheckBoxIcon />
      </button>
      <input
        onFocus={() => setQuantity("")}
        onBlur={(e) => {
          setQuantity(() => product.quantity);
          if (!isNaN(Number(quantity)) && quantity) {
            dispatch({
              type: actionTypes.UPDATE_QUANTITY,
              payload: { ...product, quantity: Number(e.target.value) },
            });
          }
          setQuantity(() => Number(e.target.value));
        }}
        onChange={(e) => {
          if (!isNaN(Number(e.target.value)) && Number(e.target.value) < 99) {
            setQuantity(() => Number(e.target.value));
          }
        }}
        type="text"
        value={quantity}
      />
      <button
        onClick={() => {
          setQuantity((prev) => {
            if (!isNaN(Number(quantity))) {
              dispatch({
                type: actionTypes.UPDATE_QUANTITY,
                payload: { ...product, quantity: Number(quantity) + 1 },
              });
            }

            if (prev < 99) return prev + 1;
            return prev;
          });
        }}
      >
        <AddBoxIcon />
      </button>
    </div>
  );
};

export { UpdateBasketCardUI };
