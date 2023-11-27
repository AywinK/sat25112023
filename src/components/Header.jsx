import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
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
      <ShoppingBasketIcon fontSize="large" />
    </header>
  );
};

export { Header };
