import "./CardFour.css";
const CardFour = (props) => {
  const { h3, p } = props;
  return (
    <div className="CardFour">
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default CardFour;
