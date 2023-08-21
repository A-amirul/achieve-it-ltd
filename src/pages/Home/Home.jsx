import OurStory from "../AboutSection/OurStory";
import Counter from "../Counter/Counter";
import Banner from "./Banner";
import Clients from "./Clients";
import Reviews from "./Reviews";
import Services from "./Services";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      {/* <BannerSlider></BannerSlider>*/}
      <Welcome></Welcome>
      <Counter></Counter>
      <Services></Services>
      <Clients></Clients>
      <OurStory></OurStory>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
