import "./Title.css";
const Title = (props) => {
  const { p, h1 } = props;
  return (
    <div className="sectionTitle">
      <p className="par">{p}</p>
      <h1 className="title">{h1}</h1>
    </div>
  );
};

export default Title;
