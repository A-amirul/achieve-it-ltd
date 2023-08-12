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

      <div className="max-w-screen-xl mx-auto">
        <Clients></Clients>
        <h1 className="font-bold text-center text-4xl my-8">Our Story</h1>
        <OurStory></OurStory>
        <UserInfo></UserInfo>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
