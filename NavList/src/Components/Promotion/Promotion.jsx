import "./Promotion.css";
import img7 from "../../assets/img/e1.png";
import img8 from "../../assets/img/e2.png";
import CardTwo from "./CardTwo/CardTwo";
const Promotion = () => {
  return (
    <div className="CardTwoL">
      <CardTwo img={img7} h1="Explore Nature" />
      <CardTwo img={img8} h1="Explore Cities" />
    </div>
  );
};

export default Promotion;
