import { useState } from "react";
import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(5);
  const emptyArr = [0, 0, 0, 0, 0];

  const handleClick = (e) => {
    console.log(e.target.parentNode.classList[0], e.target.id);
    setRating(() => Number(e.target.id));
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
          {emptyArr.map((el, i) => (
            <span
              id={i + 1}
              key={i}
              className={`star ${i < rating ? "rating" : "rating-gray"}`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export { Rating };
