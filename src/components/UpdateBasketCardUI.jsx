import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useEffect, useState, useContext } from "react";
import {BasketContext} from "../contexts/BasketContext";

const UpdateBasketCardUI = ({ product }) => {

  const { basketDispatch, BasketActionTypes } = useContext(BasketContext);

  const maxQuantityAllowed = 9999;
  const minQuantityAllowed = 1;
  const validQuantityRegex = /\d{1,4}/;
  const [quantity, setQuantity] = useState(product.quantity);
  const isQuantityOutOfBound = quantity > maxQuantityAllowed || quantity < minQuantityAllowed;

  useEffect(() => {
    console.log("here")
    basketDispatch({
      type: BasketActionTypes.UPDATE_QUANTITY,
      payload: { ...product, quantity: quantity > maxQuantityAllowed ? maxQuantityAllowed : quantity },
    });
  }, [quantity])

  const handleInputChange = (e) => {
    const inputElVal = e.target.value;
    const inputElValToNum = Number(inputElVal);
    const isInputElValValid = validQuantityRegex.test(inputElVal);
    (isInputElValValid && !isQuantityOutOfBound && !isNaN(inputElValToNum)) && setQuantity(() => inputElValToNum);
  };

  const handleInputFocus = e => e.target.select();
  const handleInputBlur = () => setQuantity(product.quantity);

  return (
    <div className="product-updateUI">
      <IndeterminateCheckBoxIcon
        onClick={() => {
          setQuantity(prev => {
            if (prev > minQuantityAllowed) return prev - 1;
            return minQuantityAllowed;
          });
        }}
      />
      <input
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        type="text" value={quantity} />
      <AddBoxIcon
        onClick={() => {
          setQuantity(prev => {
            if (prev < maxQuantityAllowed) return prev + 1;
            return maxQuantityAllowed;
          });
        }}

      />
    </div>
  );
};

export { UpdateBasketCardUI };
