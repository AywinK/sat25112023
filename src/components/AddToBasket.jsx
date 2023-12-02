import { useState } from "react";
import "./AddToBasket.css";
import actionTypes from "./basketReducerFunctions/actionTypes";

const AddToBasket = ({ dispatch, productData }) => {
  const [inputVal, setInputVal] = useState(0);

  const handleInputChange = (e) => {
    if (Number(e.target.value) > 0 && Number(e.target.value) < 100) {
      setInputVal(() => Number(e.target.value));
    } else {
      setInputVal(0);
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
        type="number"
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
        onClick={(e) => {
          dispatch({type:actionTypes.ADD, payload: {...productData, additionalQuantity: inputVal}});
          setInputVal(() => 0);
        }}
      >
        Add to basket
      </button>
    </div>
  );
};

export { AddToBasket };
