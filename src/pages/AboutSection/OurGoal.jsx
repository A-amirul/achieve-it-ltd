import image6 from "../../assets/AboutSection/image6.png";
import image7 from "../../assets/AboutSection/image7.png";
import image8 from "../../assets/AboutSection/image8.png";

const OurGoal = () => {
  return (
    <div className="bg-[#ffffff] py-20">
    
    <div className="grid md:grid-cols-3 gap-8 my-16 mx-auto max-w-screen-xl">
      <div className=" hover:text-white rounded-2xl border-2 shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 hover:bg-sky-500 duration-500">
        <h1 className="text-center text-3xl font-bold py-3">OUR VISION</h1>
        <img className="px-5 h-80" src={image7} alt="" />
        <p className="text-justify px-5 mt-3 pb-5">
          Where most of the digital marketing agencies are after profit, we are
          after growing the industry itself. Our philosophy is simple- we grow
          when the industry grows. Everyone at MonsterClaw is passionate about
          digital marketing and is very deeply connected to this industry. Being
          one of the pioneers in affiliate marketing, we want to become
          trendsetters in other aspects of digital marketing as well.
        </p>
      </div>
      <div className="hover:text-white rounded-2xl border-2 shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 hover:bg-sky-500 duration-500">
        <h1 className="text-center text-3xl font-bold py-3">OUR MISSION</h1>
        <img className="px-5 h-80 mx-auto" src={image6} alt="" />
        <p className="text-justify px-5 mt-3 pb-5">
          Our mission is to help make businesses receive the highest ROI. We
          want to help companies market their products and services successfully
          in highly competitive industries. We believe our growth depends on how
          much our clients grow and we treat their businesses as our own to
          ensure maximum growth.
        </p>
      </div>
      <div className="hover:text-white rounded-2xl border-2 shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 hover:bg-sky-500 duration-500">
        <h1 className="text-center text-3xl font-bold py-3">OUR VALUES</h1>
        <img className="px-5 " src={image8} alt="" />
        <p className="text-justify px-5 mt-3 pb-5">
          At MonsterClaw what we do is as important as knowing why we do. We
          believe Affiliate Marketing is the next big thing for online
          marketing. We believe over time more and more companies will go
          online, and the online space will be immensely big, and to do
          something recognizable in this arena, companies need to push the
          limit, they need to have the top marketers with them to succeed which
          will require our expertise.
        </p>
      </div>
    </div>
    </div>
  );
};
export default OurGoal;
