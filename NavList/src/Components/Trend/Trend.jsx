import img18 from "../../assets/img/about-us-img-2 1.png";
import Title from "../Title/Title";
import CardFour from "./CardFour/CardFour";
import "./Trend.css";
const titleStyle = {
  textAlign: "left",
};
const titleStyle1 = {
  textAlign: "left",
  width: "613px",
  paddingBottom: "25px",
};
const Trend = () => {
  return (
    <div className="sightseeing">
      <div className="oneLineS">
        <div>
          <img src={img18} alt="" className="right" />
        </div>
        <div className="pO">
          <Title
            p={<p style={titleStyle}>Trend</p>}
            h1={
              <h1 style={titleStyle1} className="titleS">
                Our Popular Tour Plans
              </h1>
            }
          />
          <p className="per6">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium.
          </p>
          <div className="flex">
            <CardFour h3="78%" p="Vacations" />
            <CardFour h3="78%" p="Vacations" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
