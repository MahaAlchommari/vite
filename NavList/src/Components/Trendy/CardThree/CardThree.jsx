import "./CardThree.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
const CardThree = (props) => {
  const { img, img2, p, h3 } = props;

  return (
    <div className="cardThree">
      <img src={img} alt="image" className="img" />
      <div className="white">
        <img src={img2} alt="" className="flag" />
      </div>
      <div className="secPart">
        <div className="bothLine tw">
          <div className="line">
            <FontAwesomeIcon icon={faCalendar} />
            <p>8 days</p>
          </div>
          <div className="line">
            <FontAwesomeIcon icon={faUser} />
            <p>{p}</p>
          </div>
        </div>
        <div className="bothLine">
          <h3>{h3}</h3>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <p className="p">
          Nam exercitationem commodi et ducimus quia in dolore animi sit
          mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium internos.
        </p>
        <button className="btnL">
          <a href="#" className="link">
            Explore Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default CardThree;
