import OurStory from "../AboutSection/OurStory";
import UserInfo from "../ContactUs/UserInfo";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      
      <Services></Services>
      <OurStory></OurStory>
      <UserInfo></UserInfo>
    </>
  );
};

export default Home;
