import Title from "../Title/Title";
import "./Sightseeing.css";
import img16 from "../../assets/img/Group.png";
const titleStyle = {
  textAlign: "left",
};
const titleStyle1 = {
  textAlign: "left",
  width: "613px",
  paddingBottom: "25px",
};
const Sightseeing = () => {
  return (
    <div className="sightseeing">
      <div className="oneLineS">
        <div className="pO">
          <Title
            p={<p style={titleStyle}>Promotion</p>}
            h1={
              <h1 style={titleStyle1} className="titleS">
                We Provide You Best Europe Sightseeing Tours
              </h1>
            }
          />
          <p className="par5">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <button className="btnM">
            <a href="#" className="link">
              View Packages
            </a>
          </button>
        </div>
        <div>
          <img src={img16} alt="" className="right" />
        </div>
      </div>
    </div>
  );
};

export default Sightseeing;
