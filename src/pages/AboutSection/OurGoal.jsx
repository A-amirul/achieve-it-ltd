import image6 from "../../assets/AboutSection/image6.png";
import image7 from "../../assets/AboutSection/image7.png";
import image8 from "../../assets/AboutSection/image8.png";

const OurGoal = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-16">
      <div className="hover:bg-gray-400 hover:text-white rounded-2xl">
        <h1 className="text-center text-3xl font-bold py-3">OUR VISION</h1>
        <img className="px-5 h-80" src={image7} alt="" />
        
      </div>
      <div className="hover:bg-gray-400 hover:text-white rounded-2xl">
        <h1 className="text-center text-3xl font-bold py-3">OUR MISSION</h1>
        <img className="px-5 h-80 mx-auto" src={image6} alt="" />
        
      </div>
      <div className="hover:bg-gray-400 hover:text-white rounded-2xl">
        <h1 className="text-center text-3xl font-bold py-3">OUR VALUES</h1>
        <img className="px-5 " src={image8} alt="" />
        
      </div>
    </div>
  );
};
export default OurGoal;
