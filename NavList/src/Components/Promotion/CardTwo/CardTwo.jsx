import "./CardTwo.css";
const CardTwo = (props) => {
  const { img, h1 } = props;

  return (
    <div className="cardTow">
      <img src={img} alt="background" />
      <div>
        <p>Promotion</p>
        <h1>{h1}</h1>
        <button>View Packages</button>
      </div>
    </div>
  );
};

export default CardTwo;
