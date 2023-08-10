import OurStory from "../AboutSection/OurStory";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner";
import Services from "./Services";


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-center text-4xl mt-8">Our Story</h1>
        <OurStory></OurStory>
      </div>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
