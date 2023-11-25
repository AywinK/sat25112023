import { useState } from "react";
import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(2);

  const handleClick = (e) => {
    console.log(e.target.parentNode.classList[0], e.target.id);

    if (e.target.parentNode.classList[0] === "rating-gray") {
      setRating(() => Number(e.target.id));
    } else if (e.target.parentNode.classList[0] === "rating") {
    //   setRating((prev) => Number(e.target.id) - prev + 1);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
        onClick={handleClick}
      >
        <p
          style={{
            margin: "10px",
          }}
        >
          Rating: <span>{rating}</span>
        </p>
        <div className="rating-container">
          <span className="rating-gray">
            <span id="1">⭐</span>
            <span id="2">⭐</span>
            <span id="3">⭐</span>
            <span id="4">⭐</span>
            <span id="5">⭐</span>
          </span>
          <span
            style={{
              translate: `-${((5 - rating) / 5) * 13 * 0.98}ch 0px`,
            }}
            className="rating"
          >
            <span id="1">⭐</span>
            <span id="2">⭐</span>
            <span id="3">⭐</span>
            <span id="4">⭐</span>
            <span id="5">⭐</span>
          </span>
        </div>
      </div>
    </>
  );
};

export { Rating };
