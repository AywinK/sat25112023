import { FooterLogo } from "./FooterLogo";
import { FooterNavigation } from "./FooterNavigation";
import { Location } from "./Location";
import { Socials } from "./Socials";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "5px",
        flexWrap: "wrap",
      }}
    >
      <FooterLogo />
      <FooterNavigation />
      <Location />
      <Socials />
    </footer>
  );
};

export { Footer };
