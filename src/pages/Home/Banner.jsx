import { useTypewriter } from "react-simple-typewriter";
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdMiscellaneousServices } from "react-icons/md";
import { Link} from 'react-scroll';


const Banner = () => {
  const [text] = useTypewriter({
    words: [" Innovate, Connect & Succeed", "Your Trusted IT Partner"],
    loop: 30,
  });
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[calc(100vh-115px)]"
        style={{
          backgroundImage: "url('https://i.ibb.co/nr873vW/banner1.jpg')",
        }}
      >
        <div className="hero min-h-screen">
          <div className="hero-content -mt-72 md:-mt-40">
            <div className=" ">
              <div>
                <h1 className="text-3xl md:text-6xl py-8 font-bold text-blue-400">
                  Achieve <span className="text-yellow-400">IT</span> Limited
                </h1>
                <h3 className="text-yellow-400 font-medium text-2xl md:text-4xl">
                  {text} |
                </h3>
                <p className="py-4 text-lg lg:me-36 lg:pe-60 text-base-100">
                  Achieve IT Limited is certified next-generation global IT
                  service and technology solution provider company that helps
                  enterprises re-imagine their business and navigate their
                  digital transformation.
                </p>
                <div className="pt-4 space-x-4 ">
                  <Link to="ourstory" spy={true} smooth={true} offset={-100} duration={300} 
                 
                    className="btn bg-gradient-to-r  md:text-lg rounded-3xl  text-green-600 px-2 md:px-8 font-semibold "
                  >
                  <PiNotePencilDuotone></PiNotePencilDuotone>

                    Visit Here
                  </Link>

                  
                  <Link to="service" spy={true} smooth={true} offset={50} duration={500} 
                    className="btn  md:text-lg  rounded-3xl text-white bg-gradient-to-t from-blue-700 to-teal-500  font-semibold px-4 md:px-8"
                  >
                  <MdMiscellaneousServices></MdMiscellaneousServices>
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
