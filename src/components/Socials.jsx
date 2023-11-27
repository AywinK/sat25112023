import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Socials = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <a href="#">
        <FacebookIcon fontSize="large" />
      </a>
      <a href="#">
        <TwitterIcon fontSize="large" />
      </a>
      <a href="#">
        <InstagramIcon fontSize="large" />
      </a>
    </div>
  );
};

export { Socials };
