import Footer from "../../shared/Footer/Footer";
import OurStory from "../AboutSection/OurStory";
import UserInfo from "../ContactUs/UserInfo";
import Banner from "./Banner";
import Clients from "./Clients";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>

      <Services></Services>
      <Clients></Clients>
      <OurStory></OurStory>
      <UserInfo></UserInfo>
      <Footer></Footer>
    </>
  );
};

export default Home;
