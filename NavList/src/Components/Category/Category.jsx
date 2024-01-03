import "./Category.css";
import Title from "../Title/Title";
import Card from "./Card/Card";
import img3 from "../../assets/img/service-1.png";
import img4 from "../../assets/img/service-2.png";
import img5 from "../../assets/img/service-3.png";
import img6 from "../../assets/img/service-4.png";

const Category = () => {
  return (
    <div className="categorySec">
      <Title p="CATEGORY" h1="We Offer Best Services" />
      <div className="category">
        <Card img={img3} h3="Guided Tours" />
        <Card img={img4} h3="Best Flights Options" />
        <Card img={img5} h3="Religious Tours" />
        <Card img={img6} h3="Medical insurance" />
      </div>
    </div>
  );
};

export default Category;
