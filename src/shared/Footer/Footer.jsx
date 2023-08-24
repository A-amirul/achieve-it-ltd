import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#343946] text-base-100 mx-auto px-5 mt-32">
      <footer className="footer pt-8 max-w-screen-xl mx-auto">
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
        <div className="text-xl ">
          <span className="font-bold text-2xl tracking-wide text-[#82d0f6]">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="text-xl ">
          <span className="font-bold text-2xl tracking-wide text-[#82d0f6]">Company</span>
          <Link to='/about' className="link link-hover">About us</Link>
          <Link to='/contact' className="link link-hover">Contact</Link>
          <Link to='/career' className="link link-hover">Jobs</Link>
        </div>
        <div className="text-xl ">
        <span className="font-bold text-2xl tracking-wide text-[#82d0f6]">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

      </footer>
      <footer className="footer  pt-4 max-w-screen-xl mx-auto border-base-300">
        <div className="md:place-self-center md:justify-self-center">
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com/profile.php?id=100094647446276" className="px-2 py-2 bg-[#3b5998] text-xl rounded-lg hover:text-[#3b5998] hover:bg-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
              <p><FaFacebookF></FaFacebookF></p>
            </Link>
            <Link to="https://www.linkedin.com/company/96591798" className="px-2 py-2 bg-[#007bb5] text-xl rounded-lg hover:text-[#007bb5] hover:bg-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
              <p><FaLinkedinIn></FaLinkedinIn></p>
            </Link>
            <a className="px-2 py-2 bg-[#55acee] text-xl rounded-lg hover:text-[#55acee] hover:bg-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
              <p><FaTwitter></FaTwitter></p>
            </a>
            <a className="px-2 py-2 bg-[#c30000] text-xl rounded-lg hover:text-[#c30000] hover:bg-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
              <p><FaYoutube></FaYoutube></p>
            </a>
          </div>
        </div>
      </footer>
      <footer className="text-center max-w-screen-xl  mx-auto py-4">
        <small>Copyright © 2023 - All right reserved by Achieve IT Ltd.</small>
      </footer>
    </div>
  );
};

export default Footer;
