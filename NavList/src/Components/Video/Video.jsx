import "./Video.css";
import img16 from "../../assets/img/Group 1000001839.png";
import img17 from "../../assets/img/ant-design_play-circle-filled.svg";
import video1 from "../../assets/img/355663467_1619144478595486_4795200657203993128_n.mp4";
const Video = () => {
  return (
    <div>
      <div className="centeredContent">
        <img src={img16} alt="" className="videoImg" />
        <div className="center">
          <h1>Wanderlust</h1>
          <img src={img17} alt="" className="overImage" />
        </div>
      </div>
    </div>
  );
};

export default Video;
