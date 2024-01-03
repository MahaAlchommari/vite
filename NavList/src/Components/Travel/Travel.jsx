import CardFiv from "./CardFiv/CardFiv";
import img21 from "../../assets/img/one2.png";
import img22 from "../../assets/img/two.png";
import img23 from "../../assets/img/three.png";
import img24 from "../../assets/img/four.png";
import img25 from "../../assets/img/fiv.png";
import img26 from "../../assets/img/six.png";
import  "./Travel.css";
const Travel = () => {
  return (
    <div className="travel">
      <CardFiv
        img={img21}
        p1="27, September 2023"
        p2="30+ People"
        h3="Maldives"
        p3="3000 $"
        p4="⭐ 5.0"
      />
      <CardFiv
        img={img22}
        p1="13, October 2023"
        p2="120+ People"
        h3="Switzerland"
        p3="1290 $"
        p4="⭐ 4.9"
      />
      <CardFiv
        img={img23}
        p1="2, November 2022"
        p2="139+ People"
        h3="Berlin"
        p3="2790 $"
        p4="⭐ 5.0"
      />
      <CardFiv
        img={img24}
        p1="14, December 2022"
        p2="50+ People"
        h3="Torronto"
        p3="1110 $"
        p4="⭐ 4.0  "
      />
      <CardFiv
        img={img25}
        p1="20, September 2022"
        p2="80+ People"
        h3="Baku"
        p3="1220 $"
        p4="⭐ 4.5"
      />
      <CardFiv
        img={img26}
        p1="27, August 2022"
        p2="100+ People"
        h3="Chinese"
        p3="2500 $"
        p4="⭐ 5.0"
      />
    </div>
  );
};

export default Travel;
