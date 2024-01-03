import "./Trendy.css";
import Title from "../Title/Title";
import CardThree from "./CardThree/CardThree";
import img9 from "../../assets/img/n1.png";
import img10 from "../../assets/img/n2.png";
import img11 from "../../assets/img/n3.png";
import img12 from "../../assets/img/flag-1.png";
import img13 from "../../assets/img/flag-2.png";
import img14 from "../../assets/img/flag-3.png";

const Trendy = () => {
  return (
    <div className="allSction">
      <Title p="trendy" h1="Our Trending Tour Packages" />
      <div className="CardThree">
        <CardThree
          img={img9}
          img2={img12}
          p="30 People going"
          h3="Switzerland"
        />
        <CardThree img={img10} img2={img13} p="60 People going" h3="Amazon" />
        <CardThree img={img11} img2={img14} p="120 People going" h3="Giza" />
      </div>
    </div>
  );
};

export default Trendy;
