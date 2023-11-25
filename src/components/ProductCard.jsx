import { Rating } from "./Rating";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="image-container">
        <img
          className="image"
          src="https://m.media-amazon.com/images/I/81Fyh2mrw4L._SL1500_.jpg"
        />
        <p className="name">Harry Potter and the Philosopher's Stone: 1/7</p>
      </div>
      <p className="price">
        9<span className="price-fraction">99</span>
      </p>
      <Rating />
      <p className="category">Drama, Thriller</p>
    </div>
  );
};

export { ProductCard };
