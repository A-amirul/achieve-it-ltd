import image6 from "../../assets/AboutSection/image6.png";
import image7 from "../../assets/AboutSection/image7.png";
import image8 from "../../assets/AboutSection/image8.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const OurGoal = () => {
  useEffect(()=>{
    AOS.init({duration: 2500})
  }, [])
  return (
    <div className="bg-[#ffffff] py-20 ">
    
    <div  className="grid md:grid-cols-3 gap-8 my-16 mx-auto max-w-screen-xl">
      <div  data-aos="fade-right"  className=" hover:text-white rounded-2xl border-2 shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 hover:bg-sky-500 duration-500">
        <h1 className="text-center text-3xl font-bold py-3">OUR VISION</h1>
        <img className="px-5 h-80" src={image7} alt="" />
        <p className="text-justify px-5 mt-3 pb-5">
          Our vision at Achieve IT Limited is to be a pioneering leader in the
          tech industry, driving innovation and igniting digital transformation.
          We aspire to reshape industries, empower businesses, and enrich lives
          globally through our cutting-edge solutions. By fostering a culture of
          creativity and collaboration, we aim to continually push boundaries
          and deliver exceptional value to our clients. Our ultimate goal is to
          be at the forefront of technological advancements, shaping a future
          where our contributions make a meaningful impact on society, business,
          and the world at large.
        </p>
      </div>
      <div  data-aos="fade-down"  className="hover:text-white rounded-2xl border-2 shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 hover:bg-sky-500 duration-500">
        <h1 className="text-center text-3xl font-bold py-3">OUR MISSION</h1>
        <img className="px-5 h-80 mx-auto" src={image6} alt="" />
        <p className="text-justify px-5 mt-3 pb-5">
          At Achieve IT Limited, our mission is clear: we are dedicated to
          redefining industries through innovative software experiences. We
          empower businesses with transformative solutions that leverage
          cutting-edge technology and a commitment to ethical responsibility.
          Collaboration is at our core, as we believe diverse perspectives fuel
          groundbreaking advancements. Our culture of continuous learning
          ensures we stay ahead in the rapidly evolving tech landscape. With
          unwavering passion, we&apos;re shaping a future where technology
          isn&apos;t just a tool, but a driving force for positive change and
          progress.
        </p>
      </div>

      <div  data-aos="fade-left"  className="hover:text-white rounded-2xl border-2 shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 hover:bg-sky-500 duration-500">
        <h1 className="text-center text-3xl font-bold py-3">OUR VALUES</h1>

        <img className="px-5 " src={image8} alt="" />
        <p className="text-justify px-5 mt-3 pb-5">
          Achieve IT Limited is a dynamic IT company fueled by a
          commitment to innovation, excellence, and ethical responsibility. Our
          team thrives on collaboration and continuous learning, delivering
          tailor-made solutions that empower businesses and drive growth. We
          take a client-centric approach, understanding unique needs and
          crafting impactful technology that creates meaningful change.
          Sustainability is at our core, and we embrace adaptability to navigate
          the ever-evolving tech landscape. With a passion for progress, we are
          dedicated to pushing boundaries and leading the way in transformative
          digital solutions that positively impact industries and society as a
          whole.
        </p>
      </div>
    </div>
    </div>
  );
};
export default OurGoal;
