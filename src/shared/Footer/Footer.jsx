import logo from "../../assets/logo/logo.png";
import linkdin from "../../assets/linkdin.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
const Footer = () => {
  return (
    <div className="bg-[#297583] text-base-100 mx-auto px-20">
      <footer className="footer pt-8 max-w-screen-xl mx-auto">
        <div className="text-xl ">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="text-xl ">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="text-xl ">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <div className=" Grid justify-center items-center">
            <img className="w-36" src={logo} alt="" />
          </div>
          <p>
            <span className="text-2xl font-bold">Natural Madina Tower,</span>
            <br /> East Vatara (Sayeed Nagor), <br /> 100 Feet, <br /> Gulshan,
            Vatara, Dhaka
          </p>
        </div>
      </footer>
      <footer className="footer  pt-4 max-w-screen-xl mx-auto border-base-300">
        <div className="md:place-self-center md:justify-self-center">
          <div className="grid grid-flow-col gap-4">
            <a className=" bg-white shadow-2xl px-2 py-2 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <img className="w-8" src={facebook} alt="" />
            </a>
            <a className="bg-white shadow-2xl px-2 py-2 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <img
                className="border-2 mt-[2px] rounded-full border-[#e40076] w-8 object-contain"
                src={linkdin}
                alt=""
              />
            </a>
            <a className="bg-white shadow-2xl px-2 py-2 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <img className="w-8 " src={twitter} alt="" />
            </a>
            <a className="bg-white shadow-2xl px-2 py-2 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <img className="w-8" src={youtube} alt="" />
            </a>
          </div>
        </div>
      </footer>
      <footer className="text-center max-w-screen-xl  mx-auto py-4">
        <p>Copyright © 2023 - All right reserved by Achieve IT Ltd.</p>
      </footer>
    </div>
  );
};

export default Footer;
