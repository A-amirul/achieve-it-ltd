import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import img1 from "../../assets/about-image-1.jpg";
import img2 from "../../assets/about-image-2.jpg";
import img3 from "../../assets/about-image-3.jpg";
import img4 from "../../assets/about-image-4.jpg";
import right from "../../assets/right.png";

const Welcome = () => {
  useEffect(()=>{
    AOS.init({duration: 1500})
  }, [])
  return (
    <div className="pt-32 overflow-hidden">
      <div  className="md:flex justify-center bg-white gap-12 md:py-12 font-serif p-8 ">
        <div data-aos="fade-right">
          <div className="font-sans hover:font-serif">
            <p className="text-[#4A3D8F] font-bold underline decoration-red-600 underline-offset-2 font-serif	">
              Achieve It Ltd - Welcome To IT Solutions
            </p>
            <h1 className="text-4xl pt-4">
              Let Us Be Your Next <br />
              <span className="font-bold"> Preferred IT Partner</span>
            </h1>
          </div>
          <p className="md:max-w-[600px]  py-8 text-justify">
            Our IT Solutions will get you on move towards your destination
            faster than rivals in a more reliably way!.Undergoes robust quality
            testing to ensure flawless, round the clock, and world-class
            Undergoes robust quality testing to ensure flawless, round- the
            world-class Undergoes robust quality testing to ensure flawless,
            round- the clock, services. bangla puzzle and world-class Undergoes
            robust quality testing to ensure flawless.
          </p>
          <ul className="leading-8">
            <li>
              <span className="flex">
                <img className="w-8 h-8" src={right} alt="" />
                We are committed to providing quality IT Services
              </span>
            </li>
            <li>
              <span className="flex">
                <img className="w-8 h-8" src={right} alt="" />
                Our benefits are endless for local IT Companies & Startups
              </span>{" "}
            </li>
            <li>
              <span className="flex">
                <img className="w-8 h-8" src={right} alt="" />
                Really know the true needs and expectations of customers
              </span>{" "}
            </li>
            <li>
              <span className="flex">
                <img className="w-8 h-8" src={right} alt="" />
                Talented & experienced management solutions for IT
              </span>{" "}
            </li>
            <li>
              <span className="flex">
                <img className="w-8 h-8" src={right} alt="" />
                Processes of achieving the excellence and continue improvements
              </span>{" "}
            </li>
          </ul>
        </div>

        <div data-aos="fade-left" className="grid grid-cols-2 gap-4 mt-5 md:mt-0">
          <img className="rounded-lg" src={img1} alt="img" />
          <img className="rounded-lg" src={img2} alt="img" />
          <img className="rounded-lg" src={img3} alt="img" />
          <img className="rounded-lg" src={img4} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
