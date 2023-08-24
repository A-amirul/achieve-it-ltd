
import Marquee from "react-fast-marquee";
import img1 from "../../assets/clients/1.jpg";
import img2 from "../../assets/clients/2.jpg";
import img4 from "../../assets/clients/3.jpg";
import img6 from "../../assets/clients/5.jpg";
import img7 from "../../assets/clients/9.jpg";
import img8 from "../../assets/clients/7.jpg";
import img9 from "../../assets/clients/8.jpg";
import img10 from "../../assets/clients/9.jpg";
import img11 from "../../assets/clients/10.jpg";
import img12 from "../../assets/clients/11.jpg";


const Clients = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <h1 className="text-center font-semibold text-4xl mt-10 my-4 w-60 mx-auto border-y-4 border-indigo-500 py-2">
        Our Clients
      </h1>
      <p className="text-slate-500 text-center my-4 font-medium pb-8">
        We are trusted by industry leaders
      </p>

      <div>
        <Marquee>
          <div className="grid grid-cols-5 gap-4 md:gap-8">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img12} alt="" />
            <img src={img4} alt="" />
            <img src={img11} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>

      
    </div>
  );
};

export default Clients;
