import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = ({ basket }) => {
  return (
    <header
      style={{
        padding: "10px",
        marginBottom: "10px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="amazon lol"
        style={{
          paddingTop: "15px",
          width: "15vw",
          filter: "hue-rotate(90deg) brightness(7)",
        }}
      />
      <button>Accounts & Lists</button>
      <button>Returns & Orders</button>
      <div
        style={{
          justifySelf: "center",
          alignSelf: "center",
          position: "relative"
        }}
      >
        <ShoppingBasketIcon
          style={{
            position: "relative",
            top: "20%",
            left: "-50%"
          }}
          fontSize="large" />
        {!!basket.length &&
          <span
            style={{
              position: "absolute",
              top: "-20%",
              left: "20%",
              fontSize: "0.5em",
              backgroundColor: "red",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
            }}
          >{basket.reduce((acc, product) => acc + product.quantity, 0) > 99 ? 99 : basket.reduce((acc, product) => acc + product.quantity, 0)}
          </span>
        }
      </div>
    </header>
  );
};

export { Header };
