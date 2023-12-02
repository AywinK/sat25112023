import { useState } from "react";
import "./AddToBasket.css";
import actionTypes from "./basketReducerFunctions/actionTypes";

const AddToBasket = ({ dispatch, productData }) => {
  const [inputVal, setInputVal] = useState(0);

  const handleInputChange = (e) => {
    if (Number(e.target.value) > 0 && Number(e.target.value) < 100) {
      setInputVal(() => Number(e.target.value));
    } else {
      if (inputVal === 0) {
        setInputVal(Number(e.target.value.split("0")));
      } else if (/d+|/.test(e.target.value)) {
        setInputVal(e.target.value);
      }
    }
  };

  return (
    <div className="addToBasketContainer">
      <button
        className="plusMinusBtn"
        onClick={() => {
          if (inputVal > 0) {
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
      />
      <button
        onClick={() => {
          if (inputVal < 99) {
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
          console.log(typeof inputVal);
          dispatch({
            type: actionTypes.ADD,
            payload: { ...productData, additionalQuantity: inputVal || 1 },
          });
          setInputVal(() => 0);
        }}
      >
        Add to basket
      </button>
    </div>
  );
};

export { AddToBasket };
