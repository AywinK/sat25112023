import { useState } from "react";
import "./AddToBasket.css";

const AddToBasket = ({ handleBasketClick, productID }) => {
  const [inputVal, setInputVal] = useState(0);

  const handleInputChange = (e) => {
    console.log(e);
    if (!isNaN(Number(e.target.value))) {
      setInputVal((prev) => {
        if (prev < 10) {
          return Number(e.target.value) || 0;
        } else {
          return prev;
        }
      });
    } else {
      setInputVal(() => 0);
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
        value={productID}
        onClick={(e) => {
          handleBasketClick(e, inputVal);
          setInputVal(() => 0);
        }}
      >
        Add to basket
      </button>
    </div>
  );
};

export { AddToBasket };
