import { Rating } from "./Rating";
import "./ProductCard.css";
import { useState } from "react";
import { AddToBasket } from "./AddToBasket";

const ProductCard = ({

  handleBasketClick, ...productData
}) => {
  const { productID,
    imageUrl,
    name,
    price,
    rating,
    categoryArr, } = productData;

  const [product, setProduct] = useState(productData);

  const handleReviewRatingChange = (rating) => {
    setProduct(product => {
      console.table({ ...product, rating });
      return { ...product, rating };
    });
  }

  // const [reviewRating, setRewviewRating] = useState(rating || 0);
  // 
  // const handleReviewRatingChange = (rating) => {
  // setRewviewRating(() => rating);
  // };

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
          rating={product.rating || rating}
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
