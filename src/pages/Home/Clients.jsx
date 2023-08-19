
import Marquee from "react-fast-marquee";
import img2 from "../../assets/clients/2.jpg";
import img4 from "../../assets/clients/3.jpg";
import img6 from "../../assets/clients/5.jpg";
import img7 from "../../assets/clients/9.jpg";
import img8 from "../../assets/clients/7.jpg";
import img9 from "../../assets/clients/8.jpg";
import bkash from "../../assets/clients/bkash.jpg";
import brac from "../../assets/clients/brac.jpg";
import brac_bank from "../../assets/clients/brac_bank.jpg";
import novartis from "../../assets/clients/novartis.jpg";

const Clients = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <h1 className="text-center font-semibold text-4xl mt-10 my-4">
        Our Clients{" "}
      </h1>
      <p className="text-slate-500 text-center my-4 font-medium pb-8">
        We are trusted by industry leaders
      </p>

      <div>
        <Marquee>
          <div className="grid grid-cols-5 gap-4 md:gap-8">
            <img src={novartis} alt="" />
            <img src={img2} alt="" />
            <img src={brac} alt="" />
            <img src={img4} alt="" />
            <img src={bkash} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={brac_bank} alt="" />
          </div>
        </Marquee>
      </div>

      
    </div>
  );
};

export default Clients;
