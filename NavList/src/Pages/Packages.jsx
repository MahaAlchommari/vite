import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Travel from "../Components/Travel/Travel";
import img20 from "../assets/img/Rectangle2.png";
const h1Style = {
  color: "#FFF",
  fontFamily: "Yesteryear",
  fontSize: "120px",
  lineHeight: "100px",
};
const Packages = () => {
  return (
    <div>
      <Nav
        backgroundImage={img20}
        h1={<h1 style={h1Style}>Travel With Us</h1>}
      />
      <Travel />
      <Footer />
    </div>
  );
};

export default Packages;
