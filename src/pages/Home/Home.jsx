import Footer from "../../shared/Footer/Footer";
import OurStory from "../AboutSection/OurStory";
import UserInfo from "../ContactUs/UserInfo";
import Counter from "../Counter/Counter";
import Banner from "./Banner";
import Clients from "./Clients";
import Services from "./Services";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Welcome></Welcome>
      <Counter></Counter>
      <Services></Services>
      <Clients></Clients>
      <OurStory></OurStory>
      <UserInfo></UserInfo>
      <Footer></Footer>
    </>
  );
};

export default Home;
