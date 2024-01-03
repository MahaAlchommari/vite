import "./CardFiv.css";
const CardFiv = (props) => {
  const { img, p1, p2, h3, p3, p4 } = props;
  return (
    <div className="cardFiv">
      <img src={img} alt="" />
      <div className="partTwot">
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
      <h3 className="tit">{h3}</h3>
      <p className="paragraph">
        Qui tempore voluptate qui quia commodi rem praesentium alias et.
      </p>
      <div className="lastT">
        <p>{p3}</p>
        <p>{p4}</p>
      </div>
    </div>
  );
};

export default CardFiv;
