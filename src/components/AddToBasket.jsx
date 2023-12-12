import { useEffect, useState, useContext } from "react";
import "./AddToBasket.css";
import {BasketContext} from "../contexts/BasketContext";

const AddToBasket = ({productData }) => {

  const { basketDispatch, BasketActionTypes } = useContext(BasketContext);

  const maxQuantityAllowed = 999;
  const minQuantityAllowed = 1;
  const [inputVal, setInputVal] = useState(minQuantityAllowed);
  const isInputValOutOfBound = inputVal > maxQuantityAllowed || inputVal < minQuantityAllowed;
  const validInputValRegex = /\d+/;

  useEffect(() => {
    if (isInputValOutOfBound) setInputVal((prev) => prev > maxQuantityAllowed ? maxQuantityAllowed : minQuantityAllowed);
  }, [isInputValOutOfBound]);

  const handleInputChange = (e) => {
    const inputElVal = e.target.value;
    const inputElValToNum = Number(inputElVal);
    const isInputElValValid = validInputValRegex.test(inputElVal);
    (isInputElValValid && !isInputValOutOfBound && !isNaN(inputElValToNum)) && setInputVal(() => inputElValToNum);
  };

  const handleInputFocus = e => e.target.select();


  return (
    <div className="addToBasketContainer">
      <button
        className="plusMinusBtn"
        onClick={() => {
          if (inputVal > minQuantityAllowed) {
            setInputVal((prev) => prev - 1);
          }
        }}
      >
        -
      </button>
      <input
        className="plusMinusBtn"
        type="text"
        value={inputVal}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <button
        onClick={() => {
          if (inputVal < maxQuantityAllowed) {
            setInputVal((prev) => prev + 1);
          }
        }}
        className="plusMinusBtn"
      >
        +
      </button>
      <button
        className="addBtn"
        value={productData.id}
        onClick={() => {
          basketDispatch({
            type: BasketActionTypes.ADD,
            payload: { ...productData, additionalQuantity: inputVal || 1 },
          });
          setInputVal(() => 1);
        }}
      >
        Add to basket
      </button>
    </div>
  );
};

export { AddToBasket };
