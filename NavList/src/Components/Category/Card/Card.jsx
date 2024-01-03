import "./Card.css";

const Card = (props) => {
  const { img, h3 } = props;

  return (
    <div className="cards">
      <img src={img} alt="image" />
      <h3>{h3}</h3>
      <p className="par">
        sunt qui repellat saepe quo velit aperiam id aliquam placeat.
      </p>
    </div>
  );
};

export default Card;
