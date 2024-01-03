import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import img2 from "../assets/img/Rectangle.png";
import Video from "../Components/Video/Video";
import Sightseeing from "../Components/Sightseeing/Sightseeing";
import Trend from "../Components/Trend/Trend";

const h1Style = {
  color: "#FFF",
  fontFamily: "Yesteryear",
  fontSize: "120px",
  lineHeight: "100px",
  textAlign: "center",
};

const About = () => {
  return (
    <>
      <Nav backgroundImage={img2} h1={<h1 style={h1Style}>About Us</h1>} />
      <Sightseeing />
      <Video />
      <Trend />
      <Footer />
    </>
  );
};

export default About;
