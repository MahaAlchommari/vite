import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import img2 from "../assets/img/header-bg.png";
import Category from "../Components/Category/Category";
import Trendy from "../Components/Trendy/Trendy";
import Promotion from "../Components/Promotion/Promotion";
const Home = () => {
  return (
    <>
      <Nav
        backgroundImage={img2}
        h1="No matter where you’re going to, 
we’ll take you there"
      />
      <Category />
      <Promotion />
      <Trendy />
      <Footer />
    </>
  );
};

export default Home;
