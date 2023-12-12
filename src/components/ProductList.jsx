import { ProductCard } from "./ProductCard";

const testObj = {
  id: 1,
  imageUrl: "https://m.media-amazon.com/images/I/81Fyh2mrw4L._SL1500_.jpg",
  name: "Harry Potter and the Philosopher's Stone: 1/7",
  price: 9.99,
  rating: 3,
  categoryArr: ["Drama", "Thriller"],
};

const testArr = Array(10).fill(testObj);

const ProductList = ({ productsData }) => {
  const stylesObj = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    padding: "auto",
    justifyContent: "space-evenly",
    alignItems: "space-evenly",
  };
  return (
    <div style={stylesObj}>
      {productsData.map((data) => (
        <ProductCard
          key={data.id}
          productID={data.id}
          imageUrl={data.imageUrl}
          name={data.name}
          price={data.price}
          rating={data.rating}
          categoryArr={data.categoryArr}
        />
      ))}
    </div>
  );
};

export { ProductList };
