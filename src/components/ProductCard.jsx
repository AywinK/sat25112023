import { Rating } from "./Rating";
import "./ProductCard.css";
import { useState } from "react";
import { AddToBasket } from "./AddToBasket";

const ProductCard = ({
  productID,
  imageUrl,
  name,
  price,
  rating,
  categoryArr,
  handleBasketClick,
}) => {
  const [reviewRating, setRewviewRating] = useState(rating || 0);

  const handleReviewRatingChange = (rating) => {
    setRewviewRating(() => rating);
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img className="image" src={imageUrl} />
        <p className="name">{name}</p>
      </div>
      <p className="price">
        {String(price).split(".")[0]}
        <span className="price-fraction">{String(price).split(".")[1]}</span>
      </p>
      <div className="bottom-container">
        <Rating
          reviewRatingChangeHandler={handleReviewRatingChange}
          rating={reviewRating}
        />
        <p className="category">{categoryArr.join(", ")}</p>
        <AddToBasket
          handleBasketClick={handleBasketClick}
          productID={productID}
        />
      </div>
    </div>
  );
};

export { ProductCard };
