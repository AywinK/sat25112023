import { Rating } from "./Rating";
import "./ProductCard.css";


const ProductCard = ({ imageUrl, name, price, rating, categoryArr }) => {
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
      <Rating rating={rating} />
      <p className="category">{categoryArr.join(", ")}</p>
    </div>
  );
};

export { ProductCard };
